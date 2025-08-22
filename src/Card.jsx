import React from "react";
import card1 from "./images/card1.webp";
import card2 from "./images/card2.webp";
import card3 from "./images/card3.webp";

export default function Card() {
    const cards = [
        {
            img: card1,
            title: "BLACK BADGE GHOST ÉKLEIPSIS",
            desc: "Inspired by the seldom-seen alignment of Sun and Moon, this Private Collection preserves the essence of a total solar eclipse – allowing owners to grasp and savour the fleeting phenomenon.",
        },
        {
            img: card2,
            title: "BLACK BADGE CULLINAN BLUE SHADOW",
            desc: "Introducing Black Badge Cullinan Blue Shadow, a Private Collection inspired by the outer limits of Earth’s atmosphere, an intense blue zone where darkness becomes visible.",
        },
        {
            img: card3,
            title: "BLACK BADGE WRAITH BLACK ARROW",
            desc: "A collection car inspired by the remarkable ventures of Thunderbolt – a lightning-quick vehicle that broke the land-speed record three times. As one of the most powerful models in Rolls-Royce history, Black Badge Wraith embodies Thunderbolt’s intrepid legacy of speed.",
        },
    ];

    return (
        <>
            <div className="z-1">
                {/* Header Section */}
                <div className="bg-black min-h-screen flex flex-col justify-center items-center text-center px-6 py-16">
                    <div className="w-full max-w-4xl">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[45px] font-thin mb-6">
                            LIBERATE THE REBEL WITHIN
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Black Badge is a statement of intent for those who refuse to
                            conform. Harness the rebellious spirit and go beyond limitation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                                MAKE AN ENQUIRY
                            </button>
                            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                                FIND A DEALER
                            </button>
                        </div>
                    </div>

                    {/* Subheading */}
                    <div className="pt-10 w-full max-w-3xl">
                        <p className="text-white text-lg sm:text-xl font-[400]">
                            CONTINUE YOUR JOURNEY
                        </p>
                        <p className="text-white text-sm sm:text-base font-thin pb-8 mt-2">
                            Delve further into stories of Inspiring Greatness.
                        </p>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                        {cards.map((car, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden shadow-lg bg-[#1a1a1a]"
                            >
                                <img
                                    src={car.img}
                                    alt={car.title}
                                    className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="p-6 text-left">
                                    <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
                                        {car.title}
                                    </h2>
                                    <p className="text-gray-300 text-sm sm:text-base">
                                        {car.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="bg-[#151515] text-white text-[14px] sm:text-[15px] font-[300] flex flex-col md:flex-row justify-between gap-8 text-justify px-6 py-12">
                    <div className="md:w-1/2 space-y-4">
                        <p>
                            The figures on fuel consumptions and CO2 emissions shown are
                            determined according to the European Regulation (EC) 715/2007 in
                            the version applicable at the time of type approval. Figures are
                            intended for comparability purposes. The fuel consumption you
                            achieve under real life driving conditions and CO2 produced will
                            depend upon a number of factors including the accessories fitted
                            after registration, variations in driving styles, weather
                            conditions and vehicle load.
                        </p>
                        <p>
                            The figures marked with (*) are based on the new test (WLTP) and
                            are translated back into outgoing test (NEDC) in order to ensure a
                            comparison between the vehicles.
                        </p>
                        <p>
                            The figures marked with (#) are already based on the new test
                            (WLTP).
                        </p>
                    </div>

                    <div className="md:w-1/2 space-y-4">
                        <p>
                            For the assessment of taxes or other duties based on
                            CO2-emissions, the CO2 figures may differ to the figures stated
                            here. The figures shown consider optional equipment and the
                            different size of wheels and tyres available on the selected model
                            and may vary during the configuration.
                        </p>
                        <p>
                            Further information about the official fuel consumption and the
                            specific CO2 emission of new passenger cars is available in a
                            guide available at all selling points and at
                            http://carfueldata.direct.gov.uk/ in the United Kingdom, at
                            http://www.dat.de/angebote/verlagsprodukte/leitfaden-kraftstoffverbrauch.html
                            in Germany or an equivalent guide published by your local
                            government authority.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
