import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navitem = () => {
    return (
        <>
            <a href='#project' className='text-black no-underline hover:bg-black hover:text-white px-4 py-2 transition-all duration-300 rounded-md'>Projects</a>
            <a href='#experience' className='text-black no-underline hover:bg-black hover:text-white px-4 py-2 transition-all duration-300 rounded-md'>Experience</a>
            <a href='#techStack' className='text-black no-underline hover:bg-black hover:text-white px-4 py-2 transition-all duration-300 rounded-md'>Skills</a>
            <a href='#resume' className='text-black no-underline hover:bg-black hover:text-white px-4 py-2 transition-all duration-300 rounded-md'>Resume</a>
            <a href='#contact' className='text-black no-underline hover:bg-black hover:text-white px-4 py-2 transition-all duration-300 rounded-md'>Contact</a>
        </>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNearTop, setIsNearTop] = useState(false);
    const headerRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const resetTimeout = () => {
        // Clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        // Set new timeout to hide header after 3 seconds of inactivity
        timeoutRef.current = setTimeout(() => {
            if (window.scrollY > 100) { // Only hide if not at the top of the page
                setIsVisible(false);
            }
        }, 3000);
    };

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;
            
            // Show header when scrolling up or when near the top
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsVisible(true);
                resetTimeout();
            } else {
                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e) => {
            // Show header when mouse is near the top of the page
            if (e.clientY < 100) {
                setIsVisible(true);
                setIsNearTop(true);
                resetTimeout();
            } else {
                setIsNearTop(false);
            }
        };

        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        // Initial setup
        resetTimeout();

        window.addEventListener('scroll', controlHeader);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', controlHeader);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleClickOutside);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [lastScrollY]);

    return (
        <div 
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                (isVisible || isNearTop) ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className='flex flex-row h-16 flex-wrap bg-white/80 backdrop-blur-md'>
                <div className='flex justify-start items-center float-left w-1/2'>
                    <p className='text-black text-2xl font-bold ml-4'>
                        <a href='#home' className='hidden lg:flex text-black no-underline hover:text-blue-600 transition-colors duration-300'>Pravesh Kumar Bind</a>
                        <a href='#home' className='hidden md:flex lg:hidden text-black no-underline hover:text-blue-600 transition-colors duration-300'>Pravesh Bind</a>
                        <a href='#home' className='md:hidden text-black no-underline hover:text-blue-600 transition-colors duration-300'>Pravesh</a>
                    </p>
                </div>
                <div className='hidden md:flex flex-row justify-end items-center float-right w-1/2 pr-4'>
                    <Navitem />
                </div>
                <div className='md:hidden flex flex-col justify-center items-end float-right w-1/2 pr-4'>
                    <button onClick={handleClick} className='flex justify-center items-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300'>
                        {isOpen ? <X className='text-xl text-black' /> : <Menu className='text-xl text-black' />}
                    </button>
                    {isOpen &&
                        <div className='absolute top-16 right-0 flex flex-col space-y-2 items-center bg-white/80 backdrop-blur-md shadow-lg px-4 py-2 rounded-md'>
                            <Navitem />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
