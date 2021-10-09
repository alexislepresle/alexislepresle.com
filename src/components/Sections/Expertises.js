import React from 'react';

const data = [
    {
        name: "Création de boutique",
        description: "Accompagnement du début de votre projet jusqu'à la mise en ligne de votre boutique.",
        icon: <svg style={{ maxWidth: "25px" }} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Storefront</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 448V240M64 240v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23 0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48zM32 464h448M136 288h80a24 24 0 0124 24v88h0-128 0v-88a24 24 0 0124-24zM288 464V312a24 24 0 0124-24h64a24 24 0 0124 24v152" /></svg>
    },
    {
        name: "Application Shopify sur-mesure",
        description: "Vous avez un besoin sur-mesure ou une idée d'app Shopify ? Je développe des Apps Shopify publics et privés.",
        icon: <svg style={{ maxWidth: "25px" }} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Grid</title><rect x="48" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><rect x="288" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><rect x="48" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><rect x="288" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
    },
    {
        name: "SEO",
        description: "Besoin d'améliorer votre SEO ? Je suis disponible pour vous accompagner dans l'amélioration du SEO de votre boutique.",
        icon: <svg style={{ maxWidth: "25px" }} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Trending Up</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 144h112v112" /><path d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
    },
    {
        name: "Automatisation",
        description: "Gagner du temps avec les tâches récurrentes en simplifiant les processus grâce à l'automatisation.",
        icon: <svg style={{ maxWidth: "25px" }} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Swap Horizontal</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302" /></svg>
    },
    {
        name: "Consulting",
        description: "Je vous accompagne dans votre projet en vous apportant les meilleures solutions à vos besoins.",
        icon: <svg style={{ maxWidth: "25px" }} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Bulb</title><path d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 00-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24M224 480h64M208 432h96M256 384V256" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M294 240s-21.51 16-38 16-38-16-38-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
    },
    {
        name: "Thème sur-mesure",
        description: "Vous souhaitez avoir une boutique unique ? Je design et intègre des thèmes sur-mesure qui vous ressemble.",
        icon: <svg style={{ maxWidth: "25px" }} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Brush</title><path d="M452.37 59.63h0a40.49 40.49 0 00-57.26 0L184 294.74c23.08 4.7 46.12 27.29 49.26 49.26l219.11-227.11a40.49 40.49 0 000-57.26zM138 336c-29.88 0-54 24.5-54 54.86 0 23.95-20.88 36.57-36 36.57C64.56 449.74 92.82 464 120 464c39.78 0 72-32.73 72-73.14 0-30.36-24.12-54.86-54-54.86z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
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
                                            {item.icon}
                                        </div>
                                        <p className="mt-4 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-2 text-base text-gray-500">
                                            {item.description}
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