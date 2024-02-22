import './AboutPageStyles.css';
import arm from '../img/arm2.jpg';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbFileTypeSql } from 'react-icons/tb';
import { FaGit } from 'react-icons/fa';

export const AboutPage = () => {
  return (
    <div className='aboutpage'>
      <h1>ABOUT ME</h1>
      <p>Hi. I'm Alexis Romero Mendoza</p>
      <hr />
      <div className='aboutContainer'>
        <div className='aboutItem'>
          <p>
            Actually, I'm in my last semester at the university studying the{' '}
            <strong>Computational Systems Engineering</strong> career.
          </p>
          <br />
          <p>
            In the mornings, I work at a government office as an IT specialist,
            providing <strong>user support</strong>, maintaining company
            software, generating reports with <strong>queries SQL</strong> and
            developing new tools in <strong>web environments</strong>.
          </p>
        </div>
        <div className='aboutItemImg'>
          <img src={arm} alt='img profile' />
        </div>
        <div className='aboutItem'>
          <p>
            Actually, all my personal and work projects are built with{' '}
            <strong>React</strong> on the frontend. I'm working on specializing
            in this technology.{' '}
          </p>
          <br />
          <p>
            Also, I have built the backend with{' '}
            <strong>Django Rest Framework.</strong>
          </p>
          <br />
          <p>
            At my work daily I use <strong>SQL Advantaje</strong> to generate
            different reports.
          </p>
          {/* <p>
            I enjoy the programming web. I like to view how a website is building. To design every button from zero and give it color with CSS.
          </p> */}
        </div>
        
      </div>
      <div className='iconsContainer'>
          <FaReact />
          <FaHtml5 />
          <FaCss3Alt />
          <DiDjango />
          <IoLogoJavascript />
          <TbFileTypeSql />
          <FaGit />
        </div>
    </div>
  );
};
