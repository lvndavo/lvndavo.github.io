import { useRef, useEffect, useState } from "react";

function App() {
  const blobRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const blobX = clientX - blobRef.current.getBoundingClientRect().width / 2;
      const blobY =
        clientY - blobRef.current.getBoundingClientRect().height / 2;
      blobRef.current.style.transform = `translate(${blobX}px, ${blobY}px)`;
    };
    if (typeof window != "undefined") {
      window.addEventListener("mousemove", onMouseMove);
    }
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        id="cursorBlob"
        className={`rounded-full bg-offWhite w-[150px] h-[150px] 
          opacity-40 blur-2xl fixed pointer-events-none z-[999]`}
      />
      <div>
        <ul
          className="list-none font-playfair text-offWhite text-end text-[4rem] 
          lowercase italic font-bold mx-5 nav"
        >
          <li>
            <a href="#about" className="nav-item">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-item">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-item">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-item">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
