import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'PES University',
    location: 'Bangalore, Karnataka, India',
    year: '2024 – Present',
    status: 'Pursuing',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Utkal University',
    location: 'Bhubaneswar, Odisha, India',
    year: '2021 – 2024',
    cgpa: 'CGPA: 8.10',
  },
];

const certifications = [
  'Deloitte Data Analytics Job Simulation – Forage',
  'AWS Cloud Practitioner – AWS Training & Certification',
  'Java Masterclass – Tim Buchalka (Udemy)',
  'The Complete Full-Stack Web Development Bootcamp – Dr. Angela Yu (Udemy)',
  'Learn UI/UX Design with Figma: Prototyping, Web & Mobile Interface Design – Udemy',
];
export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-white mb-4 text-center">Education & Certifications</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          My academic background and professional certifications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={20} />
              </div>
              <h3 className="text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-white">{edu.degree}</h4>
                    {edu.status && (
                      <span className="px-2 py-1 bg-blue-500 text-white rounded text-sm">
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-200 mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                    {edu.cgpa && <p className="text-blue-300 text-sm">{edu.cgpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Award className="text-white" size={20} />
              </div>
              <h3 className="text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-200">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra-Curricular Activities */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-white mb-6 text-center">Extra-Curricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3 bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-2xl">💻</span>
              <p className="text-gray-200">
                Solving problems on LeetCode and HackerRank to strengthen programming logic and algorithmic thinking
              </p>
            </div>
            <div className="flex gap-3 bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-2xl">🏆</span>
              <p className="text-gray-200">
                Regularly participate in online coding challenges to sharpen algorithms and data structures skills
              </p>
            </div>
            <div className="flex gap-3 bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-2xl">🤖</span>
              <p className="text-gray-200">
                Curious about emerging technologies, Artificial Intelligence (AI), and actively learning full-stack development
              </p>
            </div>
            <div className="flex gap-3 bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-2xl">📈</span>
              <p className="text-gray-200">
                Interested in financial markets, investing, and stock trading
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
