import { Users, Globe, Star, Leaf } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: <Users className="w-6 h-6" />,
      role: 'IEEE Day Ambassador 2025',
      organization: 'IEEE',
      description: 'Organized tech events and coordinated communication strategies.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      role: 'Webmaster Lead',
      organization: 'TRSYP',
      description: 'Managed websites, supervised development team, improved UX and performance.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      role: 'OC Member',
      organization: 'TSYP 12',
      description: 'Contributed to events, design, and content management.'
    },
    {
  icon: <Leaf className="w-6 h-6" />,
  role: 'MATLAB Interface Developer – Bird Recognition',
  organization: 'Personal Project',
  description: 'Designed and implemented an interactive MATLAB GUI for bird image analysis, enabling real-time recognition, visualization, and feature extraction for different bird species.'
}
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#131B6A] mb-4">Leadership & Community Experience</h2>
          <div className="w-20 h-1 bg-[#729FD9] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#C2DDFF] text-[#506F98] group-hover:bg-[#729FD9] group-hover:text-white transition">
                  {exp.icon}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#131B6A]">{exp.role}</h3>
                  <span className="text-sm text-[#729FD9] font-medium">{exp.organization}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
