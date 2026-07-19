import { skills } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <h2>Technical Skills</h2>
        <p>Core technologies and tools I work with for development and problem-solving.</p>
      </div>
      <div className="chip-row">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
