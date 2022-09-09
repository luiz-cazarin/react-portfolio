import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/astro1.png";
import PLANETS from "../../assets/planetas.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Luiz Claudio</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />
        <a href="#about">
          <div className="me">
            <img className="me-2" src={ME} alt="me" />
            <img className="me-1" src={PLANETS} alt="me" />
          </div>
        </a>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
