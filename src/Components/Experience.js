import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { 
    Code2, 
    Database, 
    Rocket, 
    BarChart3,
    Clock,
    Building2,
    Briefcase,
    Calendar,
    MapPin
} from 'lucide-react';

const Experience = () => {
    const { isDarkMode } = useContext(ThemeContext);

    const experiences = [
        {
            role: "Software Developer",
            company: "Polyvalent Digital Services",
            duration: "October 2024 - Present",
            icon: Code2,
            achievements: [
                {
                    icon: Rocket,
                    text: "Engineered a high-performance e-commerce platform using React.js, enhancing user experience and reducing page load time."
                },
                {
                    icon: Database,
                    text: "Integrated Firebase for scalable data management, optimizing query performance for over 60K+ users."
                },
                {
                    icon: BarChart3,
                    text: "Developed and maintained a FastAPI-powered cafe dashboard, accelerating report generation."
                },
                {
                    icon: Clock,
                    text: "Designed and implemented a B2B cafe & inventory management system, streamlining stock tracking and order fulfillment for operational efficiency."
                }
            ]
        }
    ];

    return (
        <div id='experience' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800'>
            <div className='max-w-4xl w-full space-y-8'>
                <div className='text-center space-y-4'>
                    <h1 className='text-4xl font-bold text-black dark:text-white'>
                        My <span className='text-blue-600 dark:text-blue-400'>Experience</span>
                    </h1>
                    <p className='text-lg text-gray-600 dark:text-gray-300'>
                        A journey through my professional career and achievements.
                    </p>
                </div>

                <div className='space-y-8'>
                    {experiences.map((exp, index) => (
                        <div 
                            key={index}
                            className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='flex items-start justify-between'>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl font-semibold text-gray-800 dark:text-white'>{exp.role}</h2>
                                    <div className='flex items-center space-x-4 text-gray-600 dark:text-gray-300'>
                                        <div className='flex items-center space-x-1'>
                                            <Briefcase className='w-4 h-4' />
                                            <span>{exp.company}</span>
                                        </div>
                                        <div className='flex items-center space-x-1'>
                                            <MapPin className='w-4 h-4' />
                                            <span>{exp.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 space-y-2'>
                                {exp.achievements.map((achievement, idx) => (
                                    <p 
                                        key={idx}
                                        className='text-gray-600 dark:text-gray-300'
                                    >
                                        • {achievement.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
