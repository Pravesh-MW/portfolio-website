import React from 'react';

const techStack = {
    frontend: {
        title: "Frontend",
        skills: [
            { name: "React", icon: "react" },
            { name: "JavaScript", icon: "javaScript" },
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "Tailwind", icon: "tailWind" }
        ]
    },
    backend: {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: "node" },
            { name: "Python", icon: "c++" },
            { name: "Express", icon: "node" }
        ]
    }
};

const TechStack = () => {
    return (
        <div id='techStack' className='min-h-screen bg-gradient-to-r from-slate-100 to-slate-300 py-16 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>Technical Skills</h2>
                    <p className='text-xl text-gray-600'>Technologies I work with</p>
                </div>
                
                <div className='grid gap-12 md:grid-cols-2'>
                    {Object.entries(techStack).map(([category, data]) => (
                        <div key={category} className='bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
                            <h3 className='text-2xl font-bold text-gray-800 mb-6'>{data.title}</h3>
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                                {data.skills.map((skill, index) => (
                                    <div 
                                        key={index}
                                        className='flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300'
                                    >
                                        <div className='w-16 h-16 mb-2'>
                                            {skill.icon === "react" && (
                                                <svg width="64" height="64" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M50.3067 58.8168C55.1758 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1758 41.1844 50.3067 41.1844C45.4376 41.1844 41.4905 45.1315 41.4905 50.0006C41.4905 54.8697 45.4376 58.8168 50.3067 58.8168Z" fill="#61DAFB"/>
                                                    <path d="M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z" stroke="#61DAFB" strokeWidth="5"/>
                                                    <path d="M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z" stroke="#61DAFB" strokeWidth="5"/>
                                                    <path d="M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z" stroke="#61DAFB" strokeWidth="5"/>
                                                </svg>
                                            )}
                                            {/* Add other icons similarly */}
                                        </div>
                                        <span className='text-sm font-medium text-gray-700'>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechStack;
