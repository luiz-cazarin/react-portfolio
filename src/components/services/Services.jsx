import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Prototyping of Web and Mobile systems using figma</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>
                Diagram creation that maps each step a user takes when using a
                system
              </p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>App mockup design</p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article className="service">
          <div className="service__head">
            <h3>Systems development</h3>
          </div>
          <ul className="service__list">
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Development of Web and Mobile systems</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Code optimization and improvement</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Database creation and modeling</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Create and Consume RESTful APIs</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Creation of 3D element manipulation functionalities</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Development of responsive systems</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Treatment of trees and large volumes of data</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>
                Migration and treatment of data from PostgreSQL database to
                CouchDB
              </p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Automation of systems and processes</p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article className="service">
          <div className="service__head">
            <h3>Competence</h3>
          </div>
          <ul className="service__list">
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Teamwork using the scrum methodology</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>English in all processes</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Software Testing and Debugging</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Implementation of system improvements</p>
            </li>
            <li>
              <div className="service__list__box-icon">
                <BsCheckLg className="service__list-icon" />
              </div>
              <p>Good information security practices</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
