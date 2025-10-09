import { initGame } from "./initGame";
import { placeCard } from "./placeCard";

export const initialState = {
  board: Array(9).fill(null),
  turn: null,
  playerHand: [],
  cpuHand: [],
  gameStarted: false,
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "INIT_GAME":
      return initGame(state, action.payload);

    case "PLACE_CARD":
      return placeCard(state, action.payload.index, action.payload.card);

    case "RESET_GAME":
      return { ...initialState };

    default:
      return state;
  }
};