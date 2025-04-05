import React, { useState } from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';

const Resume = () => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const resumeData = {
        pdfUrl: '/assets/resume.pdf',
        driveUrl: 'https://drive.google.com/file/d/14rIRm_8NOd_Ejw9OyA8WIWThZFK_GTHW/view?usp=sharing',
        directDownloadUrl: 'https://drive.google.com/uc?export=download&id=14rIRm_8NOd_Ejw9OyA8WIWThZFK_GTHW'
    };

    return (
        <div id="resume" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-8 text-center text-black">My Resume</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Preview Option */}
                    <button
                        onClick={() => setIsPreviewOpen(true)}
                        className="flex items-center justify-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                    >
                        <FileText className="w-6 h-6 mr-3 text-blue-600" />
                        <span className="text-lg font-semibold">Preview Resume</span>
                    </button>

                    {/* Direct Download */}
                    <a
                        href={resumeData.directDownloadUrl}
                        download="Pravesh_Kumar_Bind_Resume.pdf"
                        className="flex items-center justify-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300"
                    >
                        <Download className="w-6 h-6 mr-3 text-green-600" />
                        <span className="text-lg font-semibold">Download PDF</span>
                    </a>

                    {/* Google Drive Link */}
                    <a
                        href={resumeData.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300"
                    >
                        <ExternalLink className="w-6 h-6 mr-3 text-red-600" />
                        <span className="text-lg font-semibold">View on Google Drive</span>
                    </a>
                </div>

                {/* PDF Preview Modal */}
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
        </div>
    );
};

export default Resume; 