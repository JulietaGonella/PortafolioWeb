import profile from '../assets/profile.jpeg';


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profile} alt="Julieta Gonella" />
        <div>
          <h2>¡Hola! Soy Julieta Gonella 👋</h2>
          <p>
            Estudiante de Analista en Sistemas y Programadora Junior apasionada
            por el desarrollo web. Me encanta crear soluciones funcionales y
            aprender nuevas tecnologías.
          </p>
          <a href="/cv.pdf" className="btn">Descargar CV</a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
