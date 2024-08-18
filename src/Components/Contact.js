import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className="flex flex-col m-8 h-screen space-y-4 justify-start items-center bg-gradient-to-r from-slate-300 to-slate-500">
            <div className='flex flex-col justify-center items-center h-1/3 space-y-4'>
                <p className='text-4xl text-black font-bold'>Contact</p>
                <p className='text-ls text-gray-800'>Build a strong connection to change the world</p>
            </div>
            <div className='flex flex-row items-center justify-center space-x-8 flex-wrap'>
                <form className='flex flex-col space-y-2 justify-center items-center'>
                    <input type="text" className="bg-gray-300 rounded-lg border-2 border-gray-400 p-2 w-full" placeholder="Name"/>
                    <input type="email" className="bg-gray-300 rounded-lg border-2 border-gray-400 p-2 w-full" placeholder="Email"/>
                    <input type="text" className="bg-gray-300 rounded-lg border-2 border-gray-400 p-2 w-full" placeholder="Phone"/>
                    <textarea className="bg-gray-300 rounded-lg border-2 border-gray-400 p-2 w-full" placeholder="Message"/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
