export const calcWinner = (board) => {
  const playerCount = board.filter((c) => c?.owner === "player").length;
  const cpuCount = board.filter((c) => c?.owner === "cpu").length;
  return playerCount > cpuCount ? "player" : "cpu";
};