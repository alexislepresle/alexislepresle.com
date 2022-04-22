import React, { useState, useEffect } from 'react';
import iconLP from "../../images/lepetitbiscuit-favicon.png"
import iconDP from "../../images/domainepoujol-favicon.png"
import iconEL from "../../images/escargotleandre-favicon.png"
import bulb from "../../images/bulb.png"

const data = [
    {
        name: "Aurélie",
        role: "Le Petit Biscuit Français",
        testimonial: "Nous avons contacté Alexis pour développer un module de produit personnalisé. Alexis est un vrai développeur, qui ne sous-traite pas son travail et qui maîtrise son sujet. Les délais sont toujours respectés. Nous lui accordons depuis toute notre confiance. D'ailleurs, il s'occupe aujourd'hui de la maintenance du site à l'année. Vous l'aurez compris, nous recommandons fortement Alexis.",
        icon: iconLP
    },
    {
        name: "Emilie",
        role: "Domaine de Poujol",
        testimonial: "Alexis est un super développeur Shopify! Nous avions initialement engagé un autre développeur pour notre site d’e-commerce. Le travail délivré était très peu qualitatif. Alexis a extrêmement bien rattrapé le coup! Il est super réactif, professionnel et impliqué. Je retravaillerai avec lui sur des futurs projets sans hésiter, et le recommande vivement :)",
        icon: iconDP
    },
    {
        name: "Jacques",
        role: "Escargots Léandre",
        testimonial: "Alexis est non seulement très compétent techniquement en e-commerce. Mais il a aussi une très bonne compréhension des enjeux marketing, image, sales de ses clients. De plus, Alexis est une personne courtoise, organisée et force de propositions.",
        icon: iconEL
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
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <section id="testimonials" className="section">
            <div className="text-white py-24 max-w-5xl m-auto px-4 sm:px-6 lg:px-8 z-50	relative">
                <img className="floating-object left" src={bulb} role="presentation" />
                <div className="appear appear-1 flex items-center justify-center z-100">
                    <p className="text-white px-5 mb-5 m-auto block py-2 border border-transparent text-base font-medium rounded-full bg-gray-light">Témoignages</p>
                </div>
                <h2 className="appear appear-2 text-center mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl pb-12 max-w-xl m-auto">
                    Ce qu’ils disent de moi
                </h2>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                    <div className="md:col-start-2 col-start-0 col-span-4">
                        <div className="grid grid-cols-6 sm:h-64 md:h-52 h-82">
                            <div className="md:col-span-1 col-span-0 absolute">
                                <svg width="75" height="63" viewBox="0 0 75 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5125 42.2C0.5125 33.4 3.3125 25.3333 8.9125 18C14.5125 10.6667 21.4458 4.79999 29.7125 0.399994L33.3125 6.79999C29.3125 9.73333 25.7125 12.8667 22.5125 16.2C19.3125 19.5333 16.5792 23.4667 14.3125 28L21.7125 34C24.7792 36.4 26.8458 38.8 27.9125 41.2C28.9792 43.6 29.5125 46.1333 29.5125 48.8C29.5125 52.9333 28.2458 56.2 25.7125 58.6C23.1792 61 19.9792 62.2 16.1125 62.2C13.5792 62.2 11.3125 61.7333 9.3125 60.8C7.3125 59.8667 5.5125 58.7333 3.9125 57.4C1.64583 52.6 0.5125 47.5333 0.5125 42.2ZM42.1125 42.2C42.1125 33.4 44.9125 25.3333 50.5125 18C56.1125 10.6667 63.0458 4.79999 71.3125 0.399994L74.9125 6.79999C70.9125 9.73333 67.3125 12.8667 64.1125 16.2C60.9125 19.5333 58.1792 23.4667 55.9125 28L63.3125 34C66.3792 36.4 68.4458 38.8 69.5125 41.2C70.5792 43.6 71.1125 46.1333 71.1125 48.8C71.1125 52.9333 69.8458 56.2 67.3125 58.6C64.7792 61 61.5792 62.2 57.7125 62.2C55.1792 62.2 52.9125 61.7333 50.9125 60.8C48.9125 59.8667 47.1125 58.7333 45.5125 57.4C43.2458 52.6 42.1125 47.5333 42.1125 42.2Z" fill="#B2BDD7" fill-opacity="0.29" />
                                </svg>
                            </div>
                            <div className="col-span-6 appear appear-3">
                                <p className="text-center text-xl pb-6 flex items-center justify-center" style={{ letterSpacing: '0.4em' }}>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Iconly/Bulk/Star">
                                                <g id="Star">
                                                    <path id="Fill 1" d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95659 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361" fill="#FBDC8E" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Iconly/Bulk/Star">
                                                <g id="Star">
                                                    <path id="Fill 1" d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95659 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361" fill="#FBDC8E" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Iconly/Bulk/Star">
                                                <g id="Star">
                                                    <path id="Fill 1" d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95659 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361" fill="#FBDC8E" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Iconly/Bulk/Star">
                                                <g id="Star">
                                                    <path id="Fill 1" d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95659 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361" fill="#FBDC8E" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Iconly/Bulk/Star">
                                                <g id="Star">
                                                    <path id="Fill 1" d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95659 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361" fill="#FBDC8E" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </p>
                                <p className="text-center text-lg">{data[currentTestimonial] && data[currentTestimonial].testimonial}</p>
                                <p className="text-center block md:hidden font-bold font-gray-400 pt-10">{data[currentTestimonial].name} - {data[currentTestimonial].role}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 flex-wrap appear appear-4">
                    {
                        data.map((testimonial, i) => {
                            return (
                                <div
                                    className={(i === currentTestimonial ? "pl-2 pr-2 sm:pr-6 rounded-full shadow-xl bg-gray-light " : " ") + " mx-2 pl-2 py-2 cursor-pointer"}
                                    onClick={() => setCurrentTestimonial(i)}
                                    onKeyDown={() => setCurrentTestimonial(i)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="flex items-center justify-center ">
                                        <div className="bg-white rounded-full p-2 sm:p-3 mr-0 sm:mr-2">
                                            <img className="w-8 h-8 p-1" decoding="async" loading="lazy" width={32} height={32} src={testimonial.icon} alt={testimonial.name} />
                                        </div>
                                        <div className="sm:block hidden">
                                            {i === currentTestimonial ?
                                                <div className="sm:block hidden">
                                                    <p className="font-bold">{testimonial.name}</p>
                                                    <p className="font-light font-gray-400 text-sm opacity-50">{testimonial.role}</p>
                                                </div> :
                                                <></>
                                            }
                                        </div>

                                    </div>
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