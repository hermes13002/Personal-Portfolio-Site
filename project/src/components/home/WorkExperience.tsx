import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { experiences } from '../../data/experience';

const WorkExperience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  const currentExperience = experiences[currentIndex];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-spacegrotesk text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl font-ubuntu text-gray-400 max-w-2xl mx-auto">
            A journey through my professional experience building innovative mobile applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-gray-800 hover:bg-violet-600 text-white rounded-full transition-colors z-10"
              aria-label="Previous experience"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-gray-800 hover:bg-violet-600 text-white rounded-full transition-colors z-10"
              aria-label="Next experience"
            >
              <ChevronRight size={24} />
            </button>

            {/* Content */}
            <div className="px-8 md:px-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-violet-600/20 rounded-lg">
                  <Briefcase size={28} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-spacegrotesk text-white">
                    {currentExperience.role}
                  </h3>
                  <p className="text-lg text-violet-400 font-ubuntu">
                    {currentExperience.company}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 font-ubuntu mb-6">{currentExperience.period}</p>

              <p className="text-gray-300 font-ubuntu text-lg mb-6">
                {currentExperience.description}
              </p>

              <div className="space-y-3">
                {currentExperience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-violet-500 flex-shrink-0" />
                    <p className="text-gray-300 font-ubuntu leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-violet-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
