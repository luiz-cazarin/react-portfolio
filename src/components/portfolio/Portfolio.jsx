import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/IMG-2.jpg";
import IMG3 from "../../assets/IMG-3.png";
import IMG4 from "../../assets/IMG-4.png";
import IMG5 from "../../assets/IMG-5.png";
import IMG6 from "../../assets/IMG-6.png";
import IMG7 from "../../assets/IMG-7.png";

const portfolio = () => {
  const data = [
    {
      id: 0,
      image: IMG7,
      title: "This portfolio",
      github: "https://github.com/luiz-cazarin/react-portfolio",
      demo: "https://github.com/luiz-cazarin/react-portfolio",
    },
    {
      id: 1,
      image: IMG2,
      title: "Real-time Strategy Game",
      github: "https://github.com/luiz-cazarin/Jogo-Estrategia-em-Tempo-Real",
      demo: "https://github.com/luiz-cazarin/Jogo-Estrategia-em-Tempo-Real",
    },
    {
      id: 2,
      image: IMG3,
      title: "Delivery App",
      github: "https://github.com/luiz-cazarin/delivery-app",
      demo: "https://github.com/luiz-cazarin/delivery-app",
    },
    {
      id: 3,
      image: IMG4,
      title: "Devlearing Web Site",
      github: "https://github.com/luiz-cazarin/devlearning",
      demo: "https://dev-learningbr.vercel.app/",
    },
    {
      id: 4,
      image: IMG5,
      title: "Portfolio Web Site",
      github: "https://github.com/luiz-cazarin/portifolio",
      demo: "https://luiz-cazarin.web.app/",
    },
    {
      id: 5,
      image: IMG6,
      title: "Vue Nuxt Project",
      github: "https://github.com/luiz-cazarin/Vue-Nuxt-Project",
      demo: "https://github.com/luiz-cazarin/Vue-Nuxt-Project",
    },
  ];
  return (
    <section id="portfolio">
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
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
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

export default portfolio;
