import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const data = [
    {
        name: "Comment choisir un thème pour votre boutique Shopify ? ",
        description: "",
        img: "../../images/IMG_8921.jpg",
        tag: "Shopify"
    },
    {
        name: "Comment automatiser votre boutique et gagner du temps ? ",
        description: "",
        img: "../../images/IMG_8921.jpg",
        tag: "No-Code"
    },
    {
        name: "Mon top 10 des apps Shopify en 2022",
        description: "",
        img: "../../images/IMG_8921.jpg",
        tag: "Shopify"
    }
]

const Blog = () => {
    return (
        <section className="my-8 relative" id="blog">
            <div className="absolute  text-2xl text-soon">
                <h4>Bientôt disponible</h4>
            </div>
            <div className="opacity-40">
                <div className="bg-indigo-600 mx-0 opacity-20">
                    <div className="pb-44 pt-24 max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
                        <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
                            Blog
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-200">
                            Des conseils, des tutoriels, des news, ...
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="-mt-20">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            {
                                data.map(item => {
                                    return (
                                        <a href="/#">
                                            <div className="relative shadow-lg bg-white rounded-lg hover:bg-gray-100">
                                                <StaticImage
                                                    src={"../../images/IMG_8921.jpg"}
                                                    style={{
                                                        borderTopLeftRadius: '0.5rem',
                                                        borderTopRightRadius: '0.5rem'
                                                    }}
                                                    width={800}
                                                    quality={95}
                                                    formats={["auto", "webp", "avif"]}
                                                    alt="A Gatsby astronaut"
                                                    classNameName="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-t-lg"
                                                />
                                                <div className="px-10 py-5">
                                                    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase -mx-2 px-3 py-1 bg-blue-200 text-blue-700 rounded-full" >
                                                        {item.tag}
                                                    </div>
                                                    <p className="mt-4 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                                    <p className="mt-2 text-base font-normal text-gray-500">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
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

export default Blog;