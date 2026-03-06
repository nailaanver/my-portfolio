import React from "react";
import "../styles/about.css"


function About() {
    
  return (
    <section id="about" className="about-me">
      <div className="about-content">
        <h2>About Me</h2>

        <p>
          I am an aspiring Python Full-Stack Developer passionate about building
          modern and user-friendly web applications. I enjoy working with
          technologies like Python, Django, React, HTML, CSS, and JavaScript to
          create responsive and efficient websites. I love learning new
          technologies and improving my skills by building real-world projects.
        </p>

        <div className="stats">
            <div className="stat-item">
                <strong>BSc</strong>
                Education
            </div>
            <div className="stat-item">
                <strong>1+</strong>
                Years Learning
            </div>
            <div className="stat-item">
                <strong>6+</strong>
                Projects Completed
            </div>
            </div>
      </div>
    </section>
  );
}

export default About;