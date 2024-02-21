import { NavBar } from '../components/NavBar';
import './HomePageStyles.css';

export const HomePage = () => {
  return (
    <div className='homepage'>
      <NavBar />
      <div>
        <h1>ALEXIS ROMERO MENDOZA</h1>
        <p>WEB DEVELOPER</p>
        <hr />
      </div>
    </div>
  );
};
