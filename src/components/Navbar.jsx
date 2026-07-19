import { useState } from 'react';
import { brandName, navLinks, heroContent, resumeContent } from '../data/portfolioData';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">{heroContent.initials}</span>
          <span className="brand-text">{brandName}</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a href={encodeURI(resumeContent.path)} className="nav-cta" download={resumeContent.fileName} onClick={closeMenu}>
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
