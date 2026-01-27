import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { AuthPage } from './pages/AuthPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

export const PortfolioApp = () => {
  return (
    <div className='portfolio-container'>
      <HomePage />
      <AuthPage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
      <Footer />
    </div>
  );
};
