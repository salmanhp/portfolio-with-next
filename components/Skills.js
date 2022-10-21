import Tippy from '@tippyjs/react';
import Image from 'next/image';
import 'tippy.js/dist/tippy.css'; // optional
import { urlFor } from '../lib/client';


export const Skills = ({ skills, experiences }) => {

    return (
        <div className="skills mx-8 mt-16" id='Skills'>
            <h1 className="text-center mb-10 font-semibold text-4xl md:text-5xl lg:text-6xl">Skills & Experiences</h1>
            <div className="main-content  flex flex-col md:flex-col lg:flex-row justify-center mt-20 space-x-0 md:space-x-0 lg:space-x-0">

                <div className='skill-left flex-2'>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-1 md:gap-x-0 lg:gap-x-7 gap-y-8 px-0 md:px-20 lg:px-0">
                        {skills?.map((item, index) => (
                            <div className={`flex flex-col justify-center items-center `} key={index}>
                                <div className={`flex justify-center items-center rounded-full p-5`} style={{ backgroundColor: `${item.bgcolor ? item.bgcolor : 'rgb(219 234 254)'}` }}>
                                    <Image className="" src={urlFor(item.imgUrl).url()} alt={item.skillname} height="50" width="50" />
                                </div>
                                <p className="text-gray-400">{item.skillname}</p>
                            </div>

                        ))}
                    </div>
                </div>

                <div className='experience-right flex-2'>
                    <div className="flex flex-col items-center mt-10 md:mt-10 lg:mt-0 px-0 md:px-0 lg:px-0 ">
                        {experiences?.map((yOfExp, index) => (

                            <div className="yearOfExp flex space-x-3 md:lg:space-x-8 lg:space-x-8  mb-10" key={index}>
                                <div>
                                    <p className="text-lg font-semibold text-blue-600">{yOfExp.year}</p>
                                </div>

                                <div className="space-y-5">
                                    {yOfExp.works.map((work, ind) => (
                                        <Tippy content={work.desc} placement="right" key={ind}>
                                            <div className="space-y-1">
                                                <p className="text-lg font-semibold">{work.name}</p>
                                                <p className="text-xs text-gray-400">{work.company}</p>

                                            </div>
                                        </Tippy>

                                    ))}
                                </div>


                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    )
}


