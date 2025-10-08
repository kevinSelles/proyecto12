import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">Inicio</NavLink>
      <NavLink to="/cartas" className="nav-link">Cartas</NavLink>
      <NavLink to="/juego" className="nav-link">Juego</NavLink>
      <NavLink to="/reglas" className="nav-link">Reglas</NavLink>
    </nav>
  );
};

export default Nav;