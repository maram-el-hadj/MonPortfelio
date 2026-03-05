import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#131B6A] mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#729FD9] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
              Interested in collaborating? Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#C2DDFF]/30 hover:bg-[#C2DDFF]/50 transition group"
              >
                <div className="bg-[#729FD9] p-3 rounded-lg text-white group-hover:scale-110 transition">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#506F98] font-semibold">Email</p>
                  <p className="text-[#131B6A] font-medium">maroumm81@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/maram-el-hadj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#C2DDFF]/30 hover:bg-[#C2DDFF]/50 transition group"
              >
                <div className="bg-[#729FD9] p-3 rounded-lg text-white group-hover:scale-110 transition">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#506F98] font-semibold">LinkedIn</p>
                  <p className="text-[#131B6A] font-medium">linkedin.com/in/maram-el-hadj</p>
                </div>
              </a>

              <a
                href="https://github.com/maram-el-hadj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#C2DDFF]/30 hover:bg-[#C2DDFF]/50 transition group"
              >
                <div className="bg-[#729FD9] p-3 rounded-lg text-white group-hover:scale-110 transition">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#506F98] font-semibold">GitHub</p>
                  <p className="text-[#131B6A] font-medium">github.com/maram-el-hadj</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
