import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-[#131B6A]">Maram El Hadj</span>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-[#506F98] hover:text-[#729FD9] transition">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-[#506F98] hover:text-[#729FD9] transition">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-[#506F98] hover:text-[#729FD9] transition">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-[#506F98] hover:text-[#729FD9] transition">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      <Hero onViewWork={() => scrollToSection('projects')} />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <footer className="bg-[#131B6A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">©  All rights reserved. Developed by  Maram eL Hadj</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
