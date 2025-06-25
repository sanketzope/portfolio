import React from 'react';

const projects = [
  { title: 'Project 1', description: 'Simple ToDo App' },
  { title: 'Project 2', description: 'Weather Forecast App' },
];

export default function Projects() {
  return (
    <section className="my-4">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((proj, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{proj.title}</h5>
                <p className="card-text">{proj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
