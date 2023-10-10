import { LuMousePointerClick } from "react-icons/lu";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="reverse-gradient-section p-8 sm:p-10">
      <div className="heading-with-icon text-text mt-10">
        <LuMousePointerClick size="25" />
        <h2 className="section-heading text-text text-center">Projects</h2>
      </div>

      <div className="flex sm:flex-row flex-col gap-4 justify-center items-center flex-wrap">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="drop-shadow-md">{project.title}</h3>
            <div className="tags flex gap-1">
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
