


export const CardProject = ({ description, projectName, linkTo, techs }: any) => {
  return (

    <div className="flex flex-col w-full md:w-80 lg:w-[350px] h-auto p-6 border border-violet-100 rounded-3xl shadow-xl shadow-violet-500/5 bg-white hover:border-violet-200 transition-all group justify-between">
      <div className="flex-1">
        <h5 className="mb-3 text-xl md:text-2xl font-bold tracking-tight text-violet-900 leading-tight">{projectName}</h5>
        <p className="text-slate-600 text-sm md:text-base text-justify mb-6 leading-relaxed">{description}</p>
        <div className='flex flex-wrap gap-2 items-center justify-center mb-6'>
          {techs.map((t: string, i: number) => (
            <span className="px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-xs font-semibold" key={i}>{t}</span>
          ))}
        </div>
      </div>
      <div className="pt-4 border-t border-violet-50 flex justify-center">
        {!linkTo ? (
          <p className="text-slate-400 text-sm italic">Private project</p>
        ) : (
          <a href={linkTo} target="_blank" className="inline-flex items-center gap-2 text-white bg-violet-600 hover:bg-violet-700 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-violet-500/20 active:scale-95">
            Visit Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        )}
      </div>
    </div>


  );
};
