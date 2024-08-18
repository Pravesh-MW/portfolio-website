import React from "react";
import ExperienceCard from "../lib/ExperienceCard";

const Experience = () => {
  return (
    <div id='experience' className="flex flex-col m-8 space-y-4 justify-center items-center h-screen bg-gradient-to-r from-slate-300 to-slate-500">
            <div className='flex flex-col justify-center items-center h-1/3 space-y-4'>
                <p className='text-4xl text-black font-bold'>Experience</p>
                <p className='text-ls text-gray-800'>Organization that help me to grow</p>
            </div>
            <div className='flex flex-row justify-start items-center space-x-4 pb-8 mb-8 w-2/3'>
                <ExperienceCard/>
            </div>
        </div>
  );
};

export default Experience;
