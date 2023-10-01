import { useRef, useEffect, useState } from "react";
import { Nav, Hero, About, Projects, Skills, Contact } from "./components";

function App() {
  const blobRef = useRef(null);
  // var lastScrollY = 0;

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const blobX = clientX - blobRef.current.getBoundingClientRect().width / 2;
      const blobY =
        clientY - blobRef.current.getBoundingClientRect().height / 2;
      blobRef.current.style.transform = `translate(${blobX}px, ${blobY}px)`;
    };
    // const onScroll = (event) => {
    //   let currentScrollY = window.scrollY || document.documentElement.scrollTop;
    //   if (currentScrollY >= 0) {
    //     if (currentScrollY > lastScrollY) {
    //       document.getElementById("navbar").style.transform =
    //         "translate(0,-200px)";
    //     } else if (currentScrollY < lastScrollY) {
    //       document.getElementById("navbar").style.transform = "translate(0,0)";
    //     }
    //     lastScrollY = currentScrollY;
    //   }
    // };

    if (typeof window != "undefined") {
      window.addEventListener("mousemove", onMouseMove);
      // window.addEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        id="cursorBlob"
        className={`rounded-full bg-text w-[250px] h-[250px] 
          opacity-10 blur-3xl fixed pointer-events-none z-[999] hidden sm:block`}
      />
      <div className="flex flex-col items-center w-full overflow-hidden">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
