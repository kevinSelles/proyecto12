import React, { useReducer, useEffect, useState, useCallback, useMemo } from "react";
import { useDeck } from "../../components/Game/DeckContext";
import { gameReducer, initialState } from "../../components/Game/GameLogic/gameReducer";
import PlayerDeck from "../../components/Game/PlayerDeck/PlayerDeck";
import GameBoard from "../../components/Game/GameBoard/GameBoard";
import cardsData from "../../utils/data/cards.json";
import "./Game.css";

const Game = () => {
  const { state: deckState } = useDeck();
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (deckState.deck.length === 6) {
      dispatch({
        type: "INIT_GAME",
        payload: { playerHand: deckState.deck, allCards: cardsData },
      });
    }
  }, [deckState.deck]);

  useEffect(() => {
    if (!state.gameStarted) return;
    if (state.turn !== "cpu") return;

    const t = setTimeout(() => {
      const availableCards = state.cpuHand || [];
      const emptyIndices = state.board
        .map((c, i) => (c ? null : i))
        .filter((i) => i !== null);

      if (availableCards.length === 0 || emptyIndices.length === 0) return;

      const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
      const randomPos = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

      dispatch({
        type: "PLACE_CARD",
        payload: { index: randomPos, card: { ...randomCard, owner: "cpu" } },
      });
    }, 700);

    return () => clearTimeout(t);
  }, [state.turn, state.board, state.cpuHand, state.gameStarted]);

  const handleSelectCard = useCallback(
    (card) => {
      if (state.turn !== "player") return;
      setSelectedCard(card);
    },
    [state.turn]
  );

  const handleCellClick = useCallback(
    (index) => {
      if (!state.gameStarted) return;
      if (state.board[index]) return;
      if (state.turn !== "player") return;
      if (!selectedCard) return;

      dispatch({
        type: "PLACE_CARD",
        payload: { index, card: { ...selectedCard, owner: "player" } },
      });
      setSelectedCard(null);
    },
    [state.board, state.turn, selectedCard, state.gameStarted]
  );

  const emptyCells = useMemo(() => state.board.filter((c) => !c).length, [state.board]);

  return (
    <div className="game-page">
      <div className="game-left">
        <PlayerDeck
          cards={state.playerHand}
          onSelect={handleSelectCard}
          selectedCard={selectedCard}
          turn={state.turn}
        />
      </div>

      <div className="game-right">
        <div className="turn-info">
          Turno: {state.turn ? (state.turn === "player" ? "Jugador" : "Máquina") : "—"}
        </div>

        <GameBoard board={state.board} onCellClick={handleCellClick} />

        <div className="game-footer">
          <div>Cartas CPU: {state.cpuHand?.length || 0}</div>
          <div>Casillas vacías: {emptyCells}</div>
        </div>
      </div>
    </div>
  );
};

export default Game;