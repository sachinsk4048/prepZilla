import amazon from "../../assets/logos/Amazon.svg";
import belasting from "../../assets/logos/Belastingdienst.svg";
import booking from "../../assets/logos/Booking.svg";
import coolblue from "../../assets/logos/Coolblue.svg";
import dhl from "../../assets/logos/DHL.svg";
import ing from "../../assets/logos/ING.svg";
import klm from "../../assets/logos/KLM.svg";
import shell from "../../assets/logos/Shell.svg";

import "../../styles/logoSlider.css";

function TrustedCompanies() {

  const logos = [
    amazon,
    belasting,
    booking,
    coolblue,
    dhl,
    ing,
    klm,
    shell
  ];

  return (

<section className="w-full py-28 pt-0">

  <div className="w-full bg-white">

    <div className="relative w-full rounded-none  border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl py-16 md:py-20 px-4 md:px-10">
      {/* glow overlay */}
      <div className="absolute inset-0  bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>

      {/* heading */}
      <h2 className="relative text-center text-2xl md:text-3xl font-semibold text-black mb-14 ">
        Trusted by Job Seekers Who’ve Applied At
      </h2>

      {/* slider */}
      <div className="relative logo-slider">

        <div className="logo-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company"
              className="h-12 md:h-14 mx-14 opacity-100 contrast-125 brightness-110 drop-shadow-sm"
            />
          ))}
        </div>

      </div>

    </div>

  </div>

</section>

  );
}

export default TrustedCompanies;