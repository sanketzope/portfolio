import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#about">My Portfolio</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

    
      <div className="container my-5">
        <Suspense
          fallback={
            <div className="text-center my-5">
              <div className="spinner-border text-primary" role="status" />
              <p className="mt-3">Loading Sections...</p>
            </div>
          }
        >
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="resume"><Resume /></section>
          <section id="contact"><Contact /></section>
        </Suspense>
      </div>

    
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Sanket Zope.
      </footer>
    </div>
  );
}

export default App;
