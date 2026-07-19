import { heroContent, resumeContent } from '../data/portfolioData';

function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero-background" aria-hidden="true">
        <span className="hero-orb hero-orb--primary" />
        <span className="hero-orb hero-orb--secondary" />
      </div>

      <div className="hero-layout">
        <div className="hero-profile">
          <div className="hero-avatar" aria-hidden="true">
            <span>{heroContent.initials}</span>
          </div>
          <p className="hero-status">
            <span className="status-dot" />
            Available for opportunities
          </p>
        </div>

        <div className="hero-copy">
          <p className="hero-greeting">{heroContent.greeting}</p>
          <h1>
            <span className="hero-name">{heroContent.name}</span>
          </h1>
          <p className="hero-role">{heroContent.role}</p>
          <p className="hero-tagline">{heroContent.tagline}</p>
          <p className="hero-text">{heroContent.description}</p>

          
        </div>
        <aside className="hero-panel">
          <p className="hero-panel-label">At a glance</p>
          <ul className="hero-stats">
            {heroContent.highlights.map(({ label, value }) => (
              <li key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </li>
            ))}
          </ul>
          <div className="hero-stack">
            <p>Currently learning & building with</p>
            <div className="chip-row">
              <span className="chip">Java</span>
              <span className="chip">Spring Boot</span>
              <span className="chip">SQL</span>
              <span className="chip">REST APIs</span>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

export default Hero;
