import { StyledFooter } from "./Styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo-black.svg" alt="" srcset="" />
        </div>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="#">
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
