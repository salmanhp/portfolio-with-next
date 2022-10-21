import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';





export const Navbar = ({ theme, setTheme }) => {
    const dm = theme === 'light' ? true : false;
    const [isDarkMode, setDarkMode] = useState(dm); //false
    const [open, setOpen] = useState(false);

    const menu = ["Home", "About Me", "Projects", "Skills", "Contact Me"];

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        setTheme(theme === 'light' ? 'dark' : 'light');

    }

    return (
        <div className='flex justify-between items-center sticky top-0 mt-4 px-3 md:px-5 z-10 bg-white/25 dark:bg-[#121212]/25 backdrop-blur-xl border border-white/20 dark:border-[#121212]/20'>
            <Link spy={true} to="Home" offset={-200} smooth={true}>
                <img src="images/salman-logo.png" className='object-contain cursor-pointer' alt="Salman" width="100" height="100" />
            </Link>

            <nav className="hidden md:hidden lg:flex justify-center items-center space-x-10">
                <ul className='flex justify-center items-center space-x-10 text-base'>
                    {menu.map((item, index) => (
                        <Link spy={true} to={item} smooth={true} offset={-145} className="cursor-pointer" key={index}>
                            <li className='hover:text-white md:hover:text-white lg:hover:text-[#129AB3] hover:bg-[#129AB3] md:hover:bg-[#129AB3] lg:hover:bg-transparent font-semibold block'>{item}</li>
                        </Link>
                    ))}
                </ul>

                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={40}
                    moonColor="black"
                    sunColor="yellow"
                />
            </nav>

            <div className='block md:block lg:hidden'>
                <FiMenu className='lg:hidden block cursor-pointer' size={30} onClick={() => setOpen(!open)} />

                <motion.nav
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    className={`h-100v w-4/5 md:w-3/6 fixed top-0 right-0 p-5 bg-white dark:bg-[#121212] shadow-lg shadow-blue-400 ${open ? 'block' : 'hidden'}`}
                >
                    <div className='flex justify-between items-center mb-10'>
                        <DarkModeSwitch
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={40}
                            moonColor="black"
                            sunColor="yellow"
                        />
                        <FiX className='lg:hidden block cursor-pointer' size={30} onClick={() => setOpen(!open)} />
                    </div>

                    <ul className='flex flex-col space-y-2'>
                        {menu.map((item, index) => (
                            <Link spy={true} to={item} smooth={true} offset={-145} className="cursor-pointer" onClick={() => setOpen(!open)} key={index}>
                                <li className='hover:text-white md:hover:text-white lg:hover:text-[#129AB3] hover:bg-[#129AB3] md:hover:bg-[#129AB3] lg:hover:bg-transparent px-2 font-semibold block'>{item}</li>
                            </Link>
                        ))}
                    </ul>

                </motion.nav>

            </div>

        </div>
    );
}

