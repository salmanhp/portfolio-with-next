import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { urlFor } from '../lib/client';



export const Project = ({ project }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filterProject, setFilterProject] = useState([]);


    useEffect(() => {
        setFilterProject(project);
    }, []);

    const handleProjectFilter = (itm) => {
        setActiveFilter(itm);

        if (itm === 'All') {
            setFilterProject(project);
        } else {
            setFilterProject(project.filter((filtrProject) => filtrProject.category.includes(itm)));
        }
    }


    return (
        <div className="projects mx-8 mt-16" id="Projects">
            <h1 className="text-center font-semibold text-4xl md:text-5xl lg:text-6xl">Projects</h1>
            <div className="projects-content">

                <div className="content-button flex justify-center mt-20">
                    <div className="inline-grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {["All", "Web App", "Mobile App", "Python"].map((itm, ind) => (
                            <button key={ind} onClick={() => handleProjectFilter(itm)} type="button" className={`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg ${activeFilter === itm ? 'focus:bg-blue-800' : ''} focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}>{itm}</button>
                        ))}
                    </div>
                </div>

                <div className="content-project-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">

                    {filterProject?.map((item, index) => (
                        <div className="flex justify-center" key={index}>
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!">
                                    <Image className="rounded-t-lg" src={urlFor(item.imgUrl).url()} alt={item.projectname} width={500} height={300} />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{item.projectname}</h5>

                                    <p className="text-gray-700 text-base mb-4 space-x-[4px] leading-loose">
                                        {item.tags.map((ite, ind) => (
                                            <span className="bg-gray-300 rounded-md" key={ind}>{ite}</span>
                                        ))}
                                    </p>

                                    <div className="flex justify-around">
                                        <Link href={item.deploylink}>
                                            <a target="_blank" className="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live</a>
                                        </Link>

                                        <Link href={item.sourcecode}>
                                            <a target="_blank" className="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Code</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>

            </div>
        </div>
    )
}

