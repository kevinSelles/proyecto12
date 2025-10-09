import { getRandomCpuDeck } from "../../../utils/getRandomCpuDeck";

export const initGame = (state, payload = {}) => {
  const { playerHand = [], allCards = [] } = payload;

  const cpuHand = getRandomCpuDeck(allCards, 6);
  const starter = Math.random() < 0.5 ? "player" : "cpu";

  return {
    ...state,
    board: Array(9).fill(null),
    playerHand: playerHand.slice(),
    cpuHand: cpuHand.slice(),
    turn: starter,
    gameStarted: true,
  };
};