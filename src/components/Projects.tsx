import { ExternalLink, Code } from 'lucide-react';
import LandingPage from '../assets/LandingPage.jpg';
import Matlab from '../assets/Matlab.jpg';
import TRSYP from '../assets/TRSYP.jpg';

export default function Projects() {
  const projects = [
    {
      title: 'Digixi Landing Page',
      description: 'Built a modern, responsive landing page using React, Tailwind CSS, and TypeScript with a clean UI structure and reusable components.',
      tech: ['React', 'Tailwind', 'TypeScript', 'Responsive Design'],
      image: LandingPage,
     
      codeLink: 'https://github.com/maram-el-hadj/DIGIXI_Landing-page' // Code link
    },
    {
      title: 'IEEE TRSYP & RTC Event Website',
      description: 'Developed a dynamic event platform for the IEEE Tunisian RAS Students & Young Professionals Congress (TRSYP) and the related RTC conference, featuring responsive design, event details, schedules, speakers, and interactive UI components.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
      image: TRSYP,
      codeLink: 'https://rtc.ieee.tn/', 
     
    },
    {
      title: 'MATLAB Bird Recognition Interface',
      description: 'Designed and developed an interactive MATLAB GUI for bird image analysis, featuring image processing, visualization tools, and real-time recognition workflow demonstration.',
      tech: ['MATLAB', 'GUI', 'Image Processing', 'Computer Vision'],
      image: Matlab,
     
      codeLink: 'https://github.com/maram-el-hadj/ImageProcessingStudio'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#131B6A] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#729FD9] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              {/* Full Image */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  object-center"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#131B6A] mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#C2DDFF] text-[#506F98] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#729FD9] hover:text-[#506F98] transition font-medium"
                  >
                    <Code size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}