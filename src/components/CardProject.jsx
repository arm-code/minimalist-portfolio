import './CardProjectStyles.css';
import { FaGithub } from 'react-icons/fa';

export const CardProject = ({ description, projectName, linkTo, techs }) => {
  return (
    <div className='cardproject'>
      <div className='cardInner'>
        <h3>{projectName}</h3>
        <hr className='divider' />
        <p>{description}</p>

        <div className='tech'>
          {techs.map((t, i) => (
            <div key={i}>{t}</div>
          ))}
        </div>
      </div>
      <a
        href={linkTo}
        target='_blank'
        className='liga'
        title='Click for view project'
      >
        <FaGithub className='icon' /> Code
      </a>
    </div>
  );
};
