import './NavBarStyles.css';
import cv from '../files/alexis_romero_mendoza_CV.pdf';

export const NavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>
        <a href={cv} target='_blank' className='navItem'>
          Download CV
        </a>
      </li>
      <li>
        <a href='#projectsPage' className='navItem'>Projects</a>
      </li>
      <li>
        <a href='#aboutPage' className='navItem'>About me</a>
      </li>
      <li>
        <a href='#contactPage' className='navItem'>Contact</a>
      </li>
    </ul>
  );
};
