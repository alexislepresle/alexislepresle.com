import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="relative pt-6  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="/#">
                                <span className="sr-only">Workflow</span>
                                <StaticImage
                                    src="../images/logo.png"
                                    width={45}
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt="A Gatsby astronaut"
                                    className="h-8 w-auto sm:h-10"
                                />
                            </a>
                            <div className={open ? 'hidden' : 'block' + (" -mr-2 flex items-center md:hidden")}>
                                <button onClick={() => setOpen(!open)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            <div className={open ? 'block' : 'hidden' + (" -mr-2 flex items-center md:hidden")}>
                                <button onClick={() => setOpen(!open)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        <a href="/#" className="font-medium text-gray-500 hover:text-gray-900">Mes Expertises</a>
                        <a href="/#" className="font-medium text-gray-500 hover:text-gray-900">Mes Projets</a>
                        <a href="/#" className="font-medium text-gray-500 hover:text-gray-900">À Propos</a>
                        <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500">Contact</a>
                    </div>
                </nav>
                <div className={open ? 'block' : 'hidden' + " hidden md:hidden md:ml-10 md:pr-4 md:space-x-8"}>
                    <a href="/#" className="font-medium text-gray-500 hover:text-gray-900">Mes Expertises</a>
                    <a href="/#" className="font-medium text-gray-500 hover:text-gray-900">Mes Projets</a>
                    <a href="/#" className="font-medium text-gray-500 hover:text-gray-900">À Propos</a>
                    <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500">Contact</a>
                </div>
            </div>
        </div >
    );
};

export default Header;