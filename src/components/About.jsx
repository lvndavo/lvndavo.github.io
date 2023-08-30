import me from "../assets/me.jpg";
import "../index.css";

const About = () => (
  <section
    id="about"
    className="section min-h-screen md:p-12 p-4 flex justify-center"
  >
    <div className="max-w-4xl">
      <div className="">
        <div className="bg-offWhite p-6 rounded-xl drop-shadow-xl relative">
          <h2 className="section-heading text-black text-5xl">About Me</h2>
        </div>
        <div>
          {/* <img src={me} alt="Linda Vo" className="image rounded-3xl" /> */}
        </div>
      </div>
      <div className="bg-offWhite p-6 rounded-xl drop-shadow-xl">
        <p className="body-text text-darkestBlue font-light">
          Nisi ut do amet fugiat culpa nisi id ad nulla. Mollit minim dolor eu
          anim consectetur ea culpa et. Id culpa aliquip mollit laborum tempor
          in est consectetur mollit laboris consectetur. Reprehenderit qui
          cupidatat aute aliqua consequat esse elit magna ex deserunt aliqua do.
        </p>
      </div>
    </div>
  </section>
);

export default About;
