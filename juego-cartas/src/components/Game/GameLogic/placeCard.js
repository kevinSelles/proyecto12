import { handleBattle } from "./handleBattle";

export const placeCard = (state, index, selectedCard) => {
  if (!state.gameStarted) return state;
  if (state.board[index]) return state;

  const newBoard = state.board.slice();
  const placedCard = { ...selectedCard };
  newBoard[index] = placedCard;

  const removeOneById = (arr, targetId) => {
    const copy = arr.slice();
    const idx = copy.findIndex(c => c.id === targetId);
    if (idx >= 0) copy.splice(idx, 1);
    return copy;
  };

  let newPlayerHand = state.playerHand.slice();
  let newCpuHand = state.cpuHand.slice();
  if (placedCard.owner === "player") {
    newPlayerHand = removeOneById(state.playerHand, placedCard.id);
  } else if (placedCard.owner === "cpu") {
    newCpuHand = removeOneById(state.cpuHand, placedCard.id);
  }

  const updatedBoard = handleBattle(newBoard, index);

  const nextTurn = state.turn === "player" ? "cpu" : "player";

  return {
    ...state,
    board: updatedBoard,
    playerHand: newPlayerHand,
    cpuHand: newCpuHand,
    turn: nextTurn,
  };
};