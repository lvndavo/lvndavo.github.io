import React from "react";
import { ArrowDown } from "../constants";

const Hero = () => (
  <section className="h-screen md:p-12 flex flex-col items-center justify-center text-center">
    <h1 className="text-offWhite font-josefinsans text-5xl mt-5 md:mt-0 md:text-6xl md:mx-5 font-bold">
      Hi there! <br className="md:hidden" /> I'm{" "}
      <span className="text-green300">Linda.</span>
    </h1>
    <h2 className="font-josefinsans text-offWhite mt-3 md:mt-5 md:mx-5 mx-2 leading-9 text-xl md:text-3xl">
      I am a 22-year old software developer currently seeking employment in web
      development. <br />
      Based in California, USA.
    </h2>
    <div className="mx-5 mt-12">
      <a
        className="contact-button bg-offWhite py-3 px-4 font-josefinsans rounded-2xl text-darkestBrown font-bold 
      text-xl border-[2.5px] border-green400 hover:shadow-md hover:shadow-green500"
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
