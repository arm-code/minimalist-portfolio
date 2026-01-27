import cv from '../assets/files/alexis_romero_mendoza_CV_2024_ENG4.pdf';

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="backdrop-blur-md bg-white/80 border border-violet-200/50 rounded-full mt-4 shadow-lg shadow-violet-500/10">
        <ul className="flex items-center justify-center gap-2 md:gap-6 px-4 py-3 md:py-4">
          <li>
            <a
              href='#homePage'
              className="font-semibold text-sm md:text-base text-violet-900 hover:text-violet-600 transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-violet-50"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={cv}
              target='_blank'
              className="text-sm md:text-base text-violet-700 hover:text-violet-600 transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-violet-50"
            >
              Download CV
            </a>
          </li>
          <li>
            <a
              href='#projectsPage'
              className="text-sm md:text-base text-violet-700 hover:text-violet-600 transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-violet-50"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#aboutPage'
              className="text-sm md:text-base text-violet-700 hover:text-violet-600 transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-violet-50"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href='#contactPage'
              className="text-sm md:text-base text-violet-700 hover:text-violet-600 transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-violet-50"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
