import { Code2, Palette, Smartphone, GitBranch } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'React.js | Tailwind CSS | HTML | CSS | TypScript | JavaScript',
      category: 'Frontend Development'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'WordPress Development | Git & Version Control',
      category: 'CMS & Tools'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Responsive Design & UI/UX',
      category: 'Design'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'MATLAB | Data Analysis | Simulations | Engineering Projects',
      category: 'Technical Projects'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#131B6A] mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#729FD9] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            I am a second-year engineering student at ENETCOM, specializing in frontend development, web design, and Matlab projects. 
  I combine technical skills with leadership experience to create functional and visually appealing websites and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#C2DDFF] p-3 rounded-xl text-[#506F98]">
                  {skill.icon}
                </div>
                <div>
                  <p className="text-sm text-[#729FD9] font-semibold mb-1">{skill.category}</p>
                  <p className="text-gray-800 font-medium">{skill.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
