import React from "react";
import "../styles/projects.css";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="header-row">
          <h2>My Featured Projects</h2>
          <button className="view-all">View All Projects</button>
        </div>

<div className="project-grid">
  {projects.map((proj, index) => (
    <div className="project-card" key={index}>
      
      <div className="project-image">

        <img src={proj.image} alt={proj.title} />

        <div className="overlay">
          <a href={proj.demo} target="_blank" rel="noreferrer">Live Demo</a>
          <a href={proj.code} target="_blank" rel="noreferrer">View Code</a>
        </div>

      </div>

      <p className="category">{proj.category}</p>
      <h3>{proj.title}</h3>

      <div className="stack">
        {proj.stack.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>

    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default Projects;