import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Travaillons ensemble !</span>
                    <span className="block text-indigo-600">Je vous répond dans les 24 heures !</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-3xl shadow">
                        <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-white bg-indigo-600 hover:bg-indigo-700">
                            Envoyer une demande
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;