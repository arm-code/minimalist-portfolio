import { Footer } from './components/Footer';
import { AboutPage } from './pages/public/AboutPage';
import { AuthPage } from './pages/public/AuthPage';
import { ContactPage } from './pages/public/ContactPage';
import { HomePage } from './pages/public/HomePage';
import { ProjectsPage } from './pages/public/ProjectsPage';

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
