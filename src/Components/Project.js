import React from 'react';
import AntiVirus from '../Assets/AntiVirus.png'
import AI from '../Assets/AI-Art.png'
import ShareEasy from '../Assets/ShareEasy.png'
import ProjectCard from '../lib/ProjectCard';
const project = [
    {
        title:"The Coldest Sunset",
        description: "A short film about a young man who is struggling to cope with the loss of his mother.",
        image: ShareEasy,
        link: "https://www.youtube.com/watch?v=8Q8w6kx",
        techStack : ["Python", "React", "MERN"],
    },
    {
        title:"The Coldest Sunset",
        description: "A short film about a young man who is struggling to cope with the loss of his mother.",
        image: AI,
        link: "https://www.youtube.com/watch?v=8Q8w6kx",
        techStack : ["Python", "React", "MERN"],
    },
    {
        title:"The Coldest Sunset",
        description: "A short film about a young man who is struggling to cope with the loss of his mother.",
        image: AntiVirus,
        link: "https://www.youtube.com/watch?v=8Q8w6kx",
        techStack : ["Python", "React", "MERN"],
    }
]

const Project = () => {
    return (
        <div id='project' className='flex flex-col space-y-8 min-h-screen bg-gradient-to-r from-slate-300 to-slate-500 m-4 p-2'>
            <div className='flex flex-col justify-center items-center h-1/3 space-y-4 mt-16'>
                <p className='text-4xl text-black font-bold'>Project</p>
                <p className='text-ls text-gray-800'>These are my best arts</p>
            </div>
            <div className='grid gap-4 justify-center items-center mx-auto px-auto pb-8 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {/* <div className='flex flex-row justify-center items-center space-x-4 pb-8 mb-8'> */}
                <ProjectCard project = {project[0]} />
                <ProjectCard project = {project[1]}/>
                <ProjectCard project = {project[2]}/>
            </div>
        </div>
    );
}

export default Project;
