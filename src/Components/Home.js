import React from 'react';

const Home = () => {
    return (
        <div id='home' className='flex justify-center items-center h-screen bg-gradient-to-r from-slate-300 to-slate-500'>
            <div className='flex items-start justify-center flex-col space-y-2'>
                <p className='text-xl font-bold text-green-800'>Hi there i</p>
                <h1 className='text-4xl font-bold text-black'>I'm A Full Stack Developer</h1>
                <p className='text-lg font-medium text-gray-600'>I developed websites using MERN Stack </p>
                <a href='#home' className='px-4 py-2 bg-blue-500 text-gray-800 hover:bg-blue-600 hover:text-gray-900 rounded-sm'>Know me</a>
            </div>
        </div>
    );
}

export default Home;
