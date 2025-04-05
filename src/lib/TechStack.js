import React from 'react';
import { 
    Code2,
    Layout,
    Database,
    GitBranch,
    Package,
    Cpu,
    Terminal,
    Settings,
    Smartphone,
    Bug
} from 'lucide-react';

const TechStack = () => {
    const reactSkills = [
        { name: 'React', icon: Code2, level: 'Advanced' },
        { name: 'Next.js', icon: Layout, level: 'Advanced' },
        { name: 'Redux', icon: Database, level: 'Advanced' },
        { name: 'React Router', icon: GitBranch, level: 'Advanced' },
        { name: 'React Query', icon: Package, level: 'Intermediate' },
        { name: 'React Hook Form', icon: Cpu, level: 'Intermediate' },
        { name: 'React Spring', icon: Terminal, level: 'Intermediate' },
        { name: 'React Testing', icon: Bug, level: 'Intermediate' },
        { name: 'React Native', icon: Smartphone, level: 'Intermediate' },
        { name: 'React DevTools', icon: Settings, level: 'Advanced' }
    ];

    return (
        <div id='techStack' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100'>
            <h1 className='text-4xl font-bold mb-12 text-center text-black'>React Ecosystem</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-6xl'>
                {reactSkills.map((skill, index) => (
                    <div 
                        key={index}
                        className='flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                    >
                        <skill.icon className='w-12 h-12 text-blue-600 mb-4' />
                        <h3 className='text-lg font-semibold text-black mb-2'>{skill.name}</h3>
                        <span className='text-sm text-gray-600'>{skill.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack; 