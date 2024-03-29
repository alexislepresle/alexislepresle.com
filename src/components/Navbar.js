import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../images/logo-full.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar absolute top-0 py-5 z-40 w-full mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="w-fumm relative flex items-center justify-between sm:h-10 max-w-5xl m-auto" aria-label="Global">
                <div className="w-full xl:w-auto flex justify-between">
                    <div className="flex items-center justify-between w-full xl:w-auto">
                        <a href="/">
                            <img className="logo" src={logo} alt="Alexis Lepresle" />
                        </a>
                        <div className={open ? 'hidden' : 'block' + (" -mr-2 flex items-center xl:hidden")}>
                            <button onClick={() => setOpen(!open)} type="button" className="rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tabs hidden xl:flex md:space-x-4">
                    {
                        typeof window !== `undefined` && window.location.pathname === "/" ?
                            <>
                                <AnchorLink href='#expertises'>Mon Expertise</AnchorLink>
                                <AnchorLink href='#projects'>Mes Projets</AnchorLink>
                                <AnchorLink href='#about'>À Propos</AnchorLink>
                                <AnchorLink href='#testimonials'>Témoignages</AnchorLink>
                                <AnchorLink href='#blog'>Blog</AnchorLink>
                            </>
                            :
                            <>
                                <a href="/#expertises" className="font-medium text-gray-500 hover:text-gray-900">Mes Expertises</a>
                                <a href="/#projects" className="font-medium text-gray-500 hover:text-gray-900">Mes Projets</a>
                                <a href="/#about" className="font-medium text-gray-500 hover:text-gray-900">À Propos</a>
                                <a href="/#testimonials" className="font-medium text-gray-500 hover:text-gray-900">Témoignages</a>
                                <a href="/#blog" className="font-medium text-gray-500 hover:text-gray-900">Blog</a>
                            </>
                    }

                </div>
                <div className="hidden xl:block">
                    <a href="/contact" className="btn btn-gradient">Me Contacter ➝</a>
                </div>
            </nav>
            <div className={(open ? 'active side-nav ' : 'side-nav ') + " block lg:hidden bg-indigo-gradient text-white"}>
                <div className="flex items-center justify-between px-10 pt-12  md:pt-24">
                    <div className="text-md leading-none">
                        <p>
                            Alexis
                        </p>
                        <p>
                            Lepresle
                        </p>
                    </div>

                    <div className={open ? 'block lg:hidden' : 'hidden' + (" -mr-2 flex items-center lg:hidden bg-white hover:bg-gray-200")}>
                        <button onClick={() => setOpen(!open)} type="button" className="lg:hidden text-indigo-600 rounded-lg p-2 inline-flex items-center justify-center bg-white ">
                            <span className="sr-only">Close main menu</span>
                            <svg className="h-6 w-6 hover:w-10  hover:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="px-10 pt-10 flex flex-col  md:text-4xl text-3xl text-gray-500 hover:text-gray-900" onClick={() => setOpen(!open)} >
                    <a href="/#expertises" className="my-6">Expertise</a>
                    <a href="/#projects" className="my-6">Mes Projets</a>
                    <a href="/#about" className="my-6">À Propos</a>
                    <a href="/#testimonials" className="my-6">Témoignages</a>
                    <a href="/#blog" className="my-6">Blog</a>
                    <a href="/contact" className="my-6 flex items-center">
                        Me Contacter
                        <svg className="mx-2" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7027 2C15.7027 1.33578 15.1642 0.797326 14.5 0.797325H3.67592C3.0117 0.797325 2.47324 1.33578 2.47324 2C2.47324 2.66422 3.0117 3.20268 3.67592 3.20268H13.2973V12.8241C13.2973 13.4883 13.8358 14.0268 14.5 14.0268C15.1642 14.0268 15.7027 13.4883 15.7027 12.8241V2ZM1.85042 16.3504L15.3504 2.85042L13.6496 1.14958L0.14958 14.6496L1.85042 16.3504Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;