import { useEffect } from "react";
import cardsData from "../data/cards.json";

export const useInitGame = (deckState, dispatch, setWinner) => {
  useEffect(() => {
    if (deckState.deck.length === 6) {
      dispatch({ type: "INIT_GAME", payload: { playerHand: deckState.deck, allCards: cardsData } });
      setWinner(null);
    }
  }, [deckState.deck, dispatch, setWinner]);
};