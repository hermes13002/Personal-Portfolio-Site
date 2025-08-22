import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from '../public/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from '../public/ContactPage';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Handle navigation
  useEffect(() => {
    const handleNavigate = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('popstate', handleNavigate);
    
    return () => {
      window.removeEventListener('popstate', handleNavigate);
    };
  }, []);
  
  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === 'A' ||
          e.target.tagName === 'BUTTON' ||
          e.target.closest('a') ||
          e.target.closest('button'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Custom navigation
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };
  
  // Render the appropriate page based on the current path
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/projects':
        return <ProjectsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* Custom cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {renderPage()}
      
      <Footer />
    </div>
  );
}

export default App;