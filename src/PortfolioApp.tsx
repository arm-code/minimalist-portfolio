import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

export const PortfolioApp = () => {
  return (
    <div className='portfolio-container'>
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
      <Footer />
    </div>
  );
};
