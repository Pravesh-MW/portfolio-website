import React from 'react';
import { 
    Code2, 
    Database, 
    Rocket, 
    BarChart3,
    Clock,
    Building2,
    Briefcase,
    Calendar
} from 'lucide-react';

const Experience = () => {
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
        <div id='experience' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100'>
            <h1 className='text-4xl font-bold mb-12 text-center text-black'>Work Experience</h1>
            <div className='max-w-4xl w-full space-y-8'>
                {experiences.map((exp, index) => (
                    <div 
                        key={index}
                        className='bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300'
                    >
                        <div className='flex items-center mb-6'>
                            <exp.icon className='w-8 h-8 text-blue-600 mr-4' />
                            <div>
                                <h2 className='text-2xl font-bold text-black'>{exp.role}</h2>
                                <div className='flex items-center text-gray-600'>
                                    <Building2 className='w-4 h-4 mr-2' />
                                    <span>{exp.company}</span>
                                    <Calendar className='w-4 h-4 ml-4 mr-2' />
                                    <span>{exp.duration}</span>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            {exp.achievements.map((achievement, idx) => (
                                <div 
                                    key={idx}
                                    className='flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300'
                                >
                                    <achievement.icon className='w-6 h-6 text-blue-600 mr-4 mt-1' />
                                    <p className='text-gray-700'>{achievement.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
