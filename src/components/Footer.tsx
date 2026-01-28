import { Link } from "react-router-dom";

export default function Footer() {
  return (

    <footer className="flex flex-col items-center justify-around w-full py-16 text-sm text-violet-800/70 border-t border-violet-800/10 shadow-2xl shadow-violet-900">
      <div className="flex items-center gap-8">
        <Link to="home-page" className="font-medium text-gray-500 hover:text-black transition-all">
          Home
        </Link>
        <Link to="about-page" className="font-medium text-gray-500 hover:text-black transition-all">
          About
        </Link>
        <Link to="contact-page" className="font-medium text-gray-500 hover:text-black transition-all">
          Contact
        </Link>
        <Link to="projects-page" className="font-medium text-gray-500 hover:text-black transition-all">
          Projects
        </Link>
        <Link to="login" className="font-medium text-gray-500 hover:text-black transition-all">
          Login
        </Link>
      </div>

      <div className="flex items-center gap-4 mt-8 ">
        <Link to="https://github.com/arm-code" target="_blank" className="hover:-translate-y-0.5 transition-all duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <p className="mt-8 text-center">Copyright © 2026 <Link target="_blank" to="https://pos-front.yosoyalexisromero.site/about-me">Alexis Romero Mendoza</Link>. All rights reservered.</p>
      <p className="text-xs mt-2">Desarrollado con el poder del fuego violeta 💜</p>
    </footer>

  );
};