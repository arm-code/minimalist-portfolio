import './ContactPageStyles.css';
import { MdOutlineMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const ContactPage = () => {
  return (
    <div className='contactPage' id='contactPage'>
      <h1>CONTACT ME</h1>
      <p>I'm open to work.</p>
      <hr />
      <div className='contactContainer'>
        <a href='mailto:alexis.rm162917@gmail.com' className='contactItem'>
          <MdOutlineMail />
          alexis.rm162917@gmail.com
        </a>
        <a href='mailto:al162917@alumnos.uacj.mx' className='contactItem'>
          <MdOutlineMail />
          <p>al162917@alumnos.uacj.mx</p>
        </a>
        <a href='tel:+526567608407' className='contactItem'>
          <FaPhone />
          <p>+52 6567608407</p>
        </a>

        <div className='otherContactItems'>
          <a
            href='https://www.linkedin.com/in/alexis-romero-mendoza-4a8b03221/'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a href='https://github.com/arm-code' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
