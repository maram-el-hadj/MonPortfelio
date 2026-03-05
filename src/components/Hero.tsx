import { ChevronDown } from 'lucide-react';
import profile from "../assets/profile.jpg"


interface HeroProps {
  onViewWork: () => void;
}

export default function Hero({ onViewWork }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
           <div className="mt-8 w-40 h-40 rounded-full overflow-hidden shadow-xl mx-auto">
  <img
    src={profile}
    alt="Maram El Hadj"
    className="w-full h-full object-cover"
  />
</div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#131B6A] mb-6 leading-tight">
            Maram El Hadj
          </h1>

          <p className="text-2xl sm:text-3xl text-[#506F98] mb-4 font-light">
            Frontend Developer & UI Enthusiast
          </p>

          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Passionate about building clean, modern interfaces. Experienced in React, Tailwind CSS, Typscript, and Matlab development.
          </p>

          <button
            onClick={onViewWork}
            className="bg-[#729FD9] hover:bg-[#506F98] text-white font-semibold px-8 py-4 rounded-2xl transition transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto text-[#729FD9]" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
