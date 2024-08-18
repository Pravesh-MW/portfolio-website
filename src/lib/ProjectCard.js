import React from 'react';
const project = {
    title:"The Coldest Sunset",
    description: "A short film about a young man who is struggling to cope with the loss of his mother.",
    image: "https://res.cloudinary.com/drjmamzjb/image/upload/v1723721736/urk9azzamk4bzhh0kxyb.png",
    link: "https://www.youtube.com/watch?v=8Q8w6kx",
    techStack : ["Python", "React", "MERN"],
}
const ProjectCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
                className="w-full"
                src={project.image}
                alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">
                {project.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {project.techStack.map((tech)=>{
                   return (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tech}
                    </span>)
                })}
            </div>
            </div>

    );
}

export default ProjectCard;
