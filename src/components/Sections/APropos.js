import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const APropos = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 flex items-center flex-wrap">
                        <div className="md:flex-1">
                            <StaticImage
                                src="../../images/IMG_8921.jpg"
                                width={800}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                                classNameName="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="md:flex-1 mt-2 md:ml-16">
                            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                À Propos
                            </h2>
                            <p className="mt-4 text-lg text-gray-500">
                                J'ai débuté ma carrière de <b>développeur web freelance </b>en parallèle de mes études en 2017.
                                Au fil des années, je me suis <b>spécialisé dans le développement Web </b> et le langage <b>JavaScript</b>. Puis, plus particulièrement
                                dans les librairies <b>React JS</b> et <b>Node JS</b>.
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                En <b>2019</b>, je me suis intéressé à <b>l'e-commerce</b> et j'ai découvert la plateforme <b>Shopify et son éco-système</b>.
                                Puis, j'ai commencé à me <b>spécialisé dans Shopify</b> en proposant de nouveaux services à mes clients.
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                Aujourd'hui, <b> j'accompagne mes clients à plein temps dans leurs projets e-commerce</b>leurs projets e-commerce.
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                De plus, j'ai la <b> certification </b>
                                <a className="underline text-indigo-600" href="https://experts.shopify.com/alexis-lepresle" rel="noreferrer" target="_blank">d'Expert Shopify</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default APropos;