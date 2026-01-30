
import arm from '../../assets/img/arm2.jpg';
import { FaReact, FaGit, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import { TbFileTypeSql } from 'react-icons/tb';



export const AboutPage = () => {
  return (
    <div className='flex flex-col items-center gap-12 py-12 px-6 min-h-svh text-slate-800' id='aboutPage'>
      <div className="text-center space-y-2">
        <h1 className="text-5xl md:text-6xl font-black uppercase text-violet-900">About Me</h1>
        <p className="text-violet-600 font-semibold text-lg tracking-wide">What do I do?</p>
      </div>

      <div className='flex flex-col lg:flex-row gap-16 items-center max-w-6xl w-full '>
        <div className='flex-1 space-y-6 text-lg text-slate-600 leading-relaxed order-2 lg:order-1'>
          <p className='text-violet-600'>
            I am currently a graduate in <strong className="text-violet-900 font-bold">Computer Systems Engineering</strong>.
          </p>

          <div className="space-y-4">
            <p className='text-violet-600'>
              In my day-to-day work at a government office as an IT Engineer, I handle various critical responsibilities:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-violet-600">
              <li>Developing new web-based tools and solutions</li>
              <li>Providing technical support and digital transformation guidance</li>
              <li>Maintaining and optimizing company software</li>
              <li>Generating data-driven reports using complex SQL queries</li>
            </ul>
          </div>
        </div>

        <div className='relative group order-1 lg:order-2 h-full'>
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-200 to-indigo-200 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={arm}
            alt='Alexis Romero'
            className='relative w-72 h-full md:w-80 object-cover rounded-3xl shadow-2xl shadow-violet-500 transition-transform duration-500 group-hover:scale-[1.02] '
          />
        </div>

        <div className='flex-1 space-y-6 text-lg text-slate-600 leading-relaxed order-3'>
          <p className='text-violet-600'>
            My personal and professional focus is currently centered on building modern interfaces with <strong className="text-violet-900 font-bold">React and Next.js</strong>. I am constantly pushing my limits to specialize in these industry-leading technologies.
          </p>

          <p className='text-violet-600'>
            On the server side, I have experience architecting robust backends using <strong className="text-violet-900 font-bold decoration-violet-200 underline underline-offset-4">NestJS</strong> and leveraging <strong className="text-violet-900 font-bold">Supabase</strong> for seamless database and authentication management.
          </p>

          <p className='text-violet-600'>
            My daily workflow heavily involves <strong className="text-violet-900 font-bold underline decoration-violet-200 underline-offset-2">SQL</strong>, allowing me to transform raw data into meaningful insights for organizational decision-making.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-10 text-5xl md:text-6xl text-violet-400 pt-12'>
        <SiTypescript className="hover:text-[#3178C6] transition-all duration-300 cursor-default hover:scale-110" title="TypeScript" />
        <FaReact className="hover:text-[#61DAFB] transition-all duration-300 cursor-default hover:scale-110" title="React" />
        <FaHtml5 className="hover:text-[#E34F26] transition-all duration-300 cursor-default hover:scale-110" title="HTML5" />
        <FaCss3Alt className="hover:text-[#1572B6] transition-all duration-300 cursor-default hover:scale-110" title="CSS3" />
        <TbFileTypeSql className="hover:text-[#4479A1] transition-all duration-300 cursor-default hover:scale-110" title="SQL" />
        <FaGit className="hover:text-[#F05032] transition-all duration-300 cursor-default hover:scale-110" title="Git" />
      </div>
    </div>
  );
};
