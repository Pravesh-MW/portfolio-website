import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navitem = ()=>{
    return(
        <>
        <a href='#project' className='text-black no-underline  hover:bg-black hover:text-white px-4 py-2'>Project</a>
                <a href='#experience' className='text-black no-underline  hover:bg-black hover:text-white px-4 py-2'>Experience</a>
                <a href='#techStack' className='text-black no-underline  hover:bg-black hover:text-white px-4 py-2'>TechStack</a>
                <a href='#contact' className='text-black no-underline  hover:bg-black hover:text-white px-4 py-2'>Contact</a>
        </>
    )
};




const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex flex-row h-14 sticky top-0 flex-wrap z-10 bg-gray-500'>
            <div className='flex justify-start items-start float-left w-1/2 '>
                <p className='text-black text-3xl font-bold ml-4'>
                <a href='#home' className='hidden lg:flex text-black no-underline hover:text-white'>Pravesh Kumar Bind</a>
                <a href='#home' className='hidden md:flex lg:hidden text-black no-underline hover:text-white'>Pravesh Bind</a>
                <a href='#home' className='md:hidden  text-black no-underline hover:text-white'>Pravesh</a>
                </p>
            </div>
            <div className='hidden md:flex flex-row justify-between items-center float-right w-1/2'>
                <Navitem/>
            </div>
            <div className='md:hidden flex flex-col justify-center items-end float-right w-1/2 pr-2'>
                <button onClick={handleClick} className='flex justify-center items-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300'>
                    {isOpen?<X/> : <Menu className='text-2xl text-black'/>}
                </button>
                {isOpen &&
                    <div className='flex flex-wrap justify-center space-y-2 items-center float-right bg-gray-400 px-3 py-2'>
                        <Navitem/>
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;
