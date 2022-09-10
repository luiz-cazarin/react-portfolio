import React from "react";
import "./workExperience.css";

const WorkExperience = () => {
  return (
    <section id="workExperience">
      <h5>About my career</h5>
      <h2>Work Experience</h2>
      <h4>Vidya Technology | Since june of 2021</h4>
      <div className="container">
        <div className="workExperience__content">
          <p>
            Responsible for the development of web and mobile tools, using as
            technologies, Vue2 with Vuetify (Web) and Vue3 with Quasar (Mobile),
            Java with SQL and noSQL database (PosgreSQL, CouchDB), experience
            with Digital Twin, web and mobile systems with database replication,
            code optimization, data handling, responsive layouts, improvements
            and new features, libraries for manipulating 3D elements such as
            Three.js, Autodesk Forge, software testing, language bug fixes, and
            development of new tasks, GIT, GitLab, RESTfull, uses scrum
            methodology and English in all processes
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
