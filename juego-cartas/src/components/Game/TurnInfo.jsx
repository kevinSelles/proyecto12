const TurnInfo = ({ turn }) => (
  <div className="turn-info">
    Turno: {turn ? (turn === "player" ? "Jugador" : "Máquina") : "—"}
  </div>
);

export default TurnInfo;