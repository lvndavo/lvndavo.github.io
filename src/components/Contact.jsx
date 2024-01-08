import { HiPaperAirplane } from "react-icons/hi2";
import { socialLinks } from "../constants";

const Contact = () => {
  // const submitForm = async (target) => {
  //   try {
  //     const formData = new FormData(target);
  //     const response = await fetch(
  //       "https://getform.io/f/ef9fb58f-6665-44f8-9a68-452b93056ad8",
  //       {
  //         method: "POST",
  //         body: formData,
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.statusText}`);
  //     } else console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <section
      id="contact"
      className="reverse-gradient-section p-6 sm:p-10 pb-10"
    >
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 drop-shadow-lg">
        <div
          className="bg-accentOrange-300 col-span-1 p-6 rounded-br-3xl rounded-bl-3xl lg:rounded-tl-3xl lg:rounded-br-none
        flex justify-center gap-5 items-center"
        >
          {socialLinks.map((link) => (
            <div
              key={link.id}
              className="social-link text-cream drop-shadow-lg font-josefinsans text-lg sm:text-xl font-semibold
              flex flex-col items-center transition-all duration-100"
            >
              <a href={link.link} className="text-5xl" target="_blank">
                {link.icon}
              </a>
              {link.title}
            </div>
          ))}
        </div>
        <div
          className="bg-cream col-span-2 p-8 rounded-tl-3xl rounded-tr-3xl lg:rounded-br-3xl lg:rounded-tl-none
        flex flex-col items-center gap-3"
        >
          <div className="heading-with-icon text-lightGreen-500">
            <HiPaperAirplane size="25" />
            <h2 className="section-heading text-center">Contact Me</h2>
          </div>
          <form
            className="md:px-6"
            action="https://getform.io/f/ef9fb58f-6665-44f8-9a68-452b93056ad8"
            method="POST"
          >
            <div className="font-josefinsans font-bold text-darkGreen-700 md:grid md:grid-cols-6 md:gap-2">
              <label htmlFor="first-name" className="col-span-1 md:self-center">
                FIRST NAME*
              </label>
              <input
                name="first-name"
                id="first-name"
                type="text"
                className="input col-span-2 mb-2 md:mb-0 "
                required
              />
              <label
                htmlFor="last-name"
                className="col-span-1 md:self-center md:text-center"
              >
                LAST NAME*
              </label>
              <input
                name="last-name"
                id="last-name"
                type="text"
                className="input col-span-2 mb-2 md:mb-0"
                required
              />
              <label htmlFor="email" className="col-span-1 md:self-center">
                EMAIL*
              </label>
              <input
                name="email"
                id="email"
                type="email"
                className="input md:col-span-5 mb-2 md:mb-0"
                required
              />
              <label htmlFor="subjext" className="col-span-1 md:self-center">
                SUBJECT*
              </label>
              <input
                name="subject"
                id="subject"
                type="text"
                className="input md:col-span-5 mb-2 md:mb-0"
                required
              />
              <label htmlFor="message" className="col-span-1 md:self-center">
                MESSAGE*
              </label>
              <textarea
                name="message"
                id="message"
                className="input md:col-span-5"
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <input
                type="submit"
                value="SEND MESSAGE"
                className="send-button font-young_serif px-5 py-4 bg-lightGreen-500 text-cream rounded-full
                hover:cursor-pointer hover:bg-opacity-90 transition-all duration-100"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
