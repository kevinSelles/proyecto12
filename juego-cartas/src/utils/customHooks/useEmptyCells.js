import { useMemo } from "react";

export const useEmptyCells = (board) => {
  return useMemo(() => board.filter((c) => !c).length, [board]);
};