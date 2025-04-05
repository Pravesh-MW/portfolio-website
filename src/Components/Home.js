import React from 'react';

const Home = () => {
    return (
        <div id='home' className='flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-slate-100 to-slate-300 p-8'>
            <div className='flex flex-col items-start justify-center space-y-6 max-w-2xl'>
                <p className='text-2xl font-bold text-blue-600 animate-fade-in'>Hi there 👋</p>
                <h1 className='text-5xl font-bold text-gray-800 leading-tight animate-slide-in'>
                    I'm a Full Stack Developer
                </h1>
                <p className='text-xl text-gray-600 leading-relaxed animate-fade-in'>
                    I specialize in building modern web applications using the MERN stack. 
                    Passionate about creating efficient, scalable, and user-friendly solutions.
                </p>
                <div className='flex space-x-4 animate-fade-in'>
                    <a href='#project' className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl'>
                        View Projects
                    </a>
                    <a href='#contact' className='px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl'>
                        Contact Me
                    </a>
                </div>
            </div>
            <div className='mt-8 md:mt-0 md:ml-12 animate-float'>
                <div className='w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-2xl'></div>
            </div>
        </div>
    );
}

export default Home;
