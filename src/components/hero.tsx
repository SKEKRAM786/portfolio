import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <span className="text-5xl">👨‍💻</span>
          </div>
        </div>
        
        <h1 className="text-gray-900 mb-4 animate-fade-in">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">SK EKRAM</span>
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay leading-relaxed">
          Full Stack Developer with hands-on experience building web applications using React, Node.js, and MongoDB. 
          Passionate about problem-solving, continuously learning new technologies, and delivering high-quality solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <button 
            onClick={scrollToContact}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-gray-300 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300 hover:shadow-md"
          >
            View My Work
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
}