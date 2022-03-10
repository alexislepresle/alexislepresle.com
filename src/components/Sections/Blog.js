import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const data = [
    {
        name: "[Bientôt dispo] Comment choisir un thème pour votre boutique Shopify ? ",
        description: "Choisir un thème quand on n'y connaît rien, peut vite devenir compliquer. Dans cette article je vais vous donnner quelques astuces pour choisir un thème.",
        img: "../../images/IMG_8921.jpg",
        tag: "Shopify",
        time: '7 min de lecture'
    },
    {
        name: "[Bientôt dispo] Comment automatiser votre boutique et gagner du temps ? ",
        description: "Il existe aujourd'hui énormement d'outil no-code. Pourquoi ne pas les exporter et vous faire gagner du temps et de l'argent chaque jour.",
        img: "../../images/IMG_8921.jpg",
        tag: "No-Code",
        time: '7 min de lecture'
    },
    {
        name: "[Bientôt dispo] Mon top 10 des apps Shopify en 2022",
        description: "Dans cette article je vais vous partager les apps que j'utilise pour mes clients et vous expliquer les avantages et pourquoi devriez vous aussi les installer.",
        img: "../../images/IMG_8921.jpg",
        tag: "Shopify",
        time: '7 min de lecture'
    }
]

const Blog = () => {
    return (
        <section className="relative bg-white" id="blog">
            <div className="py-20 md:py-24 max-w-5xl m-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <div>
                        <div>
                            <dl className="space-y-10 md:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
                                {
                                    data.map(item => {
                                        return (
                                            <a href="/#">
                                                <div className="relative hover:bg-gray-100 max-w-2xl m-auto p-4 rounded-xl duration-1000">
                                                    <div className="rounded-xl">
                                                        <StaticImage
                                                            src={"../../images/IMG_8921.jpg"}
                                                            style={{
                                                                borderTopLeftRadius: '0.5rem',
                                                                borderTopRightRadius: '0.5rem'
                                                            }}
                                                            width={800}
                                                            quality={95}
                                                            formats={["auto", "webp", "avif"]}
                                                            alt={item.name}
                                                        />
                                                    </div>
                                                    <div className="py-5">
                                                        <div className="flex items-center">
                                                            <div className="flex items-left justify-left">
                                                                <p className="ml-0 mb-4 btn-title m-auto block px-2 py-1 text-base font-medium rounded-full text-white bg-black"> {item.tag}</p>
                                                            </div>
                                                            <div className="flex items-left justify-left px-2">
                                                                <p className="ml-0 mb-4 btn-title m-auto block px-2 py-1 text-base font-medium rounded-full text-white bg-black"> {item.time}</p>
                                                            </div>
                                                        </div>
                                                        <p className="mt-4 text-xl leading-6 font-bold text-black">{item.name}</p>
                                                        <p className="mt-2 text-base font-normal text-gray-700">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    {/*
                                                    <a href="/contact" className="btn-gradient lg:my-5 mb-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-white hover:bg-indigo-700">
                                                        Bientôt disponible
                                                        
                                                        <span>
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.859 10.9425C13.8119 10.9908 13.6341 11.1975 13.4685 11.3675C12.4976 12.4367 9.96468 14.1867 8.63898 14.7208C8.43765 14.8067 7.92864 14.9883 7.65668 15C7.39608 15 7.14767 14.94 6.91061 14.8183C6.61511 14.6483 6.37806 14.3808 6.24817 14.065C6.16455 13.8458 6.03466 13.19 6.03466 13.1783C5.90477 12.4608 5.83333 11.295 5.83333 10.0067C5.83333 8.77917 5.90477 7.66083 6.01112 6.9325C6.02329 6.92083 6.15319 6.10583 6.29525 5.82667C6.55585 5.31667 7.06486 5 7.60959 5H7.65668C8.01144 5.0125 8.7575 5.32917 8.7575 5.34083C10.0118 5.87583 12.4862 7.54 13.4807 8.64583C13.4807 8.64583 13.7608 8.93 13.8825 9.1075C14.0725 9.3625 14.1667 9.67833 14.1667 9.99417C14.1667 10.3467 14.0603 10.675 13.859 10.9425Z" fill="#F7F6F8" />
                                                            </svg>
                                                        </span>

                                            </a>
                                                                                                */}
                                                </div>
                                            </a>
                                        )
                                    })
                                }
                            </dl>
                        </div>
                    </div>
                </div >
            </div >

        </section >
    );
};

export default Blog;