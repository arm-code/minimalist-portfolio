import { FaGithub, FaReact, FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

// Datos de proyectos
export const projects = [
  {
    name: 'Direct access to the "Prepa Abierta" section.',
    description: 'I developed a portal to access the official SPAyT website that displays data exclusive to the "Prepa abierta" department, allowing users to log in directly without needing to search for the "Prepa Abierta" section throughout the entire website.',
    link: 'https://arm-code.github.io/prepa-abierta/',
    techs: ['React', 'Tailwind CSS' ],
  },
  {
    name: 'Script in Python for interface manipulation',
    description: 'I developed a Python script to manipulate the graphical interface of the internal software used for manual data entry. This software repetitively captures specific data from an Excel file. The script is responsible for reading the file and automatically entering all the data.',
    link: 'https://github.com/arm-code/Manipulacion_Interfaz',
    techs: ['Python', 'XLSX' ],
  },
  {
    name: 'Point of Sale front-end - Mobiliario Mendoza',
    description: 'I developed a point-of-sale system for a local business that assists with general administration, such as inventory, product catalogs, and other internal tools for resource management. Connected to a back-end that I also developed.',
    link: 'https://pos-front.yosoyalexisromero.site/',
    techs: ['TypeScript', 'NextJS', 'Debian','Cloudfared', 'Supabase' ],
  },
  {
    name: 'Point of Sale back-end - Mobiliario Mendoza',
    description: 'I developed the backend for the business logic of the point-of-sale system for Mobiliario Mendoza. This backend handles data management, user authentication, and other essential functionalities to ensure the smooth operation of the point-of-sale system.',
    link: 'https://pos-front.yosoyalexisromero.site/',
    techs: ['NestJS', 'TypeScript', 'Supabase', 'Debian', 'pdf-make' ],
  },
  {
    name: 'The Music Bull',
    description: 'I helped develop the front-end of a music store e-commerce website called The Music Bull, which offers auctions of rights of music tracks.',
    link: 'https://mpe.themusicbull.com',
    techs: ['React', 'Styled components', 'Asana', 'GitFlow' ],
  },
  {
    name: 'Internal System SPAyT',
    description: 'I developed an internal system for the company SPAyT as my graduation project. It assists with the management of administrative and academic processes, such as document management, grades, student certificates, data entry, file storage, and more. The frontend consumes an API that I also developed for the company.',
    link: '',
    techs: ['NextJS', 'Tailwind CSS', 'Docker', 'Ubuntu Server', 'Local Supabase' ],
  },
  {
    name: 'API Internal System SPAyT',
    description: 'API Internal System SPAyT: I also developed the API to handle all the business logic and provide the necessary data for the frontend to function..',
    link: '',
    techs: ['NestJS', 'TypeScript', 'Docker', 'Ubuntu Server', 'Local Supabase', 'pdf-make' ],
  },
  {
    name: 'This portfolio website',
    description: 'This portfolio website was developed using React and Tailwind CSS. It showcases my projects and skills in a clean and modern design.',
    link: 'https://yosoyalexisromero.site/',
    techs: ['React', 'Tailwind CSS', 'TypeScript', 'GitHub Pages' ],
  },
  {
    name: 'Others projects',
    description: 'If you want to see more of my projects, you can visit my GitHub profile where I have several other personal and academic projects available. Also you can contact me for more information about my work.',
    link: 'https://github.com/arm-code',
    techs: ['GitHub', 'Various Technologies' ],
  }
];