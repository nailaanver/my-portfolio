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
            Passionate Python Full-Stack Developer specializing in React and Django, focused on building modern, efficient, and user-friendly web applications.
          </p>
          
          <div className="hero-actions">
            {/* Change button to an anchor tag with the download attribute */}
            <a 
                href="/Fathima_Naila_Python_Fullstack.docx.pdf" 
                download="Fathima_Naila_Resume.pdf" 
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
            >
                Download CV ↗
            </a>

            <button className="btn-secondary" onClick={() => window.location.href = '#contact'}>
                <span className="btn-icon">✉</span> Contact Me
            </button>
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