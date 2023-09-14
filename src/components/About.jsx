import "../index.css";

const About = () => (
  <section id="about">
    <div
      className="bg-primary bg-opacity-50 transition-opacity duration-100 
    flex flex-col gap-5 rounded-3xl drop-shadow-lg
    md:px-10 md:py-12 md:mx-12 p-6 mx-5"
    >
      <h2 className="section-heading text-center leading-tight px-4 text-secondary">
        About Me
      </h2>
      <p className="body-text text-secondary md:px-8">
        My name is <span className="font-semibold">Linda (she/her)</span>.
        Growing up as an only child with a constant curiosity for
        problem-solving and tinkering, I naturally fell in love with software
        development during my undergrad at UC Irvine. I am passionate about
        combining creative design and engineering to produce{" "}
        <span className="font-semibold">human-centered solutions</span>.
      </p>
      <p className="body-text text-secondary md:px-8">
        When I am not coding, you will likely find me secondhand shopping,
        gymming, or cooking!
      </p>
    </div>
  </section>
);

export default About;
