import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";

import { urlFor } from '../lib/client';


export const About = ({ about }) => {


    return (
        <div className="about mx-8 mt-16" id="About Me">
            <h1 className="text-center mb-10 font-semibold text-4xl md:text-5xl lg:text-6xl">About ME</h1>

            <div className="about-content">
                <div className="about-top flex flex-col md:flex-row lg:flex-row">
                    <div className="a-left w-full lg:w-2/5 text-center md:text-left">
                        <Image className="bg-gray-400 rounded-xl" src={urlFor(about.image).url()} alt="salman-about" width="350" height="380" />
                    </div>

                    <div className="a-right w-full lg:w-3/5">
                        <div className="a-intro text-justify px-4 mt-8 md:mt-0">
                            <p>
                                {about.namedesc} <b>{about.name}</b><br />
                                {about.description}
                            </p>
                        </div>

                        <div className="a-exp-box mt-10 flex flex-col md:flex-row lg:flex-row text-center justify-around px-5 md:px-3 md:space-x-2 space-y-8 md:space-y-0">
                            <div className="y_exp shadow-2xl shadow-cyan-600 p-1 md:p-3 lg:4 rounded">
                                <p className="font-semibold text-xl">{about.yearsofexperience}</p>
                                <p>Years of Experience</p>
                            </div>

                            <div className="c_project shadow-2xl shadow-cyan-600 p-1 md:p-3 lg:p-4 rounded">
                                <p className="font-semibold text-xl">{about.completedprojects}</p>
                                <p>Completed Projects</p>
                            </div>

                            <div className="c_work shadow-2xl shadow-cyan-600 p-1 md:p-3 lg:p-4 rounded">
                                <p className="font-semibold text-xl">{about.companiesworked}</p>
                                <p>Companies Worked</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="about-down mt-16 md:mt-6 lg:mt-6">
                    <h1 className="text-center text-4xl">Education</h1>

                    <div className="flex flex-col relative max-w-xl mx-auto mt-10 md:mt-8 lg:mt-8">

                        <div className="flex flex-col items-start">
                            <div>
                                <p className="text-xl font-medium">B.Tech CSE</p>
                                <p className="text-gray-500">Jaipur - UEM University</p>
                                <p className="text-gray-400 mt-2 flex items-center"><GoCalendar className="mr-2" /> 2019 - Present</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end mt-10">
                            <div>
                                <p className="text-xl font-medium">Secondary Education</p>
                                <p className="text-gray-500">West Bengal - Institute</p>
                                <p className="text-gray-400 mt-2 flex items-center"><GoCalendar className="mr-2" /> 2016 - 2017</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start mt-12">
                            <div>
                                <p className="text-xl font-medium">Higher Secondary</p>
                                <p className="text-gray-500">West Bengal - Institute</p>
                                <p className="text-gray-400 mt-2 flex items-center"><GoCalendar className="mr-2" /> 2017 - 2019</p>
                            </div>
                        </div>



                        <div className="about_down_border w-[2px] h-[273px] absolute top-0 left-1/2 bg-blue-300"></div>
                        <div className="absolute left-[273px] -top-4">
                            <BsDot className="relative top-0 text-blue-600 z-10" size={32} />
                            <BsDot className="relative top-28 text-blue-600 z-10" size={32} />
                            <BsDot className="relative top-52 text-blue-600 z-10" size={32} />
                        </div>



                    </div>

                </div>

            </div>

        </div>
    )
}



