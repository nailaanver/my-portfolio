import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This is the function ESLint said was unused
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-wrapper">
      <div className="container navbar-content">
        <h2 className="logo">Naila<span className="accent-dot">.</span>dev</h2>

        {/* The 3-line hamburger icon */}
        <div 
          className={`menu-toggle ${isMenuOpen ? "is-active" : ""}`} 
          onClick={toggleMenu} // Fixed: now toggleMenu is being used!
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Links slide in when isMenuOpen is true */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn-hire">Hire Me ↗</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;