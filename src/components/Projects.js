import React from 'react';

const projects = [
  { title: 'Project 1', description: 'Simple ToDo App using React and Bootstrap' },
  { title: 'Project 2', description: 'Weather Forecast App using OpenWeather API' },
];

export default function Projects() {
  return (
    <section className="my-5 container">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((proj, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100">
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
