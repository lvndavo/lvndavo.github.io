import { LuMousePointerClick } from "react-icons/lu";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="reverse-gradient-section p-6 sm:p-10 flex flex-col"
    >
      <div className="heading-with-icon text-cream mt-10">
        <LuMousePointerClick size="25" />
        <h2 className="section-heading text-cream text-center">Projects</h2>
      </div>

      <div className="md:px-14">
        {projects.map((project) => (
          <div key={project.id} className="project-card w-full mb-5">
            <h3 className="drop-shadow-md text-left mb-1">{project.title}</h3>
            <p className="text-base font-josefinsans drop-shadow-sm mb-1">
              {project.description}
            </p>
            <div className="tags flex gap-1 flex-wrap">
              {project.tags.map((tag) => (
                <div key={`${project.id}-${tag}`} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
