import React from 'react';

const data = [
    {
        name: "Création de boutique",
        description: "Accompagnement du début de votre projet jusqu'à la mise en ligne de votre boutique.",
        icon: "🏪"
    },

    {
        name: "SEO",
        description: "Besoin d'améliorer votre SEO ? Je suis disponible pour vous accompagner dans l'amélioration du SEO de votre boutique.",
        icon: "🪄"
    },

    {
        name: "Automatisation",
        description: "Gagner du temps avec les tâches récurrentes en simplifiant les processus grâce à l'automatisation.",
        icon: "⚙️"
    },
    {
        name: "Consulting",
        description: "Je vous accompagne dans votre projet en vous apportant les meilleures solutions à vos besoins.",
        icon: "👨🏻‍💻",
        link: 'https://koalendar.com/e/meet-with-lepresle-alexis',
        textLink: 'Prendre RDV'
    },
    {
        name: "Thème sur-mesure",
        description: "Vous souhaitez avoir une boutique unique ? Je design et intègre des thèmes sur-mesure qui vous ressemble.",
        icon: "🛍",
    },

    {
        name: "Application Shopify sur-mesure",
        description: "Vous avez un besoin sur-mesure ou une idée d'app Shopify ? Je développe des Apps Shopify publics et privés.",
        icon: "🛠"
    },

]

const Expertises = () => {
    return (
        <section className="py-12" id="expertises">
            <div className="max-w-5xl m-auto py-24">
                <div className="text-center">
                    <div className="pb-12 m-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center">
                            <p className="px-5 btn-title m-auto block py-2 border border-transparent text-base font-medium rounded-full text-white bg-black">Services</p>
                        </div>
                        <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-black sm:text-5xl">
                            Mes services
                        </p>
                        <p className="mt-4 m-auto max-w-2xl text-xl text-gray-400">
                            Je suis spécialisé dans le développement de boutique e-commerce et d'app Shopify. Mon objectif est de vous accompagner dans votre projet en répondant à vos besoins afin d'accroître vos revenus et de vous faire gagner du temps.
                        </p>
                    </div>
                </div >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <dl className="container space-y-10 md:space-y-0 md:gap-10 cursor-pointer">
                            {
                                data.map((item, i) => {
                                    return (
                                        <div className={(i % 2 != 0 ? "bg-white " : "border-gray-300 ") + "text-center relative rounded-xl shadow-full p-5 " + `box-${i + 1}`} style={(i % 2 === 0 ? { borderWidth: '1px' } : {})}>
                                            <p className="text-6xl py-10">{item.icon}</p>
                                            <p className="px-12 mt-4 text-xl leading-6 font-bold">{item.name}</p>
                                            <p className="px-2 mt-2 text-base text-gray-700">
                                                {item.description}
                                            </p>
                                            {
                                                item.link ?
                                                    <a href={item.link} rel="noreferrer" target="_blank" className="btn-gradient m-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-white hover:bg-indigo-700">
                                                        {item.textLink}
                                                        <span>
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.859 10.9425C13.8119 10.9908 13.6341 11.1975 13.4685 11.3675C12.4976 12.4367 9.96468 14.1867 8.63898 14.7208C8.43765 14.8067 7.92864 14.9883 7.65668 15C7.39608 15 7.14767 14.94 6.91061 14.8183C6.61511 14.6483 6.37806 14.3808 6.24817 14.065C6.16455 13.8458 6.03466 13.19 6.03466 13.1783C5.90477 12.4608 5.83333 11.295 5.83333 10.0067C5.83333 8.77917 5.90477 7.66083 6.01112 6.9325C6.02329 6.92083 6.15319 6.10583 6.29525 5.82667C6.55585 5.31667 7.06486 5 7.60959 5H7.65668C8.01144 5.0125 8.7575 5.32917 8.7575 5.34083C10.0118 5.87583 12.4862 7.54 13.4807 8.64583C13.4807 8.64583 13.7608 8.93 13.8825 9.1075C14.0725 9.3625 14.1667 9.67833 14.1667 9.99417C14.1667 10.3467 14.0603 10.675 13.859 10.9425Z" fill="#F7F6F8" />
                                                            </svg>
                                                        </span>
                                                    </a> :
                                                    <></>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertises;