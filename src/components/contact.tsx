import { Mail, Linkedin, Github, Twitter, Code2 } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Let's Work Together</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out if you'd like to connect!
        </p>
        
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:skekramskekram3@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              skekramskekram3@gmail.com
            </a>
            <a 
              href="tel:+919861794245"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-105 border border-white/30"
            >
              <span className="text-lg">📱</span>
              +91-9861794245
            </a>
            <p className="text-white mt-2 flex items-center justify-center gap-2">
              <span className="text-lg">📍</span>
              Bangalore, Karnataka
            </p>
          </div>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://linkedin.com/in/skekram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://leetcode.com/SkEkram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
            aria-label="LeetCode"
          >
            <Code2 size={24} />
          </a>
          <a 
            href="https://github.com/skekram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-300">
          <p className="text-gray-600">
            © 2024 SK EKRAM. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}