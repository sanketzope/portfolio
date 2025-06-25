import React from 'react';

export default function Skills() {
  return (
    <section className="my-5 container">
      <h2 className="text-center mb-4">Technical Skills & Competencies</h2>
      <div className="p-4 bg-light rounded shadow-sm">
        <ul className="list-unstyled fs-5">
          <li className="mb-2">
            <strong>• Programming Languages:</strong> Java, SQL
          </li>
          <li className="mb-2">
            <strong>• Web Technologies:</strong> HTML5, CSS3, JavaScript, RESTful Web Services
          </li>
          <li className="mb-2">
            <strong>• Frameworks and Libraries:</strong> Spring Boot 3, Spring Data JPA, Spring MVC, React.js
          </li>
          <li className="mb-2">
            <strong>• Databases:</strong> MySQL, MongoDB
          </li>
          <li className="mb-2">
            <strong>• Tools and Platforms:</strong> Git, GitHub
          </li>
          <li>
            <strong>• Soft Skills:</strong> Strong written and verbal communication, problem-solving, teamwork, adaptability, time management
          </li>
        </ul>
      </div>
    </section>
  );
}
