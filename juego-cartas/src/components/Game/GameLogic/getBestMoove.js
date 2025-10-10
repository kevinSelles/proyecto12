export const getBestMove = (cpuHand, board) => {
  const size = 3;
  const directions = [
    { dx: 0, dy: -1, side: "top", opposite: "bottom" },
    { dx: 1, dy: 0, side: "right", opposite: "left" },
    { dx: 0, dy: 1, side: "bottom", opposite: "top" },
    { dx: -1, dy: 0, side: "left", opposite: "right" },
  ];

  const getIndex = (x, y) => y * size + x;
  const getCoords = (i) => ({ x: i % size, y: Math.floor(i / size) });

  let bestMove = null;
  let bestScore = -Infinity;

  for (const card of cpuHand) {
    for (let i = 0; i < board.length; i++) {
      if (board[i]) continue;

      let score = 0;
      const { x, y } = getCoords(i);

      const isCorner = [0, 2, 6, 8].includes(i);
      if (isCorner) score += 2;

      for (const dir of directions) {
        const nx = x + dir.dx;
        const ny = y + dir.dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) {
          if (card[dir.side] <= 5) score += 1;
          continue;
        }

        const neighborIndex = getIndex(nx, ny);
        const neighbor = board[neighborIndex];
        if (!neighbor) continue;

        if (neighbor.owner === "cpu") {
          if (card[dir.side] <= 3) score += 1;
        } else {
          if (card[dir.side] > neighbor[dir.opposite]) {
            score += 3;
          } else if (card[dir.side] < neighbor[dir.opposite]) {
            score -= 2;
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMove = { card, index: i };
      }
    }
  }

  return bestMove;
};