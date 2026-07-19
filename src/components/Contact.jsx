import { contactContent } from '../data/portfolioData';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>{contactContent.title}</h2>
      <p>{contactContent.description}</p>
      <div className="contact-grid">
        {contactContent.items.map(({ label, value, href, external }) => (
          <a
            key={label}
            href={href}
            className="contact-item"
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <span className="contact-item-label">{label}</span>
            <span className="contact-item-value">{value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
