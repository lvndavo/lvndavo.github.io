import { useRef, useEffect } from "react";
import { Nav, Hero, About, Projects, Skills, Contact } from "./components";

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
        className={`rounded-full bg-accentOrange-100 w-[250px] h-[250px] 
          opacity-10 blur-2xl fixed pointer-events-none z-[999] hidden sm:block`}
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
