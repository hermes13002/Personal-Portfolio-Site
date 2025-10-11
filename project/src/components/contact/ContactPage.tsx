import React from 'react';
import ContactSection from '../home/Contact';

const ContactPage: React.FC = () => {
  return (
    <main>
      {/* <section className="pt-32 pb-12 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>
      </section> */}

      <ContactSection />
      
    </main>
  );
};

export default ContactPage;