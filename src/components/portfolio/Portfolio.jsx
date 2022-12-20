import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/IMG-2.jpg";
import IMG3 from "../../assets/IMG-3.png";
import IMG4 from "../../assets/IMG-4.png";
import IMG5 from "../../assets/IMG-5.png";
import IMG6 from "../../assets/IMG-6.png";
import IMG7 from "../../assets/IMG-7.png";
import IMG8 from "../../assets/page-coin.png";
import IMG9 from "../../assets/scholl.png";
import IMG10 from "../../assets/devscholl.png";
import IMG11 from "../../assets/web-nlw-art.png";
import IMG12 from "../../assets/nlw-apps.png";
import IMG13 from "../../assets/pokedex.png";
import IMG14 from "../../assets/listTel.png";
import IMG15 from "../../assets/mb-app.png";

const portfolio = () => {
  const data = [
    {
      id: 0,
      image: IMG7,
      title: "This portfolio",
      github: "https://github.com/luiz-cazarin/react-portfolio",
      demo: "https://react-portfolio-ee3c7.web.app/",
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
      title: "[VUE] Nuxt Project",
      github: "https://github.com/luiz-cazarin/Vue-Nuxt-Project",
      demo: "https://github.com/luiz-cazarin/Vue-Nuxt-Project",
    },
    {
      id: 5,
      image: IMG8,
      title: "[HTML CSS]Coin Page",
      github: "https://github.com/luiz-cazarin/Pagina-Coin",
      demo: "https://luiz-cazarin.github.io/Pagina-Coin/",
    },
    {
      id: 6,
      image: IMG9,
      title: "[Vuetify] First project",
      github: "https://github.com/luiz-cazarin/school-vuetify",
      demo: "https://github.com/luiz-cazarin/school-vuetify",
    },
    {
      id: 7,
      image: IMG10,
      title: "[Quasar] DEVScholl",
      github: "https://github.com/luiz-cazarin/DEVScholl",
      demo: "https://github.com/luiz-cazarin/DEVScholl",
    },
    {
      id: 8,
      image: IMG11,
      title: "[React] NLW WEB Esports",
      github: "https://github.com/luiz-cazarin/nlw-2022-web",
      demo: "https://github.com/luiz-cazarin/nlw-2022-web",
    },
    {
      id: 9,
      image: IMG12,
      title: "[ReactNative] NLW APP Esports",
      github: "https://github.com/luiz-cazarin/nlw-2022-mobile-ReactNative",
      demo: "https://github.com/luiz-cazarin/nlw-2022-mobile-ReactNative",
    },
    {
      id: 10,
      image: IMG13,
      title: "[Vue] Pokedex",
      github: "https://github.com/luiz-cazarin/Vue-Pokedex",
      demo: "https://vue-pokedex-orpin.vercel.app/",
    },
    {
      id: 11,
      image: IMG14,
      title: "[Quasar] Lista telefonica",
      github: "https://github.com/luiz-cazarin/Vue---Quasar-UMD-CRUD",
      demo: "https://github.com/luiz-cazarin/Vue---Quasar-UMD-CRUD",
    },
    {
      id: 12,
      image: IMG15,
      title: "[ReactNative] MB Ticket Sales",
      github: "https://github.com/luiz-cazarin/MB-ReactNative-App-Eventos",
      demo: "https://github.com/luiz-cazarin/MB-ReactNative-App-Eventos",
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
