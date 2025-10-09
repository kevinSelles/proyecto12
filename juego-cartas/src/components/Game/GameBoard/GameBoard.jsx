import React from "react";
import "./GameBoard.css";

const colors = {
  player: "#a7d8de",
  cpu: "#f5b48a"
};

const GameBoard = React.memo(({ board = [], onCellClick }) => {
  return (
    <div className="game-board-grid">
      {board.map((cell, i) => (
        <div
          key={i}
          className={`game-cell ${cell ? cell.owner : "empty"}`}
          onClick={() => onCellClick(i)}
          role="button"
          tabIndex={0}
          style={{ backgroundColor: cell ? colors[cell.owner] : "transparent" }}
        >
          {cell ? (
            <img src={cell.image} alt={`card-${cell.id}`} loading="lazy" />
          ) : (
            <div className="placeholder" />
          )}
        </div>
      ))}
    </div>
  );
});

export default GameBoard;