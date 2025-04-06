import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

    const resumeData = {
        pdfUrl: '/assets/resume.pdf',
        driveUrl: 'https://drive.google.com/file/d/14rIRm_8NOd_Ejw9OyA8WIWThZFK_GTHW/view?usp=sharing',
        directDownloadUrl: 'https://drive.google.com/uc?export=download&id=14rIRm_8NOd_Ejw9OyA8WIWThZFK_GTHW'
    };

    return (
        <div id='resume' className='min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800'>
            <div className='max-w-4xl w-full space-y-8'>
                <div className='text-center space-y-4'>
                    <h1 className='text-4xl font-bold text-black dark:text-white'>
                        My <span className='text-blue-600 dark:text-blue-400'>Resume</span>
                    </h1>
                    <p className='text-lg text-gray-600 dark:text-gray-300'>
                        Download my resume to learn more about my professional journey and skills.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Education Section */}
                    <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-4'>Education</h2>
                        <div className='space-y-4'>
                            <div className='border-l-4 border-blue-600 dark:border-blue-400 pl-4'>
                                <h3 className='text-lg font-medium text-gray-700 dark:text-gray-200'>NIT Jalandhar</h3>
                                <p className='text-gray-600 dark:text-gray-300'>B.tech IT</p>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>2020 - 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-4'>Skills</h2>
                        <div className='space-y-2'>
                            <div className='flex flex-wrap gap-2'>
                                <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'>React</span>
                                <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'>Node.js</span>
                                <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'>JavaScript</span>
                                <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'>HTML/CSS</span>
                                <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'>MongoDB</span>
                                <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'>Git</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center space-x-4'>
                    <a
                        href='https://drive.google.com/uc?export=download&id=14rIRm_8NOd_Ejw9OyA8WIWThZFK_GTHW'
                        download="Pravesh_Kumar_Bind_Resume.pdf"
                        className='group flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg'
                    >
                        <Download className='w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300' />
                        <span>Download Resume</span>
                    </a>
                    <button
                        onClick={() => setIsPreviewOpen(true)}
                        className='group flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg'
                    >
                        <FileText className='w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300' />
                        <span>Preview Resume</span>
                    </button>
                </div>
            </div>

            {/* Preview Option */}
            {isPreviewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 max-w-4xl w-full max-h-[90vh] overflow-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Resume Preview</h2>
                            <button
                                onClick={() => setIsPreviewOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>
                        <iframe
                            src={`https://drive.google.com/file/d/14rIRm_8NOd_Ejw9OyA8WIWThZFK_GTHW/preview`}
                            className="w-full h-[80vh]"
                            title="Resume Preview"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Resume; 
