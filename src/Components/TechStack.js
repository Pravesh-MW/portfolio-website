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
    Layers,
    Package,
    Layout,
    Boxes,
    Shield,
    Zap
} from 'lucide-react';

const TechStack = () => {
    const { isDarkMode } = useContext(ThemeContext);

    const skills = [
        {
            category: 'Core React',
            icon: Code2,
            items: ['React.js', 'React Hooks', 'Context API', 'React Router', 'React Query']
        },
        {
            category: 'State Management',
            icon: Boxes,
            items: ['Redux', 'Redux Toolkit', 'Context API', 'Zustand', 'Jotai']
        },
        {
            category: 'UI Libraries',
            icon: Layout,
            items: ['Material UI', 'Tailwind CSS', 'Styled Components', 'Chakra UI', 'Ant Design']
        },
        {
            category: 'Backend Integration',
            icon: Server,
            items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'WebSocket']
        },
        {
            category: 'Build Tools',
            icon: Package,
            items: ['Webpack', 'Vite', 'Babel', 'ESLint', 'Prettier']
        },
        {
            category: 'Testing',
            icon: Shield,
            items: ['Jest', 'React Testing Library', 'Cypress', 'Storybook', 'Unit Testing']
        },
        {
            category: 'Performance',
            icon: Zap,
            items: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Virtualization', 'PWA']
        },
        {
            category: 'Version Control',
            icon: GitBranch,
            items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'CI/CD']
        }
    ];

    return (
        <div id='techstack' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800'>
            <div className='max-w-6xl w-full space-y-8'>
                <div className='text-center space-y-4'>
                    <h1 className='text-4xl font-bold text-black dark:text-white'>
                        React <span className='text-blue-600 dark:text-blue-400'>Ecosystem</span>
                    </h1>
                    <p className='text-lg text-gray-600 dark:text-gray-300'>
                        Technologies and tools in my React development stack
                    </p>
            </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'
                        >
                            <div className='flex items-center space-x-3 mb-4'>
                                <skill.icon className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                                <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>{skill.category}</h2>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {skill.items.map((item, idx) => (
                                    <span 
                                        key={idx}
                                        className='px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200'
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
