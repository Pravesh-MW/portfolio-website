import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id='contact' className='min-h-screen bg-gradient-to-r from-slate-100 to-slate-300 py-16 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>Get in Touch</h2>
                    <p className='text-xl text-gray-600'>Let's work together!</p>
                </div>

                <div className='grid md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex items-center space-x-4'>
                                <div className='bg-blue-100 p-3 rounded-full'>
                                    <Mail className='text-blue-600' size={24} />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-gray-800'>Email</h3>
                                    <p className='text-gray-600'>praveshkbind.work@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex items-center space-x-4'>
                                <div className='bg-green-100 p-3 rounded-full'>
                                    <Phone className='text-green-600' size={24} />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-gray-800'>Phone</h3>
                                    <p className='text-gray-600'>+91 9001377465</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex items-center space-x-4'>
                                <div className='bg-purple-100 p-3 rounded-full'>
                                    <MapPin className='text-purple-600' size={24} />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-gray-800'>Location</h3>
                                    <p className='text-gray-600'>Gurgaon, Haryana, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white p-8 rounded-xl shadow-lg'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    required
                                />
            </div>

                            <button
                                type='submit'
                                className='w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300'
                            >
                                <Send size={20} />
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
