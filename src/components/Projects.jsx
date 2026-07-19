import { projects } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <h2>Featured Projects</h2>
        <p>Selected academic and development projects that reflect my practical experience.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chip-row">
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
