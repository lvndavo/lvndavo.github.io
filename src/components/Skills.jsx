import { FaLaptopCode, FaTools, FaToolbox } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

const Skills = () => {
  return (
    <section id="skills" className="mx-8">
      <div
        className="bg-accent rounded-2xl drop-shadow-xl w-full
        md:py-12 sm:py-8 py-6"
      >
        <div className="flex items-center justify-center gap-3 text-text mb-5">
          <FaToolbox size="24" />
          <h2 className="section-heading">Skills</h2>
        </div>
        <div className="grid grid-cols-3">
          <div className="column text-text items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <FaLaptopCode size="21" />
              <h3 className="text-center font-josefinsans text-xl sm:text-2xl">
                Languages
              </h3>
            </div>
            <div>HTML, CSS, JS, TS, Python, Java, C++, MySQL</div>
          </div>
          <div className="column text-text items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <IoLibrary size="21" />
              <h3 className="text-center font-josefinsans text-xl sm:text-2xl">
                Libraries & Frameworks
              </h3>
            </div>
            <div>React, Next.js, Tailwind CSS, Angular, Node.js, Express</div>
          </div>
          <div className="column text-text items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <FaTools size="20" />
              <h3 className="text-center font-josefinsans text-xl sm:text-2xl">
                Tools
              </h3>
            </div>
            <div>Git/Github, Prototyping, User Testing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
