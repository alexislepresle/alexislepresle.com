import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import hand from "../../images/hand.png"

const APropos = () => {
    return (
        <section id="about" className="bg-cover section">
            <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative">
                <img className="floating-object right hand" src={hand} role="presentation" />
                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 flex items-center flex-wrap">
                        <div className="md:flex-1 max-w-xl m-auto appear appear-2">
                            <StaticImage
                                src="../../images/about.png"
                                width={1000}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A propos Alexis Lepresle"
                            />
                        </div>
                        <div className="lg:flex-1 mt-2 md:ml-16">
                            <div className="appear appear-1 flex lg:items-left lg:justify-left justify-center">
                                <p className="m-auto lg:ml-0 mb-4 btn-title block px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-black">À propos</p>
                            </div>
                            <h2 className="appear appear-2 text-black lg:text-left text-center mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl">
                                Qui suis-je ?
                            </h2>
                            <p className="mt-4 text-lg text-gray-700 appear appear-3">
                                J'ai commencé ma carrière de <b>développeur web freelance </b>en parallèle de mes études en 2017.
                                Au fil des années, je me suis <b>spécialisé dans le développement Web </b> et le langage <b>JavaScript</b>. Puis, plus particulièrement
                                dans les librairies <b>React JS</b> et <b>Node JS</b>.
                            </p>
                            <p className="mt-4 text-lg text-gray-700 appear appear-3">
                                En <b>2019</b>, je me suis intéressé à <b>l'e-commerce</b> et j'ai découvert la plateforme <b>Shopify et son écosystème</b>.
                                Puis, j'ai commencé à me <b>spécialiser dans Shopify</b> en proposant de nouveaux services à mes clients.
                            </p>
                            <p className="mt-4 text-lg text-gray-700 appear appear-3">
                                Aujourd'hui, <b> j'accompagne mes clients à plein temps dans leurs projets e-commerce</b>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default APropos;
