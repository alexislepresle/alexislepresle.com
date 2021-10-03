import React from 'react';

const list = [
    {
        name: "",
        img: "",
    }
]

const LogoList = () => {
    return (
        <div className="py-12 mb-12 bg-white lg:pb-16 lg:mb-16 ">
            <div className="grid max-w-screen-xl grid-cols-2 col-gap-6 px-6 mx-auto space-y-5 opacity-75 lg:px-8 xl:px-4 sm:grid-cols-3 sm:space-y-3 xl:grid-cols-6">
                <img className="self-end h-12 p-1 justify-self-center" src="../images/boxify-logo.svg" alt="" />
                <img className="self-end h-10 p-1 justify-self-center" src="../images/edge-logo.svg" alt="" />
                <img className="self-end h-10 p-1 justify-self-center" src="../images/sbalbew-logo.svg" alt="" />
                <img className="self-end h-10 p-1 justify-self-center" src="../images/drops-logo.svg" alt="" />
                <img className="self-end h-12 p-1 justify-self-center" src="../images/pathway-logo.svg" alt="" />
                <img className="self-end h-10 p-1 justify-self-center" src="../images/feedback-logo.svg" alt="" />
            </div>
        </div>
    );
};

export default LogoList;