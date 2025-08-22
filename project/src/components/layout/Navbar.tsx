import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* <a href="/" className="text-4xl font-bold font-spacegrotesk text-white hover:text-violet-400 transition-colors">
            <span className="text-violet-500">{'<'}</span>EXC<span className="text-violet-500">{'/>'}</span>
          </a> */}

          <div className="flex items-center">
            <img
              src="./assets/exc-logo.png"
              alt="Exc Logo"
              className="h-10 w-auto mr-2"
              style={{ maxHeight: 40 }}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-300 hover:text-white font-spacegrotesk font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-violet-500 after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
            
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-400" />}
            </button> */}
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-xl py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-gray-300 hover:text-white font-spacegrotesk font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 text-gray-300 hover:text-white font-medium py-2 transition-colors"
              >
                {darkMode ? (
                  <>
                    <Sun size={20} className="text-yellow-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={20} className="text-blue-400" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;