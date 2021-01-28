import React from 'react';
import AboutMe from './views/AboutMe';
import Landing from './views/Landing';
import Footer from './views/Footer';
import Contact from './views/Contact';
import projects from './projects';
import Project from './views/Project';

const App = () => {
  return (
    <div className='App'>
      <Landing />
      <AboutMe />
      {projects.map((project, index) => {
        return <Project project={project} reversed={index % 2} />;
      })}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
