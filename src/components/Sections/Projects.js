import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bgFreedge from "../../images/bg-FB.png"
import logoFB from "../../images/logo-FB.png"
import bgBloon from "../../images/bg-bloon.jpeg"
import logoBloon from "../../images/logo-bloon.png"
import bgLPBF from "../../images/bg-lepetitbiscuitfrancais.jpeg"
import logoLPBF from "../../images/logo-LPBF.png"
import bgBlackpines from "../../images/bg-blackpines.jpeg"
import logoBlackpines from "../../images/logo-blackpines.png"
import bgErevan from "../../images/bg-erevan.jpeg"
import logoErevan from "../../images/logo-erevan.png"
import bgPoujol from "../../images/bg-poujol.jpeg"
import logoDJ from "../../images/logo-DJ.png"
import bgEL from "../../images/bg-escargot-leandre.jpg"
import logoEL from "../../images/logo-EL.png"

const data = [
    {
        client: "Freedge Beauty",
        link: "https://www.freedgebeauty.com/",
        bg: bgFreedge,
        logo: logoFB
    },
    {
        client: "Le Petit Biscuit Français",
        link: "https://lepetitbiscuitfrancais.fr/",
        bg: bgLPBF,
        logo: logoLPBF
    },
    {
        client: "Bloon Paris",
        link: "https://bloon-paris.fr/",
        bg: bgBloon,
        logo: logoBloon
    },
    {
        client: "Blackpines",
        link: "https://blackpines.fr/",
        bg: bgBlackpines,
        logo: logoBlackpines
    },
    {
        client: "Escargots Léandre",
        link: "https://escargots-leandre.com/",
        bg: bgEL,
        logo: logoEL
    },
    {
        client: "erEvan",
        link: "https://www.erevanofficiel.com/",
        bg: bgErevan,
        logo: logoErevan
    },
    {
        client: "Le Domaine de Poujol",
        link: "https://domainedupoujol.com/",
        bg: bgPoujol,
        logo: logoDJ
    }
]

const Projects = () => {
    return (
        <section id="projects">
            <div className="py-20 md:py-24 max-w-5xl m-auto px-4 sm:px-6 lg:px-8 relative z-50">
                <div className="flex items-center justify-center">
                    <p className="btn-title m-auto block px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-black">Projets</p>
                </div>
                <h2 className="text-center mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black sm:text-5xl pb-12 max-w-xl m-auto">
                    Ils travaillent avec moi
                </h2>
                <div >
                    <Carousel
                        className="project-carousel"
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        swipeable={true}
                        emulateTouch={true}
                        centerSlidePercentage={50}
                    >
                        {
                            data.map(client => {
                                return (
                                    <li key={client.client} className="px-3 md:px-4 flex-none m-auto w-72 h-96 ">
                                        <figure className="bg-cover bg-center shadow-lg rounded-xl flex-none md:w-xl bg-indigo-600" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.09) 0%, rgba(0, 0, 0, 0.46) 100%), url(${client.bg})` }}>
                                            <figcaption className="flex items-center flex-col justify-center space-x-4 p-6 h-96 md:px-10 md:py-6 bg-gradient-to-br rounded-xl leading-6 font-semibold text-white">
                                                {
                                                    client.logo ? <img src={client.logo} /> : <></>
                                                }
                                                {
                                                    client.link ?
                                                        <a target="_blank" href={client.link} rel="noreferrer" className="btn-transparent text-white px-5 mb-5 m-auto py-2 border border-transparent text-base font-medium rounded-full flex items-center">
                                                            Voir plus
                                                            <span>
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13.859 10.9425C13.8119 10.9908 13.6341 11.1975 13.4685 11.3675C12.4976 12.4367 9.96468 14.1867 8.63898 14.7208C8.43765 14.8067 7.92864 14.9883 7.65668 15C7.39608 15 7.14767 14.94 6.91061 14.8183C6.61511 14.6483 6.37806 14.3808 6.24817 14.065C6.16455 13.8458 6.03466 13.19 6.03466 13.1783C5.90477 12.4608 5.83333 11.295 5.83333 10.0067C5.83333 8.77917 5.90477 7.66083 6.01112 6.9325C6.02329 6.92083 6.15319 6.10583 6.29525 5.82667C6.55585 5.31667 7.06486 5 7.60959 5H7.65668C8.01144 5.0125 8.7575 5.32917 8.7575 5.34083C10.0118 5.87583 12.4862 7.54 13.4807 8.64583C13.4807 8.64583 13.7608 8.93 13.8825 9.1075C14.0725 9.3625 14.1667 9.67833 14.1667 9.99417C14.1667 10.3467 14.0603 10.675 13.859 10.9425Z" fill="#F7F6F8" />
                                                                </svg>
                                                            </span>
                                                        </a>
                                                        : <></>
                                                }
                                            </figcaption>
                                        </figure>
                                    </li>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Projects;