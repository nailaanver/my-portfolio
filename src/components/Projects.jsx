import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  { title: "Task Management App", category: "App / Development" },
  { title: "E-Commerce Dashboard", category: "Web / Design" },
  { title: "Portfolio Website", category: "Frontend" },
  { title: "Food Delivery UI", category: "UI/UX" },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="header-row">
        <h2>My Featured Projects</h2>
        <button className="view-all">View All Projects</button>
      </div>
      
      <div className="project-grid">
        {projects.map((proj, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder"></div>
            <p className="category">{proj.category}</p>
            <h3>{proj.title}</h3>
            <div className="arrow">↗</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;