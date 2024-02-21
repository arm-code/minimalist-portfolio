import './CardProjectStyles.css';
import { FaGithub } from 'react-icons/fa';

export const CardProject = ({ description, projectName, linkTo, techs }) => {    
  return (
    <div className='cardproject'>
      <h3>{projectName}</h3>
      <hr className='divider' />
      <p>{description}</p>
      <a href={linkTo} target='_blank' title='Click for view project'>
        <FaGithub className='icon' />
      </a>
      <div className='tech'>
        {techs.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </div>
  );
};
