import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            Naila<span className="accent-dot">.</span>dev
          </h2>
          <p>
            Python Full Stack Developer passionate about building clean,
            responsive and user-friendly web applications.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}
        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-icons">
            <a href="https://github.com/nailaanver" target="_blank" 
    rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/fathima-naila-k-p-7b8351344"  target="_blank" 
    rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Naila.dev | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;