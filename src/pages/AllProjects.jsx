import projects from "../data/projectsData";
import "../styles/projects.css";

function AllProjects() {
  return (
    <section className="all-projects">
      <div className="container">

        <h2 className="section-title">All Projects</h2>

        <div className="project-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img src={proj.image} alt={proj.title} />

                <div className="overlay">
                  <a href={proj.demo} target="_blank">Live Demo</a>
                  <a href={proj.code} target="_blank">View Code</a>
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

export default AllProjects;