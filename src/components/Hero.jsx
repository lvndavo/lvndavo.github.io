import React from "react";
import { ArrowDown } from "../constants";

const Hero = () => (
  <section
    id="hero"
    className="h-screen md:p-12 flex flex-col items-center justify-center text-center gap-4"
  >
    <h1 className="section-heading text-offWhite font-josefinsans mt-5 md:mt-0 md:mx-5">
      Hi there! <br className="md:hidden" /> I'm{" "}
      <span className="text-green300">Linda.</span>
    </h1>
    <h2 className="font-josefinsans text-offWhite px-4 leading-8 text-xl md:text-2xl lg:text-3xl drop-shadow-lg">
      I am a 22-year old software developer <br className="md:hidden" /> based
      in California, USA.
    </h2>
    <div className="mt-9">
      <a
        className="contact-button bg-black/25 py-3 px-4 font-josefinsans rounded-full text-offWhite font-bold 
      text-xl border-2 border-green400 hover:bg-offWhite hover:text-darkestBrown transition-all duration-300"
        href="/"
      >
        Contact Me!
      </a>
    </div>
    <div className="absolute bottom-5 down-arrow">
      <ArrowDown />
    </div>
  </section>
);

export default Hero;
