import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faFirefoxBrowser,
  faGithub,
  faFlutter,
  faDartLang
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faDatabase,
  faMobileAlt,
  faServer,
  faBrain,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faCodeBranch, 
} from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages & Core Technologies',
      skills: [
        { name: 'Dart', icon: faDartLang, color: 'text-blue-500' },
        { name: 'Python', icon: faPython, color: 'text-blue-400' },
        { name: 'Flutter', icon: faFlutter, color: 'text-blue-400' },
        { name: 'HTML', icon: faHtml5, color: 'text-orange-600' },
        { name: 'CSS', icon: faCss3Alt, color: 'text-blue-500' },
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'PostgreSQL', icon: faDatabase, color: 'text-blue-600' },
        { name: 'MySQL', icon: faDatabase, color: 'text-blue-500' },
        { name: 'SQLite', icon: faDatabase, color: 'text-blue-400' },
        { name: 'MongoDB', icon: faDatabase, color: 'text-orange-500' },
        { name: 'Firebase', icon: faFirefoxBrowser, color: 'text-orange-500' },
        { name: 'Django', icon: faServer, color: 'text-green-600' },
        { name: 'Flask', icon: faServer, color: 'text-gray-400' },
        { name: 'Shelf', icon: faServer, color: 'text-gray-400' },
        { name: 'RESTful API', icon: faCode, color: 'text-purple-500' },
        { name: 'Websockets', icon: faCode, color: 'text-purple-500' },
      ]
    },
    {
      title: 'Tools & Specializations',
      skills: [
        { name: 'Version control', icon: faCodeBranch, color: 'text-orange-500' },
        { name: 'GitHub', icon: faGithub, color: 'text-gray-200' },
        { name: 'Mobile Application Development', icon: faMobileAlt, color: 'text-blue-400' },
        { name: 'Backend Development', icon: faServer, color: 'text-gray-400' },
        { name: 'Machine Learning', icon: faBrain, color: 'text-purple-500' },
      ]
    }
  ];

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = (skills: any[]) => [...skills, ...skills];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-spacegrotesk text-white mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-400 font-ubuntu max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-bold font-spacegrotesk text-white text-center">
                {category.title}
              </h3>
              
              <div className="relative overflow-hidden">
                {/* Left Fade Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-800 to-transparent z-10" />
                
                {/* Right Fade Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-800 to-transparent z-10" />
                
                <div 
                  className="flex animate-infinite-scroll space-x-6"
                  style={{
                    animation: 'infinite-scroll 30s linear infinite'
                  }}
                >
                  {duplicatedSkills(category.skills).map((skill, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex flex-col items-center justify-center p-6 rounded-lg hover:bg-gray-600 transition-all duration-300 w-32 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="mb-3">
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          size="2x" 
                          className={skill.color} 
                        />
                      </div>
                      <span className="text-white font-ubuntu text-sm text-center mt-2">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;