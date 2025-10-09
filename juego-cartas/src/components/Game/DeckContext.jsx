import { createContext, useReducer, useContext } from "react";

const DeckContext = createContext();

const initialState = {
  deck: []
};

function deckReducer(state, action) {
  switch (action.type) {
    case "ADD_CARD":
      if (state.deck.length >= 6) return state;
      return { ...state, deck: [...state.deck, action.payload] };
    case "REMOVE_CARD":
      return { ...state, deck: state.deck.filter(c => c.id !== action.payload) };
    case "CLEAR_DECK":
      return initialState;
    default:
      return state;
  }
}

export function DeckProvider({ children }) {
  const [state, dispatch] = useReducer(deckReducer, initialState);
  return (
    <DeckContext.Provider value={{ state, dispatch }}>
      {children}
    </DeckContext.Provider>
  );
}

export const useDeck = () => useContext(DeckContext);