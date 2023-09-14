import React from "react";
import { ArrowDown } from "../constants";

const Hero = () => (
  <section
    id="hero"
    className="section h-screen md:p-12 flex flex-col items-center justify-center text-center gap-4"
  >
    <h1 className="title text-text font-josefinsans mt-5 md:mt-0 md:mx-5">
      Hi there, <br className="md:hidden" /> I'm{" "}
      <span className="text-accent">Linda!</span>
    </h1>
    <h2 className="font-josefinsans text-text px-4 leading-8 text-xl md:text-2xl lg:text-3xl drop-shadow-lg">
      I am a software developer based in Southern California.
    </h2>
    <div className="mt-9">
      <a
        className="contact-button bg-black/25 py-3 px-4 font-josefinsans rounded-full text-offWhite font-bold 
      text-xl border-2 border-primary hover:bg-offWhite hover:text-darkestBrown transition-all duration-300"
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
