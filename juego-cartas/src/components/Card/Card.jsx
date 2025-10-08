import "./Card.css";

const Card = ({ card, onSelect, isSelected }) => {
  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(card)}
    >
      <img src={card.image} alt={`Carta ${card.id}`} loading="lazy" />
    </div>
  );
};

export default Card;