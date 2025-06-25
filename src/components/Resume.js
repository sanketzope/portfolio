import React from 'react';

export default function Resume() {
  return (
    <section className="my-5 container">
      <h2 className="text-center mb-3">Resume</h2>
      <p className="text-center">
        You can download my resume here:&nbsp;
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
          Download Resume
        </a>
      </p>
    </section>
  );
}
