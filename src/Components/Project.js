import React, { useState } from 'react';
import { 
    Github, 
    ExternalLink, 
    Code2, 
    Database,
    Layout,
    Smartphone,
    Rocket,
    Users,
    Zap,
    BarChart3,
    Clock
} from 'lucide-react';

const Project = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            title: "E-commerce Platform",
            description: "A high-performance e-commerce platform built with React.js and Firebase.",
            image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            technologies: ["React.js", "Firebase", "Redux", "Tailwind CSS"],
            githubLink: "https://github.com/yourusername/ecommerce-platform",
            liveLink: "https://ecommerce-platform.com",
            features: [
                { icon: Rocket, text: "Optimized performance" },
                { icon: Users, text: "60K+ users" },
                { icon: Zap, text: "Fast loading" }
            ]
        },
        {
            title: "Cafe Dashboard",
            description: "A FastAPI-powered dashboard for cafe management and reporting.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            technologies: ["FastAPI", "React", "PostgreSQL", "Docker"],
            githubLink: "https://github.com/yourusername/cafe-dashboard",
            liveLink: "https://cafe-dashboard.com",
            features: [
                { icon: BarChart3, text: "Real-time analytics" },
                { icon: Database, text: "Efficient data management" },
                { icon: Layout, text: "Responsive design" }
            ]
        },
        {
            title: "Inventory Management System",
            description: "B2B cafe & inventory management system for efficient stock tracking.",
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            githubLink: "https://github.com/yourusername/inventory-system",
            liveLink: "https://inventory-system.com",
            features: [
                { icon: Smartphone, text: "Mobile-friendly" },
                { icon: Clock, text: "Real-time updates" },
                { icon: Database, text: "Scalable architecture" }
            ]
        }
    ];

    return (
        <div id='project' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100'>
            <h1 className='text-4xl font-bold mb-4 text-center text-black'>Projects</h1>
            <p className='text-gray-600 mb-12 text-center max-w-2xl'>Explore my recent work and contributions to the tech community</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300'
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <div className='relative h-48 overflow-hidden'>
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-500'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                                <div className='flex space-x-4'>
                                    <a
                                        href={project.githubLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-white hover:text-blue-400 transition-colors duration-300'
                                    >
                                        <Github className='w-6 h-6' />
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-white hover:text-blue-400 transition-colors duration-300'
                                    >
                                        <ExternalLink className='w-6 h-6' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='p-6'>
                            <h3 className='text-xl font-bold text-black mb-2'>{project.title}</h3>
                            <p className='text-gray-600 mb-4'>{project.description}</p>
                            
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className='space-y-2'>
                                {project.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className='flex items-center text-gray-600'
                                    >
                                        <feature.icon className='w-4 h-4 mr-2 text-blue-600' />
                                        <span className='text-sm'>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
