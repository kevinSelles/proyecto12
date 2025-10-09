import React from "react";
import Card from "../../Card/Card";
import "./PlayerDeck.css";

const PlayerDeck = React.memo(({ cards = [], onSelect, selectedCard, turn }) => {
  return (
    <div className="player-deck">
      <h2>Tu mazo</h2>
      <div className="player-deck-grid">
        {cards.length === 0 ? (
          <p className="empty">No hay cartas en el mazo.</p>
        ) : (
          cards.map(card => (
            <Card
              key={card.id}
              card={card}
              onSelect={onSelect}
              isSelected={selectedCard && selectedCard.id === card.id}
            />
          ))
        )}
      </div>
      <p className="hint">{turn === "player" ? "Tu turno: selecciona una carta" : "Esperando al oponente..."}</p>
    </div>
  );
});

export default PlayerDeck;