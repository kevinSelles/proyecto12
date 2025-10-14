import "./Rules.css";

const Rules = () => {
  return (
    <section className="page rules">
      <h2>Reglas</h2>
      <p>Antes de comenzar, ve al apartado CARTAS y elige los 6 personajes que formarán tu mazo de batalla.
      Cuando tengas tu selección, entra en la sección JUEGO y la partida comenzará automáticamente. La IA recibirá 6 cartas aleatorias y el turno inicial se decidirá al azar.</p>
      <p>Cada carta tiene 4 valores de ataque, uno por dirección: arriba, abajo, izquierda y derecha. Todas las cartas son igual de poderosas (la suma de sus valores siempre es 25), pero los puntos se reparten de forma distinta. Algunas tienen un ataque muy fuerte en una dirección y débil en otra, mientras que otras son más equilibradas.💡 Elige una combinación variada para evitar puntos débiles en tu mazo.</p>
      <p>El juego es muy simple. El jugador y la IA se turnan para colocar una carta por turno. Para distinguirlas, las cartas del jugador tendran el fondo azul y las de la IA rojo. Solo se pueden colocar cartas en casillas vacías del tablero.</p>
      <p>Si colocas una carta junto a una carta enemiga (Arriba, abajo o a los lados), ambas luchan automáticamente. Se comparan los valores de ataque enfrentados y la carta con el valor más alto gana, mientras que la perdedora cambiará de color. Si colocas una carta entre varias cartas enemigas, luchará contra todas las adyacentes. Cada carta enemiga que pierda cambiará a tu color y finalmente tu carta también cambiará de color si perdió contra al menos una de las enemigas.</p>
      <p>Cuando las 9 casillas estén ocupadas, la partida termina y gana quien tenga más cartas de su color.</p>
    </section>
  );
};

export default Rules;