import React, { useState, useEffect, useRef, useContext } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNearTop, setIsNearTop] = useState(false);
    const headerRef = useRef(null);
    const timeoutRef = useRef(null);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            }
        }, 3000);
    };

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsVisible(true);
                resetTimeout();
            } else {
                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e) => {
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

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#techstack' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <div 
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                (isVisible || isNearTop) ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className='flex flex-row h-16 items-center justify-between px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
                <div className='flex items-center'>
                    <a href='#home' className='text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>
                        <span className='hidden lg:inline'>Pravesh K Bind</span>
                        <span className='hidden md:inline lg:hidden'>Pravesh Bind</span>
                        <span className='md:hidden'>Pravesh</span>
                    </a>
                </div>

                <div className='hidden md:flex items-center space-x-6'>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 transition-colors duration-300 rounded-md`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? (
                            <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-700" />
                        )}
                    </button>
                </div>

                <div className='md:hidden flex items-center space-x-4'>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? (
                            <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-700" />
                        )}
                    </button>
                    <button 
                        onClick={handleClick}
                        className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300'
                    >
                        {isOpen ? <X className='w-5 h-5 text-gray-700 dark:text-gray-300' /> : <Menu className='w-5 h-5 text-gray-700 dark:text-gray-300' />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
                    <div className='flex flex-col space-y-2 p-4'>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 transition-colors duration-300 rounded-md`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
