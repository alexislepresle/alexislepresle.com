import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Support = () => {
    return (
        <section className="contact-me bg-indigo-100 relative">
            <div className="flex justify-center items-center z-40 py-20 md:py-24  relative">
                <div className="max-w-3xl flex flex-col-reverse lg:grid grid-cols-3 skew-y-6 mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="col-span-2 text-center md:text-left">
                        <span className="block text-5xl font-extrabold tracking-tight text-black">Travaillons ensemble.</span>
                        <span className="text-4xl md:text-5xl text-indigo-600 font-extrabold tracking-tight">Je vous réponds dans les 24 heures !</span>
                        <a href="/contact" rel="noreferrer" target="_blank" className="w-full md:w-40 btn-gradient my-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-white hover:bg-indigo-700">
                            Prendre RDV
                            <span className="inline-block">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.859 10.9425C13.8119 10.9908 13.6341 11.1975 13.4685 11.3675C12.4976 12.4367 9.96468 14.1867 8.63898 14.7208C8.43765 14.8067 7.92864 14.9883 7.65668 15C7.39608 15 7.14767 14.94 6.91061 14.8183C6.61511 14.6483 6.37806 14.3808 6.24817 14.065C6.16455 13.8458 6.03466 13.19 6.03466 13.1783C5.90477 12.4608 5.83333 11.295 5.83333 10.0067C5.83333 8.77917 5.90477 7.66083 6.01112 6.9325C6.02329 6.92083 6.15319 6.10583 6.29525 5.82667C6.55585 5.31667 7.06486 5 7.60959 5H7.65668C8.01144 5.0125 8.7575 5.32917 8.7575 5.34083C10.0118 5.87583 12.4862 7.54 13.4807 8.64583C13.4807 8.64583 13.7608 8.93 13.8825 9.1075C14.0725 9.3625 14.1667 9.67833 14.1667 9.99417C14.1667 10.3467 14.0603 10.675 13.859 10.9425Z" fill="#F7F6F8" />
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div class="col-span-1 flex items-center justify-center">
                        <StaticImage
                            src="../images/me-apple-emoji.png"
                            width={250}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="alexis lepresle - emoji"
                            className="md:w-52 w-42"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;