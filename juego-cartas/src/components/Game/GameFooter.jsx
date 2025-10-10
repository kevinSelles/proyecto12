const GameFooter = ({ cpuHandCount, emptyCells }) => (
  <div className="game-footer">
    <div>Cartas CPU: {cpuHandCount}</div>
    <div>Casillas vacías: {emptyCells}</div>
  </div>
);

export default GameFooter;