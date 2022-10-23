import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiNetlify, SiVercel } from "react-icons/si";
import { Link } from 'react-scroll';
import Linka from "next/link";



export const Footer = () => {
    const menu = ["Home", "About Me", "Projects", "Skills", "Contact Me"];
    return (
        <div className="footer w-full absolute left-0 flex flex-col items-center mt-16 bg-slate-900">

            <div className="footer-top flex space-x-20 md:space-x-96 lg:space-x-96 mt-5">
                <div className="navbar">
                    <ul className='text-base space-y-2 text-white'>
                        {menu.map((item, index) => (
                            <Link spy={true} to={item} smooth={true} offset={-145} className="cursor-pointer" key={index}>
                                <li className='hover:text-[#129AB3] font-semibold block'>{item}</li>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="social-media flex flex-col justify-center items-center space-y-2 text-white">
                    <Linka href="https://www.linkedin.com/in/salman-hossein-peada-734680198/">
                        <a target="_blank" className="hover:text-[#129AB3]">
                            <BsLinkedin className="cursor-pointer" size={25} />
                        </a>
                    </Linka>

                    <Linka href="https://github.com/salmanhp">
                        <a target="_blank" className="hover:text-[#129AB3]">
                            <BsGithub className="cursor-pointer" size={25} />
                        </a>
                    </Linka>

                    <Linka href="https://app.netlify.com/teams/peadasalman1819/overview">
                        <a target="_blank" className="hover:text-[#129AB3]">
                            <SiNetlify className="cursor-pointer" size={25} />
                        </a>
                    </Linka>

                    <Linka href="https://vercel.com/dashboard">
                        <a target="_blank" className="hover:text-[#129AB3]">
                            <SiVercel className="cursor-pointer" size={25} />
                        </a>
                    </Linka>
                </div>

            </div>

            <div className="footer-bottom py-10 text-white">
                <p>Copyright &#169; 2022 Salman</p>
            </div>
        </div>
    )
}


