import React from 'react';
import { Linkedin, Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              {/* <span className="text-2xl font-bold text-white">Exc</span>
              <span className="text-xl text-orange-400 ml-1">Hackathon</span> */}
               <img
                src="/src/assets/exc-logo.png"
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