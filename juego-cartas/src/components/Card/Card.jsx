import "./Card.css";

const Card = ({ card, onSelect, isSelected }) => {
  return (
  <img
    className={`card ${isSelected ? "selected" : ""}`}
    src={card.image}
    alt={`Carta ${card.id}`}
    loading="lazy"
    onClick={() => onSelect(card)}
  />
  );
};

export default Card;