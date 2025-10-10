import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useDeck } from "../Game/DeckContext";
import { useTooltip } from "../../utils/customHooks/useTooltip";
import Tooltip from "../Tooltip/Tooltip";

const Nav = () => {

  const { state } = useDeck();
  const { visible, show, hide } = useTooltip();
  const disabled = state.deck.length < 6;

  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">Inicio</NavLink>
      <NavLink to="/cartas" className="nav-link">Cartas</NavLink>
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={disabled ? show : undefined}
        onMouseLeave={hide}
      >
        {disabled ? (
        <span className="nav-link disabled">Juego</span>
        ) : (
        <NavLink to="/juego" className="nav-link">
         Juego
        </NavLink>
        )}
      <Tooltip visible={visible && disabled} text="Selecciona 6 cartas antes de jugar" />
      </div>

      <NavLink to="/reglas" className="nav-link">Reglas</NavLink>
    </nav>
  );
};

export default Nav;