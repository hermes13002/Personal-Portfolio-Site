// import React, { useState } from 'react';
// import { Send, Mail, MapPin, Phone } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
  
//   const [formErrors, setFormErrors] = useState({
//     name: false,
//     email: false,
//     message: false,
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
    
//     // Clear error when user types
//     if (formErrors[name as keyof typeof formErrors]) {
//       setFormErrors((prev) => ({ ...prev, [name]: false }));
//     }
//   };
  
//   const validateForm = () => {
//     const errors = {
//       name: formData.name.trim() === '',
//       email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
//       message: formData.message.trim() === '',
//     };
    
//     setFormErrors(errors);
//     return !Object.values(errors).some(Boolean);
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
//       setFormData({ name: '', email: '', subject: '', message: '' });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => {
//         setSubmitSuccess(false);
//       }, 5000);
//     }, 1500);
//   };
  
//   return (
//     <section className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? I'd love to hear from you.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
//           {/* Contact Info */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-gray-700 rounded-lg">
//                   <Mail size={24} className="text-violet-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1 font-opensans">Email</h3>
//                   <p className="text-gray-400 font-ubuntu">soaresayoigbala@gmail.com</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-gray-700 rounded-lg">
//                   <MapPin size={24} className="text-indigo-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
//                   <p className="text-gray-400">Anywhere, World</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-gray-700 rounded-lg">
//                   <Phone size={24} className="text-purple-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
//                   <p className="text-gray-400">+1 (555) 123-4567</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className="lg:col-span-3 bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
//             {submitSuccess ? (
//               <div className="text-center py-8">
//                 <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send size={32} className="text-green-400" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
//                 <p className="text-gray-400">
//                   Thank you for reaching out. I'll get back to you as soon as possible.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 bg-gray-700 border ${
//                       formErrors.name ? 'border-red-500' : 'border-gray-600'
//                     } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white`}
//                     placeholder="John Doe"
//                   />
//                   {formErrors.name && (
//                     <p className="mt-1 text-sm text-red-500">Please enter your name</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
//                     Your Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 bg-gray-700 border ${
//                       formErrors.email ? 'border-red-500' : 'border-gray-600'
//                     } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white`}
//                     placeholder="john@example.com"
//                   />
//                   {formErrors.email && (
//                     <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
//                     Subject (Optional)
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
//                     placeholder="Project Inquiry"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     className={`w-full px-4 py-3 bg-gray-700 border ${
//                       formErrors.message ? 'border-red-500' : 'border-gray-600'
//                     } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white resize-none`}
//                     placeholder="I'd like to discuss a project..."
//                   ></textarea>
//                   {formErrors.message && (
//                     <p className="mt-1 text-sm text-red-500">Please enter your message</p>
//                   )}
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <Send size={18} />
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  };
  
  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === '',
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4 font-spacegrotesk">Contact Me</h2>
          {/* <div className="w-20 h-1 bg-violet-400 mx-auto mb-6"></div> */}
          <p className="text-lg text-gray-100 max-w-3xl mx-auto font-ubuntu">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-text-violet-300 rounded-full p-3 text-violet-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1 font-poppins">Email</h4>
                  <p className="text-gray-700 font-opensans">soaresayoigbala@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-text-violet-300 rounded-full p-3 text-violet-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1 font-poppins">Phone</h4>
                  <p className="text-gray-700 font-opensans">+234-9031945519</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-text-violet-300 rounded-full p-3 text-violet-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1 font-poppins">Venue</h4>
                  {/* <p className="text-gray-700 font-opensans">Army Hall, LASU Epe Campus</p> */}
                  <p className="text-gray-700 font-opensans">Lagos State, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
              <a
                href="https://forms.gle/z258wJh7Vas1W3ZF9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-spacegrotesk font-medium transition-colors shadow-md inline-block text-center"
              >
                Download CV
              </a>
              <a
                href="https://drive.google.com/drive/folders/1RBu_yvnFR0QdVTZKPMxxtDJUC_XS2Tqd?usp=drive_link"
                download
                className="bg-white hover:bg-gray-100 text-violet-600 px-6 py-3 rounded-lg font-spacegrotesk font-medium transition-colors shadow-md inline-block border border-violet-600 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>


          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-violet-900/20">
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-poppins">Message Sent!</h3>
                <p className="text-gray-400 font-poppins">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
              action="https://formsubmit.co/88dde659006797ca4bb5666440cf0af8"
              method="POST"
              className="space-y-4"
                // onSubmit={handleSubmit} className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 font-poppins">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      formErrors.name ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">Please enter your name</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="font-poppins block text-sm font-medium text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      formErrors.email ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500 font-poppins">Please enter a valid email address</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="font-poppins block text-sm font-medium text-gray-400 mb-1">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="font-poppins w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="font-poppins block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-700 border ${
                      formErrors.message ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white resize-none`}
                    placeholder="I'd like to discuss a project..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500 font-poppins">Please enter your message</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-poppins w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;