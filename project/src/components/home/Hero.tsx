import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: { x: number; y: number; radius: number; dx: number; dy: number; color: string }[] = [];
    let animationFrameId: number;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
            Math.random() * 100 + 155
          )}, 255, ${Math.random() * 0.5 + 0.2})`,
        });
      }
    };
    
    const connectParticles = (p1: typeof particles[0], p2: typeof particles[0]) => {
      const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
      const maxDistance = 150;
      
      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(150, 150, 255, ${(maxDistance - distance) / maxDistance * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.x += particle.dx;
        particle.y += particle.dy;
        
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.dx = -particle.dx;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.dy = -particle.dy;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }
      
      // Connect particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connectParticles(particles[i], particles[j]);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-spacegrotesk font-bold text-white mb-6 animate-fadeIn">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600">
              Software Developer
            </span>{' '}
            with a passion for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              AI & Mobile App Dev.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 font-ubuntu mb-8 animate-fadeIn animation-delay-200">
            Creating innovative solutions with Python, Machine Learning, and cross-platform Flutter applications.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fadeIn animation-delay-400 font-ubuntu">
            <a
              href="/projects"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-colors flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://github.com/hermes13002"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 hover:bg-gray-700 text-white font-medium rounded-full transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              {/* GitHub */}
            </a>
            
            <a
              href="http://www.linkedin.com/in/ayoigbala-soares-60b282218"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 hover:bg-gray-700 text-white font-medium rounded-full transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} />
              {/* LinkedIn */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;