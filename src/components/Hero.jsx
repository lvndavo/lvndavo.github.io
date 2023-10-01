import React from "react";
import { ArrowDown } from "../constants";
import { HiPaperAirplane } from "react-icons/hi2";

const Hero = () => (
  <section
    id="hero"
    className="section h-screen md:p-12 flex flex-col items-center justify-center text-center gap-4"
  >
    <h1 className="title text-text mt-5 md:mt-0 md:mx-5">
      Hi there, <br className="md:hidden" /> I'm{" "}
      <span className="text-accent">Linda!</span>
    </h1>
    <h2 className="font-young_serif font-normal text-text px-4 leading-8 text-xl md:text-2xl lg:text-3xl drop-shadow-lg">
      I am a <span className="text-accent">software developer</span> based in
      Southern California.
    </h2>
    <div className="mt-9">
      <div
        className="contact-button font-young_serif text-text font-semibold uppercase text-xl border-[1px] border-text 
        bg-transparent rounded-full hover:cursor-pointer hover:bg-accent hover:border-accent 
        flex items-center gap-3 transition-all duration-200 py-4 px-5"
      >
        Contact Me <HiPaperAirplane />
      </div>
    </div>
    <div className="absolute bottom-5 down-arrow">
      <ArrowDown />
    </div>
  </section>
);

export default Hero;
