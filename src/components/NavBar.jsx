import './NavBarStyles.css';
import cv from '../files/alexis_romero_mendoza_CV_2024.pdf';
export const NavBar = () => {

  

  return (
    <nav>
      <ul>
        <li>
          <a href='#homePage' className='navItem'>
            Home
          </a>
        </li>
        <li>
          <a href={cv} target='_blank' className='navItem'>
            Download CV
          </a>
        </li>
        <li>
          <a href='#projectsPage' className='navItem'>
            Projects
          </a>
        </li>
        <li>
          <a href='#aboutPage' className='navItem'>
            About me
          </a>
        </li>
        <li>
          <a href='#contactPage' className='navItem'>
            Contact
          </a>
        </li>
      </ul>      
    </nav>
  );
};
