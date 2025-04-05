import React, { useState, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div id='contact' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800'>
            <div className='max-w-4xl w-full space-y-8'>
                <div className='text-center space-y-4'>
                    <h1 className='text-4xl font-bold text-black dark:text-white'>
                        Get in <span className='text-blue-600 dark:text-blue-400'>Touch</span>
                    </h1>
                    <p className='text-lg text-gray-600 dark:text-gray-300'>
                        Feel free to reach out to me for any opportunities or just to say hello!
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Contact Information */}
                    <div className='space-y-6'>
                        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex items-center space-x-3 mb-4'>
                                <Mail className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                                <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>Email</h2>
                            </div>
                            <a href='mailto:pravesh8465@gmail.com' className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'>
                                praveshkbind.work@gmail.com
                            </a>
                        </div>

                        {/* <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex items-center space-x-3 mb-4'>
                                <Phone className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                                <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>Phone</h2>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300'>+1 (123) 456-7890</p>
                        </div> */}

                        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex items-center space-x-3 mb-4'>
                                <MapPin className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                                <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>Location</h2>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300'>Gurgaon, India</p>
                        </div>

                        <div className='flex space-x-4'>
                            <a 
                                href='https://github.com/Pravesh-MW' 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                            >
                                <Github className='w-6 h-6' />
                            </a>
                            <a 
                                href='https://linkedin.com/in/pravesh8465' 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                            >
                                <Linkedin className='w-6 h-6' />
                            </a>
                            <a 
                                href='https://twitter.com/Pravesh_MW' 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                            >
                                <Twitter className='w-6 h-6' />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows='4'
                                    className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                                ></textarea>
            </div>

                            <button
                                type='submit'
                                className='w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200'
                            >
                                <Send className='w-5 h-5' />
                                <span>Send Message</span>
                            </button>
                </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
