import { useEffect } from "react";
import { getBestMove } from "../../components/Game/GameLogic/getBestMoove";

export const useCpuTurn = (state, dispatch) => {
  useEffect(() => {
    if (!state.gameStarted || state.turn !== "cpu") return;

    const t = setTimeout(() => {
      const move = getBestMove(state.cpuHand, state.board);
      if (!move) return;

      dispatch({
        type: "PLACE_CARD",
        payload: { index: move.index, card: { ...move.card, owner: "cpu" } },
      });
    }, 700);

    return () => clearTimeout(t);
  }, [state.turn, state.board, state.cpuHand, state.gameStarted, dispatch]);
};