import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tomatoImage from 'figma:asset/f09a02aef58618d64c8634ac0d8cf5f70aa44682.png';

const projects = [
  {
    title: 'Tomato – Food Delivery Website',
    description: 'Full-stack food delivery platform inspired by Zomato/Swiggy with restaurant listings, menu browsing, cart, and online ordering. Built with MERN stack.',
    image: tomatoImage,
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: 'https://food-website-frontend-eqvo.onrender.com/',
    adminLink: 'https://food-website-admin-1aag.onrender.com/',
  },
  {
    title: 'Movie Booking Website',
    description: 'Full-featured movie booking platform with seat selection, payment gateway, and automatic rebooking system. Real-time notifications using Inngest.',
    image: 'https://images.unsplash.com/photo-1620146095812-813e2de733b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBzZWF0c3xlbnwxfHx8fDE3NjM5NzU0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['MERN Stack', 'Inngest', 'Payment Gateway'],
  },
  {
    title: 'Vitamin Deficiency Detection System',
    description: 'ML-based image analysis system detecting vitamin deficiencies using eye, lip, tongue, and nail images. Includes nutritional recommendations and doctor locator.',
    image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBtZWRpY2FsfGVufDF8fHx8MTc2Mzk3NTQwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Machine Learning', 'Python', 'OpenCV', 'React'],
    status: 'Ongoing',
  },
  {
    title: 'TradeX by SK',
    description: 'Trading platform with user authentication, portfolio management, and stock buy/sell operations. Interactive dashboard for managing holdings and positions.',
    image: 'https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMHRyYWRpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzOTc1NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['MERN Stack', 'React Dashboard', 'MongoDB'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-white mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-800 relative">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.status && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm shadow-lg">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.adminLink && (
                    <a 
                      href={project.adminLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Admin Panel
                    </a>
                  )}
                  {!project.liveLink && !project.adminLink && (
                    <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                      <Github size={18} />
                      View Project
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}