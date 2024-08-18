import React from 'react';

const ProjectCard = ({project, key}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-[500px] border-2 border-black">
            <div className='flex flex-col justify-start items-center max-h-[300px]'>
                <img className="object-cover w-full" src={project.image} alt="Sunset in the mountains" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">
                {project.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {project.techStack.map((tech)=>{
                   return (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={tech}>
                    {tech}
                    </span>)
                })}
            </div>
            </div>

    );
}

export default ProjectCard;
