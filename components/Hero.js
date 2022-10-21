import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiNetlify, SiVercel } from "react-icons/si";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from 'react-scroll';



export const Hero = ({ theme, cv }) => {
    const [open, setOpen] = useState(false);
    const [imgPath, setImgPath] = useState();

    useEffect(() => {
        theme === 'dark' ? setImgPath('hero-dark-entrance') : setImgPath('hero-white-entrance');

        return () => {
            setImgPath('');
        }
    }, [theme]);

    useEffect(() => {
        setTimeout(() => {
            theme === 'dark' ? setImgPath('hero-dark-looping') : setImgPath('hero-white-looping');
        }, 2800);
    }, [imgPath]);


    return (
        <div className='flex flex-col md:flex-row lg:flex-row mt-10 md:mt-12 lg:mt-24 px-3 md:px-5 mx-8' id='Home'>
            <div className='h-left w-full md:w-1/2 lg:w-1/2'>

                <div className='font-bold space-y-3 text-4xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white pl-3 md:pl-0 lg:pl-0'>
                    <p>
                        Hi! I'm <span className='dark:text-yellow-300 text-red-500'>Salman</span><br />
                    </p>
                    <p>
                        I'm a Full Stack Developer.
                    </p>
                </div>

                <div className='space-x-6 md:space-x-6 lg:space-x-6 mt-12 flex items-center justify-center md:justify-start lg:justify-start mx-3 sm:mx-auto'>

                    <div className="download-btn flex space-x-[0.5px] text-white relative">
                        <a href={`${cv.cvURL}?dl=salman.pdf`} className='px-2 py-2 cursor-pointer rounded-tl rounded-bl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bg-blue-600'>Download Resume</a>
                        <button onClick={() => setOpen(!open)} className='px-2 py-2 rounded-tr rounded-br shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bg-blue-600'><AiOutlineDown /></button>

                        <div className={`${open ? 'block' : 'hidden'} absolute top-11 right-0 z-10 shadow-2xl shadow-gray-500 rounded-br rounded-bl bg-white/90 text-black`}>
                            <a href={`${cv.cvURL}`} target="_blank" onClick={() => setOpen(!open)} className='block hover:bg-slate-300 px-4 py-2 cursor-pointer'>View Resume</a>
                            <a href={`${cv.cvURL}?dl=salman.pdf`} onClick={() => setOpen(!open)} className='block hover:bg-slate-300 px-4 py-2 cursor-pointer'>Download Resume</a>
                        </div>

                    </div>

                    <Link spy={true} to="Contact Me" smooth={true} offset={-145} className="cursor-pointer inline-block px-6 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Hire ME
                    </Link>
                </div>

                <div className="mt-14 md:mt-16 lg:mt-28 flex flex-row items-center justify-center md:justify-start lg:justify-start space-x-4 md:space-x-5 lg:space-x-5">

                    <a className="hover:text-[#129AB3]" target="_blank" href="https://www.linkedin.com/in/salman-hossein-peada-734680198/">
                        <BsLinkedin className="cursor-pointer" size={60} />
                    </a>
                    <a className="hover:text-[#129AB3]" target="_blank" href="https://github.com/salmanhp">
                        <BsGithub className="cursor-pointer" size={60} />
                    </a>
                    <a className="hover:text-[#129AB3]" target="_blank" href="https://app.netlify.com/teams/peadasalman1819/overview">
                        <SiNetlify className="cursor-pointer" size={60} />
                    </a>
                    <a className="hover:text-[#129AB3]" target="_blank" href="https://vercel.com/dashboard">
                        <SiVercel className="cursor-pointer" size={60} />
                    </a>
                </div>

            </div>

            <div className='h-right w-full md:w-1/2 lg:w-1/2 justify-center'>
                <div className='flex justify-center items-center mt-9 md:mt-0 lg:mt-0'>
                    <Image src={`/images/${imgPath}.gif`} alt='hero' width="500" height="500" />
                </div>

            </div>

        </div>
    )
}
