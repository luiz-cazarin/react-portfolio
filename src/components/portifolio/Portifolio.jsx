import React from "react";
import "./portifolio.css";
import IMG1 from "../../assets/P1.png";

const portifolio = () => {
  const data = [
    {
      id: 0,
      image: IMG1,
      title: "This is a portifolio item title",
      github: "https://github.com/luiz-cazarin/",
      demo: "https://dribbble.com/",
    },
    {
      id: 1,
      image: IMG1,
      title: "This is a portifolio item title",
      github: "https://github.com/luiz-cazarin/",
      demo: "https://dribbble.com/",
    },
    {
      id: 2,
      image: IMG1,
      title: "This is a portifolio item title",
      github: "https://github.com/luiz-cazarin/",
      demo: "https://dribbble.com/",
    },
    {
      id: 3,
      image: IMG1,
      title: "This is a portifolio item title",
      github: "https://github.com/luiz-cazarin/",
      demo: "https://dribbble.com/",
    },
  ];
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="p1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portifolio;
