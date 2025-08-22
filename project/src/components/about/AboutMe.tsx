import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Profile Image Column */}
          <div className="md:col-span-2">
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
              <div className="relative mx-auto w-48 h-48 mb-6 overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-white text-center mb-2">John Doe</h2>
              <p className="text-violet-400 text-center mb-6">Python & Flutter Developer</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar size={20} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-gray-300">Birth Date</p>
                    <p className="text-gray-400 text-sm">January 1, 1990</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin size={20} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-gray-400 text-sm">New York, USA</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Briefcase size={20} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-gray-300">Experience</p>
                    <p className="text-gray-400 text-sm">5+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <GraduationCap size={20} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-gray-300">Education</p>
                    <p className="text-gray-400 text-sm">Master's in Computer Science</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="/contact"
                  className="block w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          {/* About Content Column */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p>
                Hello! I'm John Doe, a passionate Python developer with expertise in AI/ML and Flutter app development. With over 5 years of experience in the industry, I've had the opportunity to work on a diverse range of projects, from data analysis tools to cross-platform mobile applications.
              </p>
              
              <p>
                My journey in programming began with Python, which remains my primary language. I'm particularly interested in machine learning and artificial intelligence, areas where I've developed several projects including image classification systems and natural language processing tools.
              </p>
              
              <p>
                In recent years, I've expanded my skills to include Flutter development, allowing me to create beautiful, responsive applications that work seamlessly across multiple platforms. I enjoy the challenge of creating intuitive user interfaces and ensuring optimal performance.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through my YouTube channel and Reddit communities.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-white mt-12 mb-6">
              Experience
            </h3>
            
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-lg mr-4">
                    <Briefcase size={24} className="text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Senior Python Developer</h4>
                    <p className="text-violet-400 mb-2">TechCorp Inc. | 2020 - Present</p>
                    <p className="text-gray-400">
                      Leading the development of AI-powered data analysis tools, optimizing machine learning algorithms, and mentoring junior developers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-lg mr-4">
                    <Briefcase size={24} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Flutter App Developer</h4>
                    <p className="text-indigo-400 mb-2">MobileWorks | 2018 - 2020</p>
                    <p className="text-gray-400">
                      Designed and developed cross-platform mobile applications for iOS and Android using Flutter, implementing clean architecture and state management patterns.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-lg mr-4">
                    <Briefcase size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Data Scientist</h4>
                    <p className="text-purple-400 mb-2">DataViz Solutions | 2016 - 2018</p>
                    <p className="text-gray-400">
                      Analyzed large datasets, created predictive models, and developed visualization tools to help clients make data-driven decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mt-12 mb-6">
              Education & Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-lg mr-4">
                    <GraduationCap size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Master's in Computer Science</h4>
                    <p className="text-blue-400 mb-2">MIT | 2014 - 2016</p>
                    <p className="text-gray-400">
                      Specialized in Machine Learning and AI algorithms.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-lg mr-4">
                    <GraduationCap size={24} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Bachelor's in Software Engineering</h4>
                    <p className="text-green-400 mb-2">Stanford University | 2010 - 2014</p>
                    <p className="text-gray-400">
                      Graduated with honors, focus on software development.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-lg mr-4">
                    <Award size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">TensorFlow Developer Certificate</h4>
                    <p className="text-yellow-400 mb-2">Google | 2019</p>
                    <p className="text-gray-400">
                      Certified in building ML models with TensorFlow.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-lg mr-4">
                    <Award size={24} className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Flutter Developer Certification</h4>
                    <p className="text-orange-400 mb-2">App Brewery | 2018</p>
                    <p className="text-gray-400">
                      Advanced Flutter development and architecture patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;