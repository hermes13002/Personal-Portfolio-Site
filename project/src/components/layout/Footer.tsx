// import React from 'react';
// import { 
//   Github, 
//   Linkedin, 
//   Youtube, 
//   Circle, 
//   BookOpen,
//   ArrowUp
// } from 'lucide-react';
// import { socialLinks } from '../../data/social';

// const Footer: React.FC = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };
  
//   // Map platform names to Lucide icons
//   const getIconComponent = (iconName: string) => {
//     switch (iconName) {
//       case 'GithubIcon':
//         return <Github size={20} />;
//       case 'LinkedinIcon':
//         return <Linkedin size={20} />;
//       case 'YoutubeIcon':
//         return <Youtube size={20} />;
//       case 'CircleIcon':
//         return <Circle size={20} />;
//       case 'BookOpenIcon':
//         return <BookOpen size={20} />;
//       default:
//         return <Circle size={20} />;
//     }
//   };
  
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-white">
//               <span className="text-violet-500">{'<'}</span>Dev<span className="text-violet-500">{'/>'}</span>
//             </h3>
//             <p className="mb-4">
//               Python programmer, AI/ML enthusiast, and Flutter app developer creating innovative solutions.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.platform}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-violet-400 transition-colors"
//                   aria-label={link.platform}
//                 >
//                   {getIconComponent(link.icon)}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
//             <ul className="space-y-2">
//               <li><a href="/" className="hover:text-violet-400 transition-colors">Home</a></li>
//               <li><a href="/projects" className="hover:text-violet-400 transition-colors">Projects</a></li>
//               <li><a href="/about" className="hover:text-violet-400 transition-colors">About</a></li>
//               <li><a href="/contact" className="hover:text-violet-400 transition-colors">Contact</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
//             <p className="mb-2">Feel free to reach out to me directly.</p>
//             <p className="mb-2">Email: contact@example.com</p>
//             <p>Location: Anywhere, World</p>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          
//           <button 
//             onClick={scrollToTop}
//             className="mt-4 md:mt-0 p-2 rounded-full bg-violet-600 hover:bg-violet-700 transition-colors"
//             aria-label="Scroll to top"
//           >
//             <ArrowUp size={20} className="text-white" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Linkedin, Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              {/* <span className="text-2xl font-bold text-white">Nexus</span>
              <span className="text-xl text-orange-400 ml-1">Hackathon</span> */}
               <img
                src="/exc-logo.png"
                alt="EXC Logo"
                className="h-10 w-auto mr-2"
                style={{ maxHeight: 40 }}
              />
            </div>
            <p className="text-gray-400 mt-2 text-center md:text-left font-poppins">
              Building AI solutions with Flutter.
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="http://www.linkedin.com/in/ayoigbala-soares-60b282218">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/hermes13002">
              <Github className="w-5 h-5" />
            </a>
              {/* <a href="https://www.instagram.com/reel/DKRm2cGqVJo/?igsh=MXNxejl1YnZ0OWx0dQ==" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a> */}
          </div>
          
          <div className="text-center md:text-right font-poppins">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <div className="mt-2 text-sm text-gray-500">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
            <div className="mt-4 text-sm text-gray-400 flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> by Ayoigbala Soares
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;