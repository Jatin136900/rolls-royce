import Iron1 from "./images/vedio2.mp4";
import Iron2 from "./images/vedio6.mp4";
import Iron3 from "./images/vedio7.mp4";
import Iron4 from "./images/vedio9.mp4";
import bg from "./images/bg.webp";
import bg1 from "./images/bg1.webp";
import bg2 from "./images/bg2.webp";

export default function Iron() {
  return (
    <>
      <div className="z-[20] bg-white">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-16 py-16">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
              BOLDER IN <br /> PERFORMANCE
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Experience the responsiveness of dynamic handling. Wherever desire
              takes you, revel in peerless capability and finesse.
            </p>
          </div>

          {/* Right Video */}
          <div className="md:w-1/2">
            <video
              src={Iron1}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-16 py-16">
          {/* Left Video */}
          <div className="md:w-1/2">
            <video
              src={Iron2}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
              BOLDER IN BESPOKE
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Indulge in exquisite materials. Captivate with personalised
              elements that defy convention.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-16 py-16">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
              BOLDER IN <br /> PERFORMANCE
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Experience the responsiveness of dynamic handling. Wherever desire
              takes you, revel in peerless capability and finesse.
            </p>
          </div>

          {/* Right Video */}
          <div className="md:w-1/2">
            <video
              src={Iron3}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-16 py-16">
          {/* Left Video */}
          <div className="md:w-1/2">
            <video
              src={Iron4}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
              BOLDER IN BESPOKE
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Indulge in exquisite materials. Captivate with personalised
              elements that defy convention.
            </p>
          </div>
        </div>

        {/* Define Path Section */}
        <div className="text-center py-24 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin">
            DEFINE YOUR PATH
          </h1>
          <p className="text-sm sm:text-base text-[#515151] mt-4 font-bold">
            Challenge the ordinary and redefine the standard. The world is yours
            to shape.
          </p>
        </div>

        {/* Background Sections */}
        {[ 
          { img: bg, title: "BLACK BADGE SPECTRE", desc: "The most powerful Rolls-Royce ever." },
          { img: bg1, title: "BLACK BADGE GHOST SERIES II", desc: "A bold expression of luxury in motion. Within its influence, feel an impulse for exhilaration." },
          { img: bg2, title: "BLACK BADGE CULLINAN SERIES II", desc: "Exquisite materials meet commanding design. An alter ego designed to defy boundaries, wherever it prevails." }
        ].map((section, index) => (
          <section
            key={index}
            className="relative w-full h-[80vh] sm:h-[100vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${section.img})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-xl px-6 md:px-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-thin tracking-wider pb-5">
                {section.title}
              </h1>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base">
                {section.desc}
              </p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
