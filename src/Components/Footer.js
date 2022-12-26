import { StyledFooter } from "./Styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo-black.svg" alt="" srcSet="" />
        </div>
        <ul>
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
        <p className="copy">© Milder Navarro</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
