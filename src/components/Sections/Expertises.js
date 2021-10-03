import React from 'react';

const data = [
    {
        name: "Création de boutique",
        description: "",
        icon: ""
    },
    {
        name: "Application Shopify sur-mesure",
        description: "",
        icon: ""
    },
    {
        name: "SEO",
        description: "",
        icon: ""
    },
    {
        name: "Automatisation",
        description: "",
        icon: ""
    },
    {
        name: "Consulting",
        description: "",
        icon: ""
    },
    {
        name: "Thème sur-mesure",
        description: "",
        icon: ""
    }
]

const Expertises = () => {
    return (
        <section className="py-12">
            <div className="bg-indigo-600 mx-0">
                <div className="pb-44 pt-24 max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
                    <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
                        Mes expertises
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-200">
                        Je suis spécialisé dans le développement de boutique e-commerce Shopify. Mon objectif est de vous accompagner dans votre projet en répondant à vos besoins afin d'accroître vos revenues et de vous faire gagner du temps.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-20">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {
                            data.map(item => {
                                return (
                                    <div className="relative rounded-xl shadow-lg bg-white p-10">
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white -mt-16">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                        </div>
                                        <p className="mt-4 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-2 text-base text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Expertises;