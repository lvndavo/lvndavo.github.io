import React from "react";
import { ArrowDown } from "../constants";

const Hero = () => (
  <section className="h-full p-12 hero flex flex-col items-center justify-center text-center">
    <h1 className="text-offWhite font-josefinsans text-6xl mx-5 font-bold">
      Hi there! I'm <span className="text-lightPink">Linda.</span>
    </h1>
    <h2 className="font-josefinsans text-offWhite mt-5 mx-5 leading-10 text-3xl">
      I am a 22-year old software developer currently seeking employment in web
      development. <br />
      Based in California, USA.
    </h2>
    <div className="mx-5 mt-5">
      <button
        className="bg-gradient-to-r from-lightYellow to-lightPink p-3 
        font-josefinsans rounded-2xl text-darkestBlue font-bold text-xl outline-2"
      >
        Contact Me!
      </button>
    </div>
    <div className="absolute bottom-10">
      <ArrowDown />
    </div>
  </section>
);

export default Hero;
