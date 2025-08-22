import Iron1 from "./images/vedio2.mp4"
import Iron2 from "./images/vedio6.mp4"
import Iron3 from "./images/vedio7.mp4"
import Iron4 from "./images/vedio9.mp4"
import bg from "./images/bg.webp"
import bg1 from "./images/bg1.webp"
import bg2 from "./images/bg2.webp"



export default function Iron() {
    return (
        <>
            <div className="z-20">
                <div className="flex flex-col md:flex-row justify-around items-center px-10 py-30">
                    {/* Left Side Content */}
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-4xl font-light tracking-wide">
                            BOLDER IN <br /> PERFORMANCE
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            Experience the responsiveness of dynamic handling. Wherever desire
                            takes you, revel in peerless capability and finesse.
                        </p>
                    </div>

                    {/* Right Side Video */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <video
                            src={Iron1}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>






                <div className="flex flex-col md:flex-row justify-around items-center px-10 py-30">




                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <video
                            src={Iron2}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>


                    <div className="md:w-1/2 space-y-4 pl-15">
                        <h1 className="text-4xl font-light tracking-wide">
                            BOLDER IN BESPOKE
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            Indulge in exquisite materials. Captivate with personalised elements that defy convention.
                        </p>
                    </div>
                </div>






                <div className="flex flex-col md:flex-row justify-around items-center px-10 py-30">
                    {/* Left Side Content */}
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-4xl font-light tracking-wide">
                            BOLDER IN <br /> PERFORMANCE
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            Experience the responsiveness of dynamic handling. Wherever desire
                            takes you, revel in peerless capability and finesse.
                        </p>
                    </div>

                    {/* Right Side Video */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <video
                            src={Iron3}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>







                <div className="flex flex-col md:flex-row justify-around items-center px-10 py-30">




                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <video
                            src={Iron4}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>


                    <div className="md:w-1/2 space-y-4 pl-15">
                        <h1 className="text-4xl font-light tracking-wide">
                            BOLDER IN BESPOKE
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            Indulge in exquisite materials. Captivate with personalised elements that defy convention.
                        </p>
                    </div>
                </div>





                <div className="text-center pt-[90px]  pb-[90px]">
                    <h1 className="text-[50px] font-thin pb-2.5">DEFINE YOUR PATH</h1>
                    <p className="text-[14px] text-[#515151] pt-5  font-bold" >Challenge the ordinary and redefine the standard. The world is yours to shape.  </p>
                </div>


                <section
                    className="relative w-full h-[120vh] bg-cover bg-center flex items-center"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    {/* Overlay for text visibility */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 text-white max-w-xl ml-10 md:ml-20">
                        <h1 className="text-[45px] font-thin tracking-wider pb-5">
                            BLACK BADGE SPECTRE
                        </h1>
                        <p className="mt-5 text-[15px] pb-5">
                            The most powerful Rolls-Royce ever.
                        </p>
                    </div>
                </section>





                <section
                    className="relative w-full h-[120vh] bg-cover bg-center flex items-center"
                    style={{ backgroundImage: `url(${bg1})` }}
                >
                    {/* Overlay for text visibility */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 text-white max-w-xl ml-10 md:ml-20">
                        <h1 className="text-[45px] font-thin tracking-wider pb-5">
                            BLACK BADGE GHOST <br /> SERIES II
                        </h1>
                        <p className="mt-5 text-[15px] pb-5">
                            A bold expression of luxury in motion. Within its influence, feel an impulse for exhilaration.
                        </p>
                    </div>
                </section>









                <section
                    className="relative w-full h-[120vh] bg-cover bg-center flex items-center"
                    style={{ backgroundImage: `url(${bg2})` }}
                >
                    {/* Overlay for text visibility */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 text-white max-w-xl ml-10 md:ml-20">
                        <h1 className="text-[45px] font-thin tracking-wider pb-5">
                            BLACK BADGE <br /> CULLINAN SERIES II
                        </h1>
                        <p className="mt-5 text-[15px] pb-5">
                            Exquisite materials meet commanding design. An alter ego designed to defy boundaries, wherever it prevails.
                        </p>
                    </div>
                </section>









            </div>
        </>
    );
}
