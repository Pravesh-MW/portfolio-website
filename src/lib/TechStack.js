import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { 
    Code2, 
    Database, 
    Globe, 
    Terminal,
    GitBranch,
    Cpu,
    FileCode,
    Server,
    Network,
    Layers
} from 'lucide-react';

const TechStack = () => {
    const { isDarkMode } = useContext(ThemeContext);

    const skills = [
        {
            category: 'Languages',
            icon: Code2,
            items: ['Python', 'JavaScript', 'C', 'C++', 'SQL']
        },
        {
            category: 'Web Development',
            icon: Globe,
            items: ['React.js', 'Node.js', 'Express', 'HTML', 'CSS', 'Flask', 'FastAPI']
        },
        {
            category: 'Databases',
            icon: Database,
            items: ['MongoDB', 'MySQL', 'Firebase']
        },
        {
            category: 'Tools',
            icon: Terminal,
            items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Bitvise SSH']
        },
        {
            category: 'Concepts',
            icon: Cpu,
            items: ['Data Structures & Algorithms', 'OOP', 'OS', 'DBMS', 'Agile']
        }
    ];

    return (
        <div id='techstack' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800'>
            <div className='max-w-4xl w-full space-y-8'>
                <div className='text-center space-y-4'>
                    <h1 className='text-4xl font-bold text-black dark:text-white'>
                        My <span className='text-blue-600 dark:text-blue-400'>Tech Stack</span>
                    </h1>
                    <p className='text-lg text-gray-600 dark:text-gray-300'>
                        Technologies and tools I work with
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='flex items-center space-x-3 mb-4'>
                                <skill.icon className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                                <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>{skill.category}</h2>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {skill.items.map((item, idx) => (
                                    <span 
                                        key={idx}
                                        className='px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm'
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack; 