import "../index.css";
import { FaStar } from "react-icons/fa";

const About = () => (
  <section id="about" className="bg-secondary">
    <div
      className="bg-text text-background rounded-t-[3rem]
    sm:px-12 sm:py-10 px-8 py-8 mb-[-22%]"
    >
      <div className="mb-[25%]">
        <div className="heading-with-icon">
          <FaStar size="24" />
          <h2 className="section-heading ">About Me</h2>
        </div>
        <p className="body-text text-justify md:px-24">
          My name is <span className="font-bold">Linda (she/her)</span>. Growing
          up as an only child with a constant curiosity for problem-solving and
          tinkering, I naturally fell in love with software development during
          my undergrad at UC Irvine. I am passionate about combining creative
          design and engineering to produce{" "}
          <span className="font-bold">human-centered solutions</span>.
          <br />
          When I am not coding, you will likely find me secondhand shopping,
          gymming, or traveling to new places with friends!
        </p>
      </div>
    </div>
  </section>
);

export default About;
