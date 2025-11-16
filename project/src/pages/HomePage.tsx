import React from 'react';
import Hero from '../components/home/Hero';
import WorkExperience from '../components/home/WorkExperience';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <WorkExperience />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;