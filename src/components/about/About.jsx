import React from "react";
import "./about.css";
import ME from "../../assets/art.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+2 Yers Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>+200 Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>+30 Completed</small>
            </article>
          </div>
          <div className="about__content">
            <p>
              Hello, my name is Luiz Claudio, I'm 21 years old and I'm
              passionate about technology, from an early age I try to understand
              how everything works, researching and learning on my own, I have
              experience in startups like full-stack developer, as well as
              personal and academic projects. These experiences allowed me to
              develop autonomy in the development of different projects, working
              in teams using the scrum methodology. I am highly motivated to
              continue learning and I am looking for an opportunity to
              contribute to the development of different projects.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
