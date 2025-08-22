import React from "react";
import Car from "./images/rolls.webp";

function CarBg() {
    return (
        <>
            <div className="relative z-10">
                {/* Text Section */}
                <div className="bg-black min-h-[60vh] flex justify-center items-center text-center px-6">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin text-white max-w-5xl leading-relaxed">
                        Imagined for those who reject conformity and live on their own terms.
                        Black Badge beckons the rule-breakers, innovators, trailblazers — and
                        above all — those who dare.
                    </h1>
                </div>

                {/* Image Section */}
                <div>
                    <img
                        src={Car}
                        alt="Rolls Royce Black Badge"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </>
    );
}

export default CarBg;
