// import React, { useEffect } from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import {
//   Code, Layout, Brain, Flame, GitBranch, Box, BookOpen, Database
// } from 'lucide-react';
// import { skills } from '../../data/skills';

// const iconMap: Record<string, JSX.Element> = {
//   CodeIcon: <Code size={40} className="mx-auto text-violet-400" />,
//   LayoutIcon: <Layout size={40} className="mx-auto text-indigo-400" />,
//   BrainIcon: <Brain size={40} className="mx-auto text-purple-400" />,
//   FlameIcon: <Flame size={40} className="mx-auto text-orange-400" />,
//   GitBranchIcon: <GitBranch size={40} className="mx-auto text-green-400" />,
//   BoxIcon: <Box size={40} className="mx-auto text-blue-400" />,
//   BookOpenIcon: <BookOpen size={40} className="mx-auto text-yellow-400" />,
//   DatabaseIcon: <Database size={40} className="mx-auto text-red-400" />,
// };

// const Skills: React.FC = () => {
//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: { perView: 5, spacing: 16 },
//     breakpoints: {
//       '(max-width: 1024px)': { slides: { perView: 3, spacing: 12 } },
//       '(max-width: 640px)': { slides: { perView: 2, spacing: 8 } },
//     },
//     created(s) {
//       s.moveToIdx(0, true);
//     },
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (instanceRef.current) {
//         instanceRef.current.next();
//       }
//     }, 2000); // change slide every 2 seconds

//     return () => clearInterval(interval);
//   }, [instanceRef]);

//   return (
//     <section className="py-20 bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold font-spacegrotesk text-white mb-4">
//             My Skills
//           </h2>
//           <p className="text-xl text-gray-400 font-ubuntu max-w-2xl mx-auto">
//             The technologies and tools I use to bring ideas to life.
//           </p>
//         </div>
//         <div ref={sliderRef} className="keen-slider">
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="keen-slider__slide flex flex-col items-center justify-center"
//             >
//               {iconMap[skill.icon] || <Code size={40} className="mx-auto text-violet-400" />}
//               <span className="mt-2 text-white font-ubuntu text-sm text-center">{skill.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// components/home/skills.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faFirefoxBrowser,
  faAndroid,
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
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';

import { 
  faCodeBranch, 
} from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Dart', icon: faDartLang, color: 'text-blue-500' },
    { name: 'Python', icon: faPython, color: 'text-blue-400' },
    { name: 'Flutter', icon: faFlutter, color: 'text-blue-400' },
    { name: 'HTML', icon: faHtml5, color: 'text-orange-600' },
    { name: 'CSS', icon: faCss3Alt, color: 'text-blue-500' },
    { name: 'PostgreSQL', icon: faDatabase, color: 'text-blue-600' },
    { name: 'MySQL', icon: faDatabase, color: 'text-blue-500' },
    { name: 'SQLite', icon: faDatabase, color: 'text-blue-400' },
    { name: 'Firebase', icon: faFirefoxBrowser, color: 'text-orange-500' },
    { name: 'Django', icon: faServer, color: 'text-green-600' },
    { name: 'Flask', icon: faServer, color: 'text-gray-400' },
    { name: 'Shelf', icon: faServer, color: 'text-gray-400' },
    { name: 'API', icon: faCode, color: 'text-purple-500' },
    { name: 'Version control', icon: faCodeBranch, color: 'text-orange-500' },
    { name: 'VSCode', icon: faCode, color: 'text-blue-400' },
    { name: 'Android Studio', icon: faAndroid, color: 'text-green-500' },
    { name: 'GitHub', icon: faGithub, color: 'text-gray-200' },
    { name: 'Jupyter', icon: faBookOpen, color: 'text-orange-500' },
    { name: 'Mobile Application Development', icon: faMobileAlt, color: 'text-blue-400' },
    { name: 'Backend Development', icon: faServer, color: 'text-gray-400' },
    { name: 'Machine Learning', icon: faBrain, color: 'text-purple-500' },
  ];

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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
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
    </section>
  );
};

export default Skills;