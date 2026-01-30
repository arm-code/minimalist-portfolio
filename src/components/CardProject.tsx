


export const CardProject = ({ description, projectName, linkTo, techs }: any) => {
  return (

    <div className="flex  flex-col w-90 h-auto min-h-100 p-6 border rounded-xl shadow-lg shadow-violet-500 text-center justify-between">
      <div className="flex-1">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{projectName}</h5>
        <p className="text-body text-justify mb-6">{description}</p>
        <div className='flex flex-wrap gap-2 items-center justify-center mb-4'>
          {techs.map((t: string, i: number) => (
            <p className="font-light font-mono" key={i}>{t}</p>
          ))}
        </div>
      </div>
      <div className="h-10">
        {!linkTo ? (<p className="text-red-400">Link not available. Private project.</p>) : (
          <a href={linkTo} target="_blank" className="inline-flex items-center text-white bg-violet-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Visit
            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
          </a>)}
      </div>
    </div>


  );
};
