import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontendData = [
    {
      title: "Vue",
      level: "Experienced",
    },
    {
      title: "Vuetify",
      level: "Experienced",
    },
    {
      title: "Quasar",
      level: "Experienced",
    },
    {
      title: "Nuxt",
      level: "Experienced",
    },
    {
      title: "HTML",
      level: "Experienced",
    },
    {
      title: "CSS",
      level: "Experienced",
    },
    {
      title: "SASS",
      level: "Experienced",
    },
    {
      title: "JavaScript",
      level: "Experienced",
    },
    {
      title: "TypeScript",
      level: "Experienced",
    },
    {
      title: "Bootstrap",
      level: "Experienced",
    },
    {
      title: "Tailwind",
      level: "Experienced",
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
      level: "Experienced",
    },
    {
      title: "Figma",
      level: "Experienced",
    },
    {
      title: "Three.js",
      level: "Experienced",
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
      level: "Experienced",
    },
    {
      title: "RESTful",
      level: "Experienced",
    },
    {
      title: "Java",
      level: "Experienced",
    },
    {
      title: "Spring Boot",
      level: "Experienced",
    },
    {
      title: "Docker",
      level: "Experienced",
    },
    {
      title: "PostgreSQL",
      level: "Experienced",
    },
    {
      title: "MongoDB",
      level: "Experienced",
    },
    {
      title: "CouchDB",
      level: "Experienced",
    },
    {
      title: "Python3",
      level: "Experienced",
    },
    {
      title: "Flask",
      level: "Experienced",
    },
    {
      title: "Linguagem C",
      level: "Experienced",
    },
    {
      title: "Firebase",
      level: "Experienced",
    },
    {
      title: "Heroku",
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
