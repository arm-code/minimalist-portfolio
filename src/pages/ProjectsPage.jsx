import { CardProject } from '../components/CardProject';
import './ProjectsPageStyles.css';
import { projects } from '../utils/projectsInformacion';

export const ProjectsPage = () => {
  return (
    <div className='projectspage' id='projectsPage'>
      <h1>PROJECTS</h1>
      <p>Some projects I have worked on</p>
      <hr />
      <div className='cardscontainer'>
        {projects.map((project, index) => (
          <CardProject
            key={index}
            description={project.description}
            projectName={project.name}
            linkTo={project.link}
            techs={project.techs}
          />
        ))}
      </div>
    </div>
  );
};
