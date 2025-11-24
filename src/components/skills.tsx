import { Code2, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Next.js, Angular, HTML5, CSS3, JavaScript',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Express.js, REST APIs',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'MySQL, MongoDB, NoSQL, PL/SQL',
  },
  {
    icon: Palette,
    title: 'Machine Learning',
    description: 'Python, Pandas, NumPy, Scikit-learn, OpenCV, Matplotlib',
  },
  {
    icon: Code2,
    title: 'Programming Languages',
    description: 'Java, Python, C, C++, JavaScript, SQL',
  },
  {
    icon: Zap,
    title: 'DevOps & Tools',
    description: 'GitHub, Linux, VS Code, IntelliJ IDEA, Google Colab, Kaggle',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-gray-900 mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills & Expertise</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A collection of technologies and tools I work with to bring ideas to life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-transparent hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}