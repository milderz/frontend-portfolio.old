import { StyledHero } from "./Styles/Hero.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

function Hero() {
  return (
    <StyledHero>
      <div className="hero-content">
        <div className="hero-content-left">
          <Fade>
            <h2>Milder</h2>
            <h2>Navarro</h2>
            <div className="line"></div>

            <ul className="social-links">
              <li>
                <a
                  href="https://github.com/milderz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/milder-navarro-068267216/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </Fade>
        </div>
        <div className="hero-content-right">
          <Fade>
            <div className="about-title">
              <div className="title-line"></div>
              <p>About</p>
            </div>
            <div className="about-text">
              <h3>Frontend Developer </h3>
              <p>Developing modern websites that help businesses to grow!</p>
            </div>
            <a className="more-about" href="#about">
              <p>More about me </p> <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </Fade>
        </div>
      </div>
    </StyledHero>
  );
}

export default Hero;
