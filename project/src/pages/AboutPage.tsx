import React from 'react';
import AboutMe from '../components/about/AboutMe';

const AboutPage: React.FC = () => {
  return (
    <main>
      <section className="pt-32 pb-12 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey, experiences, and skills in the world of programming.
          </p>
        </div>
      </section>
      
      <AboutMe />
    </main>
  );
};

export default AboutPage;