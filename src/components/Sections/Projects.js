import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import logoFB from "../../images/logo-FB.png"
import logoBloon from "../../images/logo-bloon.png"
import logoLPBF from "../../images/logo-LPBF.png"
import logoBlackpines from "../../images/logo-blackpines.png"
import logoErevan from "../../images/logo-erevan.png"
import logoPoujol from "../../images/logo-poujol.png"
import logoEL from "../../images/logo-EL.png"
import rocket from "../../images/rocket.png"

const data = [
    {
        client: "Freedge Beauty",
        link: "https://www.freedgebeauty.com/",
        class: "bg-freedge-beauty",
        logo: logoFB,
        img: "../../images/logo-FB.png"
    },
    {
        client: "Le Petit Biscuit Français",
        link: "https://lepetitbiscuitfrancais.fr/",
        class: "bg-le-petit-biscuit-francais",
        logo: logoLPBF
    },
    {
        client: "Bloon Paris",
        link: "https://bloon-paris.fr/",
        class: "bg-bloon",
        logo: logoBloon
    },
    {
        client: "Blackpines",
        link: "https://blackpines.fr/",
        class: "bg-blackpines",
        logo: logoBlackpines
    },
    {
        client: "Escargots Léandre",
        link: "https://escargots-leandre.com/",
        class: "bg-escargot-leandre",
        logo: logoEL
    },
    {
        client: "erEvan",
        link: "https://www.erevanofficiel.com/",
        class: "bg-erevan",
        logo: logoErevan
    },
    {
        client: "Le Domaine de Poujol",
        link: "https://domainedupoujol.com/",
        class: "bg-domaine-poujol",
        logo: logoPoujol
    }
]

const Projects = () => {
    return (
        <section id="projects" className="section">

            <div className="py-20 md:py-24 max-w-4xl m-auto px-4 sm:px-6 lg:px-8 relative z-50">
                <img className="floating-object left" src={rocket} role="presentation" />
                <div className="flex items-center justify-center appear appear-1">
                    <p className="btn-title m-auto block px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-black">Projets</p>
                </div>
                <h2 className="text-center mt-4 text-4xl leading-8 font-extrabold tracking-tight text-black sm:text-5xl pb-12 max-w-xl m-auto appear appear-2">
                    Ils travaillent avec moi
                </h2>
                <div className="appear appear-3">
                    <Splide
                        options={{
                            type: 'loop',
                            gap: 30,
                            perPage: 3,
                            perMove: 1,
                            autoplay: true,
                            pauseOnHover: true,
                            resetProgress: false,
                            arrows: false,
                            height: '27rem',
                            breakpoints: {

                                900: {
                                    perPage: 2
                                },
                                600: {
                                    perPage: 1
                                },
                            }
                        }}
                    >
                        {
                            data.map(client => {
                                return (
                                    <SplideSlide key={client.client}>
                                        <div className="h-96 ">
                                            <figure className={client.class + " bg-cover bg-center shadow-lg rounded-xl flex-none md:w-xl bg-indigo-600"}>
                                                <figcaption className="flex items-center flex-col justify-center space-x-4 p-6 h-96 md:px-10 md:py-6 bg-gradient-to-br rounded-xl leading-6 font-semibold text-white">
                                                    {
                                                        client.logo ? <img decoding="async" src={client.logo} alt={client.client} loading="lazy" width={200} height={100} /> : <></>
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
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                    </Splide>
                </div>
            </div>
        </section>
    );
};

export default Projects;