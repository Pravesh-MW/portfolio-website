import React, { useContext } from 'react';
import { 
    Code2, 
    Github, 
    Linkedin, 
    Twitter,
    ArrowRight,
    Info,
    Sparkles
} from 'lucide-react';
import { ThemeContext } from '../Context/ThemeContext';

const Home = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div id='home' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800'>
            <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                {/* Left Column - Text Content */}
                <div className='space-y-8'>
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-2 text-blue-600 dark:text-blue-400'>
                            <Sparkles className='w-5 h-5' />
                            <span className='text-sm font-medium'>Welcome to my digital space</span>
                        </div>
                        <h1 className='text-5xl font-bold text-black dark:text-white'>
                            Hi there! I'm <span className='text-blue-600 dark:text-blue-400'>Pravesh</span>
                        </h1>
                        <div className='space-y-2'>
                            <h2 className='text-3xl text-gray-600 dark:text-gray-300'>
                                Crafting Digital Experiences
                            </h2>
                            <p className='text-lg text-gray-600 dark:text-gray-300'>
                                A passionate Full Stack Developer specializing in creating seamless, 
                                user-centric web applications. I transform ideas into reality through 
                                clean code and innovative solutions.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-4'>
                        <a
                            href='#experience'
                            className='group flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg'
                        >
                            <Info className='w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300' />
                            <span>Know More</span>
                        </a>
                        <a
                            href='#contact'
                            className='group flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg'
                        >
                            <span>Let's Connect</span>
                            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                        </a>
                    </div>

                    <div className='flex space-x-6'>
                        <a
                            href='https://github.com/Pravesh-MW'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110'
                        >
                            <Github className='w-6 h-6' />
                        </a>
                        <a
                            href='https://linkedin.com/in/pravesh8465'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110'
                        >
                            <Linkedin className='w-6 h-6' />
                        </a>
                        <a
                            href='https://twitter.com/Pravesh_MW'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110'
                        >
                            <Twitter className='w-6 h-6' />
                        </a>
                    </div>
                </div>

                {/* Right Column - Image/Illustration */}
                <div className='hidden md:block'>
                    <div className='relative'>
                        <div className='absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-2xl transform rotate-6'></div>
                        <div className='relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl'>
                            <Code2 className='w-32 h-32 text-blue-600 dark:text-blue-400 mx-auto animate-float' />
                            <div className='mt-6 space-y-4'>
                                <div className='flex items-center space-x-2'>
                                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                    <span className='text-gray-600 dark:text-gray-300'>React & Node.js Expert</span>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                    <span className='text-gray-600 dark:text-gray-300'>Full Stack Developer</span>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                    <span className='text-gray-600 dark:text-gray-300'>Problem Solver</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
