import "./Rules.css";

const Rules = () => {
  return (
    <section className="page rules">
      <h2>Reglas</h2>
      <p>Para iniciar la partida, primero debes ir al apartado -CARTAS- y elegir a los 6 personajes que quieras de entre los 50 disponbles para formar tu mazo de batalla.</p>
      <p>Cada carta tiene 4 valores de ataque y cada uno apunta en una dirección, arriba, abajo, izquierda y derecha. Todas las cartas son igual de fuertes, la suma de sus valores siempre es 25, pero cada una los tiene repartidos de forma diferente. Una carta con un valor de ataque muy alto en una dirección, tendrá un valor bajo en otra dirección, mientras que otras cartas tienen valores intermedios en las cuatro direcciones. Piensa bien en tu estrategia para elegir personajes que se complementen y no queden puntos débiles en tu mazo de batalla.</p>
      <p>Una vez que elijas tus 6 personajes, pulsa la sección -JUEGO-. Y comenzará la partida automáticamente. Se asignará de forma aleatoria si empieza el jugador o la IA. La IA recibirá 6 cartas aleatorias, por lo que cada partida contra ella será diferente.</p>
      <p>El juego es muy simple. El jugador y la IA irán turnándose para colocar una de sus cartas en cada turno, sobre la casilla del tablero que elijan, siempre que la casilla esté libre (No se puede colocar una carta sobre otra).</p>
      <p>Cada vez que se coloque una carta, esta tendrá un color de fondo u otro, dependiendo de si pertenece al jugador o a la IA. Si la carta se soloca junto a una carta enemiga (Arriba, abajo o a los lados), ambas lucharán comparando el valor de ataque que apunta hacia la carta enemiga y el valor de ataque enemigo que apunta hacia la carta colocada. La carta que pierde la lucha, cambiará de color y pasará a ser del rival. En el caso de que se coloque una carta entre varias cartas enemigas, no habrá un orden específico de lucha, la carta colocada luchará de forma independiente contra cada una de las cartas enemigas que estén a su alrededor, de modo que todas las que pierdan contra la carta colocada cambiarán de color y si la carta colocada pierde contra al menos una de las cartas enemigas, la carta colocada también cambiará de color.</p>
      <p>Una vez que ya están ocupadas las 9 casillas del tablero, la partida habrá terminado y quien tenga más cartas de su color será el vencedor.</p>
    </section>
  );
};

export default Rules;