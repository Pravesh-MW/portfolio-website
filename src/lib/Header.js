import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-row h-14 sticky top-0'>
            <div className='flex justify-start items-center float-left w-1/2 '>
                <p className='text-black text-3xl font-bold ml-4'>Pravesh Kumar Bind</p>
            </div>
            <div className='flex flex-row space-x-8 justify-end items-center float-right w-1/2 mr-4'>
                <a href='#' className='text-black no-underline  hover:bg-black hover:text-white px-4 py-2'>About</a>
                <a href='#' className='text-black no-underline  hover:bg-black hover:text-white px-4 py-2'>Project</a>
                <a href='#' className='text-black no-underline  hover:bg-black hover:text-white px-4 py-2'>TechStack</a>
                <a href='#' className='text-black no-underline  hover:bg-black hover:text-white px-4 py-2'>Contact</a>
            </div>
        </div>
    );
}

export default Header;
