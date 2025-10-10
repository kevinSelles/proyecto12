import "./Game.css";
import { useDeck } from "../../components/Game/DeckContext";
import { useGameLogic } from "../../utils/customHooks/useGameLogic";
import PlayerDeck from "../../components/Game/PlayerDeck/PlayerDeck";
import GameBoard from "../../components/Game/GameBoard/GameBoard";
import TurnInfo from "../../components/Game/TurnInfo";
import GameFooter from "../../components/Game/GameFooter";
import GameOverModal from "../../components/Game/GameOverModal/GameOverModal";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();
  const { state: deckState } = useDeck();
  const { state, selectedCard, handleSelectCard, handleCellClick, emptyCells, winner } =
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
        <TurnInfo turn={winner ? null : state.turn} />
        <GameBoard board={state.board} onCellClick={handleCellClick} />
        {winner && (
          <GameOverModal
            winner={winner}
            onReturnToDeck={() => navigate("/cartas")}
          />
        )}
        <GameFooter cpuHandCount={state.cpuHand?.length || 0} emptyCells={emptyCells} />
      </div>
    </div>
  );
};

export default Game;