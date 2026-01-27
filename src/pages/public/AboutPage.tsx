
import arm from '../assets/img/arm2.jpg';
import { FaReact, FaGit, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import { TbFileTypeSql } from 'react-icons/tb';



export const AboutPage = () => {
  return (
    <div className='aboutpage' id='aboutPage'>
      <h1>ABOUT ME</h1>
      <p>What do I do</p>
      <hr />
      <div className='aboutContainer'>
        <div className='aboutItem'>
          <p>
            Actually, I'm graduate in <strong>Computational Systems Engineering</strong> career.
          </p>
          <br />
          <p>
            In the mornings, I work at a government office as an IT engineer,
            my principal tasks are:
          </p>
          <br />
          <p>
            - Develop new tools in web environments
          </p>
          <p>
            - Provide user support
          </p>

          <p>
            - Maintain company software
          </p>

          <p>
            - Generate reports with SQL queries
          </p>

        </div>
        <div className='aboutItemImg'>
          <img src={arm} alt='img profile' />
        </div>
        <div className='aboutItem'>
          <p>
            Actually, all my personal and work projects are built with{' '}
            <strong>React or Next JS</strong> on the frontend. I'm working on specializing
            in these technologies.{' '}
          </p>
          <br />
          <p>
            Also, I have built the backend with{' '}
            <strong>Nest JS and Supabase.</strong>
          </p>
          <br />
          <p>
            At my work daily I use <strong>SQL</strong> to generate
            different reports.
          </p>
        </div>
      </div>
      <div className='iconsContainer'>
        <SiTypescript />
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <TbFileTypeSql />
        <FaGit />
      </div>
    </div>
  );
};
