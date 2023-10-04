import { FaLaptopCode, FaTools, FaToolbox } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills">
      <div
        className="bg-accent rounded-3xl drop-shadow-xl
        md:pt-12 md:pb-10 sm:pt-8 sm:pb-6 pt-6 pb-4 max-md:px-7 mx-10 sm:mx-24"
      >
        <div className="heading-with-icon text-text">
          <FaToolbox size="25" />
          <h2 className="section-heading">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="column">
            <div className="flex flex-col items-center gap-2">
              <FaLaptopCode size="25" />
              <h3 className="text-center font-josefinsans text-xl sm:text-2xl">
                Languages
              </h3>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {skills.languages.map((language) => (
                <div key={language.id} className="skill-item group">
                  <img
                    src={language.src}
                    alt={language.title}
                    className="skill-logo"
                  />
                  <span className="tooltip group-hover:scale-100">
                    {language.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="column">
            <div className="flex flex-col items-center gap-2">
              <IoLibrary size="24" />
              <h3 className="text-center font-josefinsans text-xl sm:text-2xl">
                Libraries, Frameworks, Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.other.map((skill) => (
                <div key={skill.id} className="skill-item group">
                  <img
                    key={skill.id}
                    src={skill.src}
                    alt={skill.title}
                    className="skill-logo"
                  />
                  <span className="tooltip group-hover:scale-100">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
