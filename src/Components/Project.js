import React from 'react';
import ProjectCard from '../lib/ProjectCard';

const Project = () => {
    return (
        <div className='flex flex-col space-y-8 bg-gradient-to-r from-slate-300 to-slate-500 m-8'>
            <div className='flex flex-col justify-center items-center h-1/3 space-y-4'>
                <p className='text-4xl text-black font-bold'>Project</p>
                <p className='text-ls text-gray-800'>These are my best arts</p>
            </div>
            <div className='grid gap-4 justify-center items-center mx-auto px-auto pb-8 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {/* <div className='flex flex-row justify-center items-center space-x-4 pb-8 mb-8'> */}
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}

export default Project;
