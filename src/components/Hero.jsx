import "../styles/Hero.css";
import heroImage from "../assets/images/girl-4.jpg";


function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <p className="greeting"> Hey There!</p>
          <h1 className="hero-title">
            I'm Fathima Naila
          </h1>
          <h2 className="hero-subtitle">
            <span className="highlight">Python Full Stack Developer</span>
          </h2>
          <p className="hero-description">
            I build modern web applications using React, Django, and PostgreSQL. 
            Passionate about clean UI and scalable backend systems.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">Download CV ↗</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="shape-bg"></div>
          {/* Add your photo here */}
          <img src={heroImage} alt="Fathima Naila" className="hero-img" />
        </div>

      </div>
    </section>
  );
}

export default Hero;