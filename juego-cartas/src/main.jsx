import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { DeckProvider } from "./components/Game/DeckContext.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <DeckProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DeckProvider>
  );