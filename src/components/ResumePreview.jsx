import { useEffect, useState } from 'react';
import {
  resumeContent,
  heroContent,
  aboutContent,
  skills,
  projects,
  contactContent,
} from '../data/portfolioData';

function ResumeDocument() {
  const { education } = aboutContent;
  const email = contactContent.items.find((item) => item.label === 'Email');
  const phone = contactContent.items.find((item) => item.label === 'Phone');
  const github = contactContent.items.find((item) => item.label === 'GitHub');

  return (
    <article className="resume-document" aria-label="Resume content">
      <header className="resume-doc-header">
        <h3>{heroContent.name}</h3>
        <p className="resume-doc-role">{heroContent.role}</p>
        <ul className="resume-doc-contact">
          {email && <li>{email.value}</li>}
          {phone && <li>{phone.value}</li>}
          {github && <li>{github.value}</li>}
        </ul>
      </header>

      <section className="resume-doc-section">
        <h4>Summary</h4>
        <p>{aboutContent.summary}</p>
      </section>

      <section className="resume-doc-section">
        <h4>Education</h4>
        <div className="resume-doc-entry">
          <div className="resume-doc-entry-head">
            <strong>{education.degree}</strong>
            <span>{education.period}</span>
          </div>
          <p>{education.institution}</p>
          <p>{education.grade}</p>
        </div>
      </section>

      <section className="resume-doc-section">
        <h4>Technical Skills</h4>
        <p>{skills.join(' • ')}</p>
      </section>

      <section className="resume-doc-section">
        <h4>Projects</h4>
        {projects.map((project) => (
          <div className="resume-doc-entry" key={project.title}>
            <div className="resume-doc-entry-head">
              <strong>{project.title}</strong>
            </div>
            <p>{project.description}</p>
            <p className="resume-doc-stack">{project.stack.join(' • ')}</p>
          </div>
        ))}
      </section>
    </article>
  );
}

function ResumePreview() {
  const resumeUrl = encodeURI(resumeContent.path);
  const [pdfAvailable, setPdfAvailable] = useState(false);
  const [view, setView] = useState('html');

  useEffect(() => {
    fetch(resumeUrl, { method: 'HEAD' })
      .then((response) => {
        const contentType = response.headers.get('content-type') ?? '';
        if (response.ok && contentType.includes('application/pdf')) {
          setPdfAvailable(true);
          setView('pdf');
        }
      })
      .catch(() => {});
  }, [resumeUrl]);

  const handlePrint = () => window.print();

  return (
    <section id="resume" className="section resume-section">
      <div className="section-heading">
        <h2>{resumeContent.title}</h2>
        <p>{resumeContent.description}</p>
      </div>

      <div className="resume-toolbar">
        {pdfAvailable && (
          <div className="resume-view-toggle" role="tablist" aria-label="Resume view">
            <button
              type="button"
              role="tab"
              aria-selected={view === 'html'}
              className={`btn ${view === 'html' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setView('html')}
            >
              Web Preview
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === 'pdf'}
              className={`btn ${view === 'pdf' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setView('pdf')}
            >
              PDF
            </button>
          </div>
        )}


        {pdfAvailable && (
          <>
            <a href={resumeUrl} className="btn btn-primary" download={resumeContent.fileName}>
              Download PDF
            </a>
   
          </>
        )}
      </div>

      <div className="resume-viewer">
        {view === 'pdf' && pdfAvailable ? (
          <iframe
            src={`${resumeUrl}#view=FitH&toolbar=0&navpanes=0`}
            title={`${resumeContent.fileName} preview`}
            className="resume-frame"
          />
        ) : (
          <ResumeDocument />
        )}

        {!pdfAvailable && (
          <p className="resume-fallback">
            Add your PDF to <code>public/{resumeContent.fileName}</code> to enable PDF preview and
            download.
          </p>
        )}
      </div>
    </section>
  );
}

export default ResumePreview;
