import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

export const PortfolioApp = () => {
  return (
    <div className='portfolio-container'>
      <HomePage />
      <ProjectsPage />
      <AboutPage />
    </div>
  );
};
