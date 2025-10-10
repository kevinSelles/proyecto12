import { useReducer, useState, useCallback, useEffect } from "react";
import { gameReducer, initialState } from "../../components/Game/GameLogic/gameReducer";
import { useCpuTurn } from "./useCpuTurn";
import { useEmptyCells } from "./useEmptyCells";
import { calcWinner } from "../../components/Game/GameLogic/calcWinner";
import { useInitGame } from "./useInitGame";

export const useGameLogic = (deckState) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [selectedCard, setSelectedCard] = useState(null);
  const [winner, setWinner] = useState(null);

  useInitGame(deckState, dispatch, setWinner);
  useCpuTurn(state, dispatch);

  const handleSelectCard = useCallback((card) => state.turn === "player" && setSelectedCard(card), [state.turn]);

  const handleCellClick = useCallback(
    (index) => {
      if (!state.gameStarted || state.board[index] || state.turn !== "player" || !selectedCard) return;
      dispatch({ type: "PLACE_CARD", payload: { index, card: { ...selectedCard, owner: "player" } } });
      setSelectedCard(null);
    },
    [state.board, state.turn, selectedCard, state.gameStarted]
  );

  const emptyCells = useEmptyCells(state.board);

  useEffect(() => {
    if (!state.gameStarted || winner) return;
    if (state.board.filter(Boolean).length !== 9) return;

    const timer = setTimeout(() => setWinner(calcWinner(state.board)), 1500);
    return () => clearTimeout(timer);
  }, [state.board, state.gameStarted, winner]);

  return { state, selectedCard, setSelectedCard, handleSelectCard, handleCellClick, emptyCells, winner };
};