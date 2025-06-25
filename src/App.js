import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">My Portfolio</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
