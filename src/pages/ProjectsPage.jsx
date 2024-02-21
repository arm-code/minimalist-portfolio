import { CardProject } from '../components/CardProject';
import './ProjectsPageStyles.css';
import { FaGithub } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPython } from 'react-icons/fa';

export const ProjectsPage = () => {
  const description1 = 'Visit my GitHub profile';
  const name1 = 'Others projects';
  const link1 = 'https://github.com/arm-code';
  const tech1 = [<FaReact />, <IoLogoJavascript />];

  const name2 = 'Portal SPAYT';
  const description2 = 'I designed a website for SPAYT';
  const link2 = 'https://arm-code.github.io/prepa-abierta/';
  const tech2 = [<FaReact />, <IoLogoJavascript />];

  const name3 = 'Relleno';
  const description3 = 'I designed a script to automate a process';
  const link3 = 'https://github.com/arm-code/Manipulacion_Interfaz';
  const tech3 = [<FaPython />];

  const name4 = 'Pokedex';
  const description4 = 'I learned to consume an API with JS';
  const link4 = 'https://github.com/arm-code/pokedex';
  const tech4 = [ <IoLogoJavascript />];
  
  return (
    <div className='projectspage'>
      <h1>PROJECTS</h1>
      <p>Some projects I have worked on</p>
      <hr />
      <div className='cardscontainer'>
        <CardProject
          description={description2}
          projectName={name2}
          linkTo={link2}
          techs={tech2}
        />
        <CardProject
          description={description3}
          projectName={name3}
          linkTo={link3}
          techs={tech3}
        />
        <CardProject
          description={description4}
          projectName={name4}
          linkTo={link4}
          techs={tech4}
        />

        <CardProject
          description={description1}
          projectName={name1}
          linkTo={link1}
          techs={tech1}
        />
      </div>
    </div>
  );
};
