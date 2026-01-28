import Typewriter from 'typewriter-effect';

export const HomePage = () => {
  return (
    <div className='font-normal' id='homePage'>
      <div className="text-center flex flex-col gap-2 items-center justify-center h-svh">
        <p className="text-md">Hi. I'm</p>
        <h1 className="text-7xl font-bold">
          Alexis Romero Mendoza
        </h1>

        <h2 className="text-3xl font-semibold text-gray-300">
          <Typewriter
            options={{
              strings: ['Software Engineer', 'Fullstack Developer'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>





        {/* <p className="text-sm text-gray-400 ">
          Bachelor’s Degree in Computer Systems Engineering · Degree Pending
        </p> */}


      </div>
    </div>
  );
};