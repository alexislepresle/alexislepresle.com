import React from 'react';

const data = [
    {
        client: "Freedge Beauty",
        link: "https://www.freedgebeauty.com/",
    },
    {
        client: "Le Petit Biscuit Français",
        link: "https://lepetitbiscuitfrancais.fr/",
    },
    {
        client: "Bloon Paris",
        link: "https://bloon-paris.fr/",
    },
    {
        client: "Blackpines",
        link: "https://blackpines.fr/",
    },
    {
        client: "Escargots Léandre",
        link: "https://escargots-leandre.com/",
    },
    {
        client: "erEvan",
        link: "https://www.erevanofficiel.com/",
    },
    {
        client: "Le Domaine de Poujol",
        link: "https://domainedupoujol.com/",
    },
    {
        client: "TrainHard Esport",
        link: "../../images/IMG_8921.jpg",
    }
]

const Projects = () => {
    return (
        <section className="pb-44 pt-24 max-w-7xl m-auto px-4 sm:px-6 lg:px-8" id="projects">
            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-black sm:text-5xl pb-20">
                Ils travaillent avec moi
            </p>
            <div className="flex -my-8">
                <ul className="flex items-center w-full py-8 overflow-scroll">
                    {
                        data.map(client => {
                            return (
                                <li key={client.client} className="px-3 md:px-4 flex-none ">
                                    <figure className="shadow-lg rounded-xl flex-none w-72 h-96 md:w-xl bg-indigo-600">
                                        <figcaption className="flex items-center flex-col justify-center space-x-4 p-6 h-96 md:px-10 md:py-6 bg-gradient-to-br rounded-xl leading-6 font-semibold text-white">
                                            <p>
                                                {client.client}
                                            </p>
                                            {
                                                client.link ?
                                                    <a rel="noreferrer" className="mt-14 inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-white hover:text-black" target="_blank" href={client.link}> Voir le Projet</a>
                                                    : <></>
                                            }
                                        </figcaption>
                                    </figure>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Projects;