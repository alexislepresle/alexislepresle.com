import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const APropos = () => {
    return (
        <section id="about" className="bg-cover">
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 flex items-center flex-wrap">
                        <div className="md:flex-1 max-w-xl m-auto">
                            <StaticImage
                                src="../../images/about.png"
                                width={1000}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A propos Alexis Lepresle"
                            />
                        </div>
                        <div className="lg:flex-1 mt-2 md:ml-16">
                            <div className="flex lg:items-left lg:justify-left justify-center">
                                <p className="m-auto lg:ml-0 mb-4 btn-title block px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-black">À propos</p>
                            </div>
                            <h2 className="text-black lg:text-left text-center mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl pb-12">
                                Qui suis-je ?
                            </h2>
                            <p className="mt-4 text-lg text-gray-700">
                                J'ai commencé ma carrière de <b>développeur web freelance </b>en parallèle de mes études en 2017.
                                Au fil des années, je me suis <b>spécialisé dans le développement Web </b> et le langage <b>JavaScript</b>. Puis, plus particulièrement
                                dans les librairies <b>React JS</b> et <b>Node JS</b>.
                            </p>
                            <p className="mt-4 text-lg text-gray-700">
                                En <b>2019</b>, je me suis intéressé à <b>l'e-commerce</b> et j'ai découvert la plateforme <b>Shopify et son écosystème</b>.
                                Puis, j'ai commencé à me <b>spécialisé dans Shopify</b> en proposant de nouveaux services à mes clients.
                            </p>
                            <p className="mt-4 text-lg text-gray-700">
                                Aujourd'hui, <b> j'accompagne mes clients à plein temps dans leurs projets e-commerce</b>.
                            </p>
                            <p className="mt-4 text-lg text-gray-700 flex flex-wrap ">
                                De plus, j'ai la certification
                                <a className="underline text-indigo-600 inline-block pl-1" href="https://experts.shopify.com/alexis-lepresle" rel="noreferrer" target="_blank">
                                    <span className="text-indigo-600">d'Expert Shopify
                                        <span className="inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="20" height="20" viewBox="0 0 66 66" fill="none">
                                                <path d="M63.25 33L56.54 25.3275L57.475 15.18L47.5475 12.925L42.35 4.125L33 8.14L23.65 4.125L18.4525 12.8975L8.525 15.125L9.46 25.3L2.75 33L9.46 40.6725L8.525 50.8475L18.4525 53.1025L23.65 61.875L33 57.8325L42.35 61.8475L47.5475 53.075L57.475 50.82L56.54 40.6725L63.25 33ZM25.795 44.0275L19.25 37.4275C18.9951 37.1731 18.7928 36.8709 18.6548 36.5382C18.5168 36.2055 18.4458 35.8489 18.4458 35.4887C18.4458 35.1286 18.5168 34.772 18.6548 34.4393C18.7928 34.1066 18.9951 33.8044 19.25 33.55L19.4425 33.3575C20.515 32.285 22.275 32.285 23.3475 33.3575L27.775 37.8125L41.9375 23.6225C43.01 22.55 44.77 22.55 45.8425 23.6225L46.035 23.815C47.1075 24.8875 47.1075 26.62 46.035 27.6925L29.755 44.0275C28.6275 45.1 26.895 45.1 25.795 44.0275Z" fill="#4F46E5" />
                                            </svg>
                                        </span>

                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default APropos;