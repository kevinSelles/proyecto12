export const handleBattle = (board, index) => {
  const updatedBoard = board.slice();
  const placed = updatedBoard[index];
  if (!placed) return updatedBoard;

  const row = Math.floor(index / 3);
  const col = index % 3;

  const dirs = [
    { dr: -1, dc: 0, side: "top", opposite: "bottom" },
    { dr: 1, dc: 0, side: "bottom", opposite: "top" },
    { dr: 0, dc: -1, side: "left", opposite: "right" },
    { dr: 0, dc: 1, side: "right", opposite: "left" }
  ];

  const placedOwner = placed.owner;
  let placedShouldFlipTo = null;

  for (const { dr, dc, side, opposite } of dirs) {
    const nr = row + dr;
    const nc = col + dc;
    if (nr < 0 || nr > 2 || nc < 0 || nc > 2) continue;

    const neighborIndex = nr * 3 + nc;
    const neighbor = updatedBoard[neighborIndex];
    if (!neighbor) continue;
    if (neighbor.owner === placedOwner) continue;

    const placedValue = placed[side];
    const neighborValue = neighbor[opposite];

    if (placedValue > neighborValue) {
      updatedBoard[neighborIndex] = { ...neighbor, owner: placedOwner };
    } else if (neighborValue > placedValue) {
      placedShouldFlipTo = neighbor.owner;
    }
  }

  if (placedShouldFlipTo) {
    updatedBoard[index] = { ...updatedBoard[index], owner: placedShouldFlipTo };
  }

  return updatedBoard;
};