import React, { useState, useEffect } from 'react';

const data = [
    {
        name: "Emilie",
        role: "Domaine de Poujol",
        testimonial: "Alexis est un super développeur Shopify! Nous avions initialement engagé un autre développeur pour notre site d’e-commerce. Le travail délivré était très peu qualitatif. Alexis a extrêmement bien rattrapé le coup! Il est super réactif, professionnel et impliqué. Je retravaillerai avec lui sur des futurs projets sans hésiter, et le recommande vivement :)"
    },
    {
        name: "Jacques",
        role: "Escargots Léandre",
        testimonial: "Alexis est non seulement très compétent techniquement en e-commerce, FullStack... Mais il a aussi une très bonne compréhension des enjeux marketing, image, sales de ses clients. De plus, Alexis est une personne courtoise, organisée et force de propositions."
    }
]

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentTestimonial === (data.length - 1)) {
                return setCurrentTestimonial(0);
            }
            return setCurrentTestimonial(currentTestimonial + 1);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <section id="testimonials">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
                <h2 class="text-center text-4xl	font-semibold mb-10">Ce que les clients disent de moi</h2>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                    <div className="md:col-start-2 col-start-0 col-span-4">
                        <div className="grid grid-cols-6 h-64 md:h-36">
                            <div className="md:col-span-1 col-span-0 absolute">
                                <svg width="75" height="63" viewBox="0 0 75 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5125 42.2C0.5125 33.4 3.3125 25.3333 8.9125 18C14.5125 10.6667 21.4458 4.79999 29.7125 0.399994L33.3125 6.79999C29.3125 9.73333 25.7125 12.8667 22.5125 16.2C19.3125 19.5333 16.5792 23.4667 14.3125 28L21.7125 34C24.7792 36.4 26.8458 38.8 27.9125 41.2C28.9792 43.6 29.5125 46.1333 29.5125 48.8C29.5125 52.9333 28.2458 56.2 25.7125 58.6C23.1792 61 19.9792 62.2 16.1125 62.2C13.5792 62.2 11.3125 61.7333 9.3125 60.8C7.3125 59.8667 5.5125 58.7333 3.9125 57.4C1.64583 52.6 0.5125 47.5333 0.5125 42.2ZM42.1125 42.2C42.1125 33.4 44.9125 25.3333 50.5125 18C56.1125 10.6667 63.0458 4.79999 71.3125 0.399994L74.9125 6.79999C70.9125 9.73333 67.3125 12.8667 64.1125 16.2C60.9125 19.5333 58.1792 23.4667 55.9125 28L63.3125 34C66.3792 36.4 68.4458 38.8 69.5125 41.2C70.5792 43.6 71.1125 46.1333 71.1125 48.8C71.1125 52.9333 69.8458 56.2 67.3125 58.6C64.7792 61 61.5792 62.2 57.7125 62.2C55.1792 62.2 52.9125 61.7333 50.9125 60.8C48.9125 59.8667 47.1125 58.7333 45.5125 57.4C43.2458 52.6 42.1125 47.5333 42.1125 42.2Z" fill="#B2BDD7" fill-opacity="0.29" />
                                </svg>
                            </div>
                            <div className="col-span-6">
                                <p className="text-center text-xl pb-6" style={{ letterSpacing: '0.4em' }}>⭐️⭐️⭐️⭐️⭐️</p>
                                <p className="text-center text-lg">{data[currentTestimonial] && data[currentTestimonial].testimonial}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    {
                        data.map((testimonial, i) => {
                            return (
                                <div
                                    className={(i === currentTestimonial ? "rounded-lg shadow-xl  " : " ") + "  px-5 py-2 cursor-pointer"}
                                    onClick={() => setCurrentTestimonial(i)}
                                    onKeyDown={() => setCurrentTestimonial(i)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <p className="font-bold	">{testimonial.name}</p>
                                    <p className="font-light font-blue-light text-sm">{testimonial.role}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    );
};

export default Testimonials;