import { aboutContent } from '../data/portfolioData';

function About() {
  const { education } = aboutContent;

  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>{aboutContent.summary}</p>
      <div className="info-grid">
        <article className="info-card">
          <h3>{education.title}</h3>
          <p>
            <strong>{education.degree}</strong>
            <br />
            {education.institution}
            <br />
            {education.period}
            <br />
            {education.grade}
          </p>
        </article>
        <article className="info-card">
          <h3>{aboutContent.highlights.title}</h3>
          <p>{aboutContent.highlights.body}</p>
        </article>
      </div>
    </section>
  );
}

export default About;
