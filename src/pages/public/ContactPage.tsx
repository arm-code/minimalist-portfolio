
import { MdOutlineMail } from 'react-icons/md';
import { FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export const ContactPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12 py-12 px-6 min-h-svh text-slate-800' id='contactPage'>
      <div className="text-center space-y-2">
        <h1 className="text-5xl md:text-6xl font-black  uppercase text-violet-900">Contact Me</h1>
        <p className="text-violet-600 font-semibold text-lg tracking-wide">I'm open to work.</p>
      </div>

      <div className='w-full max-w-xl space-y-4'>
        <a
          href='mailto:alexis.rm162917@gmail.com'
          className='flex items-center gap-4 p-5 rounded-2xl border border-violet-100 bg-white hover:bg-violet-50 hover:border-violet-200 transition-all shadow-sm group'
        >
          <div className="p-3 rounded-xl bg-violet-100 text-violet-600 group-hover:scale-110 transition-transform">
            <MdOutlineMail className="text-2xl" />
          </div>
          <span className="text-lg font-medium tracking-tight text-violet-700">alexis.rm162917@gmail.com</span>
        </a>

        <a
          href='mailto:al162917@alumnos.uacj.mx'
          className='flex items-center gap-4 p-5 rounded-2xl border border-violet-100 bg-white hover:bg-violet-50 hover:border-violet-200 transition-all shadow-sm group'
        >
          <div className="p-3 rounded-xl bg-violet-100 text-violet-600 group-hover:scale-110 transition-transform">
            <MdOutlineMail className="text-2xl" />
          </div>
          <span className="text-lg font-medium tracking-tight text-violet-700">al162917@alumnos.uacj.mx</span>
        </a>

        <a
          href='tel:+526567608407'
          className='flex items-center gap-4 p-5 rounded-2xl border border-violet-100 bg-white hover:bg-violet-50 hover:border-violet-200 transition-all shadow-sm group'
        >
          <div className="p-3 rounded-xl bg-violet-100 text-violet-600 group-hover:scale-110 transition-transform">
            <FaPhone className="text-xl" />
          </div>
          <span className="text-lg font-medium tracking-tight text-violet-700">+52 656 778 8565</span>
        </a>
      </div>

      <div className='flex gap-8 items-center pt-8'>
        <a
          href='https://www.linkedin.com/in/alexis-romero-mendoza-4a8b03221/'
          target='_blank'
          rel="noopener noreferrer"
          className="text-4xl text-violet-400 hover:text-[#0A66C2] transition-all hover:scale-110"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/arm-code'
          target='_blank'
          rel="noopener noreferrer"
          className="text-4xl text-violet-400 hover:text-slate-900 transition-all hover:scale-110"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
