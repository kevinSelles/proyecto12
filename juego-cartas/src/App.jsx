import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cards from "./pages/Cards/Cards";
import Game from "./pages/Game/Game";
import Rules from "./pages/Rules/Rules";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartas" element={<Cards />} />
          <Route path="/juego" element={<Game />} />
          <Route path="/reglas" element={<Rules />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;