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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emptyNameInput, setEmptyNameInput] = useState(false);
  const [emptyEmailInput, setEmptyEmailInput] = useState(false);
  const [emptyMessageInput, setEmptyMessageInput] = useState(false);

  const handleTextChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (formData.name === "") {
      setEmptyNameInput(true);
    }
    if (formData.email === "") {
      setEmptyEmailInput(true);
    }
    if (formData.message === "") {
      setEmptyMessageInput(true);
    }
    if (formData.name !== "") {
      setEmptyNameInput(false);
    }
    if (formData.email !== "") {
      setEmptyEmailInput(false);
    }
    if (formData.message !== "") {
      setEmptyMessageInput(false);
    }

    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      console.log(formData);

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
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
          <div className="contact-section-left" id="contact">
            <form action="submit">
              <label className={`${emptyNameInput && "empty-input"}`}>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  onChange={handleTextChange}
                />
              </label>
              <label className={`${emptyEmailInput && "empty-input"}`}>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  onChange={handleTextChange}
                />
              </label>
              <label
                className={`${
                  emptyMessageInput && "empty-input"
                } message-label`}
              >
                <textarea
                  placeholder="Tell me"
                  name="message"
                  onChange={handleTextChange}
                />
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
        <a
          href="mailto: mzunax@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mzunax@gmail.com{" "}
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </a>
      </div>
    </StyledContactSection>
  );
}

export default ContactSection;
