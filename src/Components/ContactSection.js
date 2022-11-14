import MainButton from "./MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledContactSection } from "./Styles/ContactSection.styled";
import {
  faPaperPlane,
  faArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  return (
    <StyledContactSection>
      {formSubmitted ? (
        <div className="submitted-form">
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>Message submitted</p>
        </div>
      ) : (
        <>
          <div className="contact-section-left">
            <form action="submit">
              <label>
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                <input type="email" placeholder="Your email" />
              </label>
              <label>
                <textarea placeholder="Tell me" />
              </label>
              <MainButton
                btnText="Send"
                icon={faPaperPlane}
                handleFormSubmit={handleFormSubmit}
              />
            </form>
          </div>
        </>
      )}

      <div className="contact-section-right">
        <p>Let's talk</p>
        <a href="#">
          mzunax@gmail.com{" "}
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </a>
      </div>
    </StyledContactSection>
  );
}

export default ContactSection;
