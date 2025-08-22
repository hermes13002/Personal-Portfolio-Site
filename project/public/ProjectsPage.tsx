import React from 'react';
import ProjectsGrid from '../src/components/projects/ProjectsGrid';

const ProjectsPage: React.FC = () => {
  return (
    <main>
      <section className="pt-32 pb-12 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-spacegrotesk">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-ubuntu">
            A showcase of my work across Python, AI/ML, and Flutter development.
          </p>
        </div>
      </section>
      
      <ProjectsGrid />
    </main>
  );
};

export default ProjectsPage;