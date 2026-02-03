import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import cv from '../assets/files/alexis_romero_mendoza_CV_2026.pdf';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/home-page' },
    { name: 'Projects', path: '/projects-page' },
    { name: 'About me', path: '/about-page' },
    { name: 'Contact', path: '/contact-page' },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="backdrop-blur-md bg-white/80 border border-violet-200/50 rounded-3xl md:rounded-full mt-4 shadow-lg shadow-violet-500/10">
        <div className="flex items-center justify-between px-6 py-3 md:py-4">
          {/* Logo or Home Link for Mobile */}
          <Link to="/home-page" className="md:hidden font-bold text-violet-900" onClick={closeMenu}>
            ARM
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-violet-900 p-2 hover:bg-violet-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center gap-6 w-full">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm md:text-base transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-violet-50 ${link.name === 'Home' ? 'font-semibold text-violet-900 hover:text-violet-600' : 'text-violet-700 hover:text-violet-600'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={cv}
                target='_blank'
                className="text-sm md:text-base text-violet-700 hover:text-violet-600 transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-violet-50"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center gap-4 pb-6 px-4">
            {navLinks.map((link) => (
              <li key={link.path} className="w-full text-center">
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className="block text-violet-700 hover:text-violet-600 font-medium py-2 rounded-xl hover:bg-violet-50 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="w-full text-center">
              <a
                href={cv}
                target='_blank'
                onClick={closeMenu}
                className="block text-violet-700 hover:text-violet-600 font-medium py-2 rounded-xl hover:bg-violet-50 transition-colors"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
