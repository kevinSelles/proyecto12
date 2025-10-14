import "./Game.css";
import { useDeck } from "../../components/Game/DeckContext";
import { useGameLogic } from "../../utils/customHooks/useGameLogic";
import PlayerDeck from "../../components/Game/PlayerDeck/PlayerDeck";
import GameBoard from "../../components/Game/GameBoard/GameBoard";
import GameOverModal from "../../components/Game/GameOverModal/GameOverModal";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();
  const { state: deckState } = useDeck();
  const { state, selectedCard, handleSelectCard, handleCellClick, winner } =
    useGameLogic(deckState);

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
        <GameBoard board={state.board} onCellClick={handleCellClick} />
        {winner && (
          <GameOverModal
            winner={winner}
            onReturnToDeck={() => navigate("/cartas")}
          />
        )}
      </div>
    </div>
  );
};

export default Game;