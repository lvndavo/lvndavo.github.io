import { HiPaperAirplane } from "react-icons/hi2";
import { socialLinks } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="reverse-gradient-section pb-12">
      <div className="heading-with-icon text-text mt-10">
        <HiPaperAirplane size="25" />
        <h2 className="section-heading text-text text-center">Contact Me</h2>
      </div>

      <div className="flex justify-center gap-4">
        {socialLinks.map((link) => (
          <div
            key={link.id}
            className="social-link text-text drop-shadow-lg font-josefinsans
            text-base flex flex-col items-center"
          >
            <a href={link.link} className="text-5xl" target="_blank">
              {link.icon}
            </a>
            {link.title}
          </div>
        ))}
      </div>

      <div></div>
    </section>
  );
};

export default Contact;
