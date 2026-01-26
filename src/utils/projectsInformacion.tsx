import { FaGithub, FaReact, FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

// Datos de proyectos
export const projects = [
  {
    name: 'Portal SPAYT',
    description: 'I designed a website for SPAYT',
    link: 'https://arm-code.github.io/prepa-abierta/',
    techs: [<FaReact key="react" />, <IoLogoJavascript key="js" />],
  },
  {
    name: 'Relleno',
    description: 'I designed a script to automate a process',
    link: 'https://github.com/arm-code/Manipulacion_Interfaz',
    techs: [<FaPython key="python" />],
  },
  {
    name: 'Pokedex',
    description: 'I learned to consume an API with JS',
    link: 'https://github.com/arm-code/pokedex',
    techs: [<IoLogoJavascript key="js" />],
  },
  {
    name: 'Mobiliario Mendoza shop',
    description: 'App for manage my own bussiness.',
    link: 'https://mobiliariomendoza.shop/',
    techs: [<FaGithub key="github" />, <FaReact key="react" />],
  },
  {
    name: 'Others projects',
    description: 'Visit my GitHub profile',
    link: 'https://github.com/arm-code',
    techs: [<FaGithub key="github" />],
  }
];