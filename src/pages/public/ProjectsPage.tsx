import { CardProject } from '../../components/CardProject';
import { projects } from '../../utils/projectsInformacion';

export const ProjectsPage = () => {
  return (
    <div className='flex flex-col items-center gap-2 m-5' id='projectsPage'>      
      <h2 className='text-2xl font-black'>Some projects I have worked on</h2>
      <hr />
      <div className='flex gap-5 flex-wrap min-w-lvh justify-center'>
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
