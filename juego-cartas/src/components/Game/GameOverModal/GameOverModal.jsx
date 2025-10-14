import { useNavigate } from "react-router-dom";
import "./GameOverModal.css";

const GameOverModal = ({ winner }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/cartas");
  };

  const getMessage = () => {
    return winner === "player"
      ? "¡Has ganado la partida! 🎉"
      : "La IA ha ganado 😢";
  };

  return (
    <div className="gameover-modal">
      <div className="modal-content">
        <h2>{getMessage()}</h2>
        <button onClick={handleBack}>Volver a elegir cartas</button>
        <img className="modal-img" src="https://res.cloudinary.com/damjp56im/image/upload/v1760103685/dp-corazon_dfmjwf.webp" alt="Deadpool haciendo un corazón"></img>
      </div>
    </div>
  );
};

export default GameOverModal;