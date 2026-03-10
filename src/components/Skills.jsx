import React from "react";
import CountUp from "react-countup";
import skills from "../data/skillsData";
import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <img src={skill.icon} alt={skill.name} />

            <h3>
              <CountUp
                end={skill.percent}
                duration={3}
                suffix="%"
              />
            </h3>

            <p>{skill.name}</p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;