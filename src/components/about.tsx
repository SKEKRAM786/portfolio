export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-gray-900 mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-purple-200 hover:shadow-purple-200/50 transition-all duration-300 backdrop-blur-sm">
          <p className="text-gray-600 mb-6 leading-relaxed">
            Hello! I'm <span className="text-gray-900">SK EKRAM</span>, a Full Stack Developer currently pursuing my Master of Computer Applications (MCA) 
            at <span className="text-blue-600">PES University, Bangalore</span>. I completed my BCA from Utkal University with a CGPA of 8.10.
          </p>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            I have hands-on experience in designing responsive frontends, creating secure REST APIs, and managing 
            databases efficiently. I specialize in the <span className="text-purple-600">MERN stack</span> (MongoDB, Express.js, React, Node.js) and am also 
            exploring <span className="text-pink-600">Machine Learning and AI</span> technologies to build innovative solutions.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you can find me solving algorithmic challenges on <span className="text-orange-600">LeetCode</span> and <span className="text-green-600">HackerRank</span>, 
            learning about emerging technologies, or exploring financial markets and stock trading. I'm motivated 
            to contribute and grow in challenging software development environments.
          </p>
        </div>
      </div>
    </section>
  );
}