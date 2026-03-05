import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="container navbar-content">
        <h2 className="logo">Naila<span className="accent-dot">.</span>dev</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn-hire">Hire Me ↗</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;