import './AboutPageStyles.css';
import arm from '../img/arm2.jpg';

export const AboutPage = () => {
  return (
    <div className='aboutpage'>
      <h1>ABOUT ME</h1>
      <p>Hi. I'm Alexis Romero Mendoza</p>
      <hr />
      <div className='aboutContainer'>
        <div className='aboutItem'>
          <p>
            
            Actually I'm in my last semester at the university studying the
            systems computational engineering career.
          </p>
          <p>In the mornings, I work at a government office as an IT specialist, providing user support, maintaining company software, and developing new tools in web enviroments. </p>
        </div>
        <div className='aboutItemImg'>
          <img src={arm} alt='img profile' />
        </div>
        <div className='aboutItem'></div>
      </div>
    </div>
  );
};
