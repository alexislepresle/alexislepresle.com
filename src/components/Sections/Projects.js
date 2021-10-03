import React from 'react';

const Projects = () => {
    return (
        <section className="pb-44 pt-24 max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-black sm:text-5xl pb-20">
                Mes derniers projets
            </p>
            <div className="flex overflow-hidden -my-8">
                <ul className="flex items-center w-full py-8">
                    <li className="px-3 md:px-4 flex-none ">
                        <figure className="shadow-lg rounded-xl flex-none w-72 h-96 md:w-xl bg-indigo-600">
                            <figcaption className="flex items-center justify-center space-x-4 p-6 h-96 md:px-10 md:py-6 bg-gradient-to-br rounded-xl leading-6 font-semibold text-white">
                                Le Petit Biscuit Français
                            </figcaption>
                        </figure>
                    </li>
                    <li className="px-3 md:px-4 flex-none">
                        <figure className="shadow-lg rounded-xl flex-none w-72 h-96 md:w-xl bg-indigo-600">
                            <figcaption className="flex items-center justify-center space-x-4 p-6 h-96 md:px-10 md:py-6 bg-gradient-to-br rounded-xl leading-6 font-semibold text-white">
                                Blackpines
                            </figcaption>
                        </figure>
                    </li>
                    <li className="px-3 md:px-4 flex-none">
                        <figure className="shadow-lg rounded-xl flex-none w-72 h-96 md:w-xl bg-indigo-600">
                            <figcaption className="flex items-center justify-center space-x-4 h-96 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-xl leading-6 font-semibold text-white">
                                Escargots Léandre
                            </figcaption>
                        </figure>
                    </li>
                    <li className="px-3 md:px-4 flex-none">
                        <figure className="shadow-lg rounded-xl flex-none w-72 h-96 md:w-xl bg-indigo-600">
                            <figcaption className="flex items-center justify-center space-x-4 h-96 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-xl leading-6 font-semibold text-white">
                                Freedge Beauty
                            </figcaption>
                        </figure>
                    </li>
                    <li className="px-3 md:px-4 flex-none">
                        <figure className="shadow-lg rounded-xl flex-none w-72 h-96 md:w-xl">
                            <figcaption className=" flex items-center justify-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-xl leading-6 font-semibold text-white">
                                TrainHard Esport
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;