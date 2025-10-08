import "./Cards.css";
import { useState, useMemo } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import cardsData from "../../utils/data/cards.json";

const Cards = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [page, setPage] = useState(1);
  const cardsPerPage = 10;
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const currentCards = useMemo(() => {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    return cardsData.slice(start, end);
  }, [page]);

  const handleSelect = (card) => {
    const isAlreadySelected = selectedCards.some(c => c.id === card.id);

    if (isAlreadySelected) {
      setSelectedCards(selectedCards.filter(c => c.id !== card.id));
    } else if (selectedCards.length < 6) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  return (
    <section className="cards-page">
      <div className="deck-section">
        <h2>Tu mazo:</h2>
        <div className="deck-grid">
          {selectedCards.length === 0 ? (
            <p className="empty-msg">Aún no has elegido cartas</p>
          ) : (
            selectedCards.map(card => (
              <Card
                key={card.id}
                card={card}
                onSelect={handleSelect}
                isSelected={true}
              />
            ))
          )}
        </div>
      </div>

      <div className="collection-section">
        <h2>Colección completa:</h2>
        <div className="collection-grid">
          {currentCards.map(card => (
            <Card
              key={card.id}
              card={card}
              onSelect={handleSelect}
              isSelected={selectedCards.some(c => c.id === card.id)}
            />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={() => setPage(page - 1)}
          onNext={() => setPage(page + 1)}
        />
      </div>
    </section>
  );
};

export default Cards;