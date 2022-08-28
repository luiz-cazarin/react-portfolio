import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontendData = [
    {
      title: "Vue",
      level: "Advancing",
    },
    {
      title: "Vuetify",
      level: "Advancing",
    },
    {
      title: "Quasar",
      level: "Advancing",
    },
    {
      title: "Nuxt",
      level: "Intermediary",
    },
    {
      title: "HTML",
      level: "Advancing",
    },
    {
      title: "CSS",
      level: "Advancing",
    },
    {
      title: "SASS",
      level: "Experienced",
    },
    {
      title: "JavaScript",
      level: "Advancing",
    },
    {
      title: "TypeScript",
      level: "Intermediary",
    },
    {
      title: "Bootstrap",
      level: "Intermediary",
    },
    {
      title: "Tailwind",
      level: "Intermediary",
    },
    {
      title: "React",
      level: "Experienced",
    },
    {
      title: "Next",
      level: "Experienced",
    },
    {
      title: "MaterialUI",
      level: "Intermediary",
    },
    {
      title: "Figma",
      level: "Experienced",
    },
    {
      title: "Three.js",
      level: "Intermediary",
    },
  ];
  const backendData = [
    {
      title: "Node.js",
      level: "Experienced",
    },
    {
      title: "Express",
      level: "Experienced",
    },
    {
      title: "Axios",
      level: "Advancing",
    },
    {
      title: "RESTful",
      level: "Experienced",
    },
    {
      title: "Java",
      level: "Advancing",
    },
    {
      title: "Spring Boot",
      level: "Intermediary",
    },
    {
      title: "Docker",
      level: "Basic",
    },
    {
      title: "PostgreSQL",
      level: "Advancing",
    },
    {
      title: "MongoDB",
      level: "Intermediary",
    },
    {
      title: "CouchDB",
      level: "Experienced",
    },
    {
      title: "Python3",
      level: "Intermediary",
    },
    {
      title: "Flask",
      level: "Basic",
    },
    {
      title: "Linguagem C",
      level: "Experienced",
    },
    {
      title: "Git",
      level: "Experienced",
    },

  ];
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendData.map(({ title, level }) => {
              return (
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* END FRONT-END SKILLS */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendData.map(({title, level}) => {
              return (
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
