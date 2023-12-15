import React from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => (
  <section
    id="hero"
    className="gradient-section h-screen pt-12 flex flex-col items-center justify-center text-center gap-7"
  >
    <div>
      <h1 className="title">
        Hi there, <br className="md:hidden" /> I'm{" "}
        <span className="text-accentOrange-300">Linda!</span>
      </h1>
    </div>
    <div>
      <h2 className="font-young_serif font-normal text-cream px-4 leading-8 text-xl md:text-2xl lg:text-3xl drop-shadow-lg">
        I am a <span className="text-accentOrange-300">software developer</span>{" "}
        <br className="sm:hidden" />
        based in Southern California.
      </h2>
    </div>
    <div className="py-4">
      <div
        className="contact-button font-young_serif text-cream font-semibold uppercase text-xl border border-cream 
        bg-transparent rounded-full hover:cursor-pointer hover:bg-accentOrange-300 hover:border-accentOrange-300 
        transition-all duration-200 py-4 px-5"
      >
        <a href="#contact" className="flex gap-3 items-center">
          Contact Me <HiPaperAirplane />
        </a>
      </div>
    </div>
    <div className="absolute bottom-5 down-arrow text-cream">
      <FaChevronDown size="30" />
    </div>
  </section>
);

export default Hero;
