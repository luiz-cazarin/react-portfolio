import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3wr57c3",
        "template_me9clif",
        form.current,
        "_35mmc_561GsOqiQl"
      )
      .then(
        (result) => {
          window.alert("Your message has been sent successfully!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>cazarin.junior@gmail.com</h5>
            <a
              href="mailto:cazarin.junior@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <GrLinkedinOption className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Luiz Claudio</h5>
            <a
              href="https://www.linkedin.com/in/luiz-claudio-cazarin/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 (61)98301-7727</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5561983017727"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="You Full Name" required />
          <input type="email" name="email" placeholder="You Email" required />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
