import "./Home.css";

const Home = () => {
  return (
    <section className="page home">
      <picture>
        <source
          srcSet="https://res.cloudinary.com/damjp56im/image/upload/v1760103742/fondo-movil_xtywsr.webp"
          media="(max-width: 700px)"
        />
        <img
          className="home-img"
          src="https://res.cloudinary.com/damjp56im/image/upload/v1759879504/inicio_me8gxc.webp"
          alt="Portada del juego"
        />
      </picture>
    </section>
  );
};

export default Home;