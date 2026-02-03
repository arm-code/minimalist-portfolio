import { CardProject } from '../../components/CardProject';
import { projects } from '../../utils/projectsInformacion';

export const ProjectsPage = () => {
  return (
    <div className='flex flex-col items-center gap-6 px-4 py-12 min-h-svh' id='projectsPage'>
      <h2 className='text-3xl md:text-5xl font-black text-center text-violet-900 uppercase'>Projects</h2>

      <div className='flex gap-6 flex-wrap justify-center w-full max-w-7xl'>
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
