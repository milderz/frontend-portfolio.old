import { useState } from "react";
import React, { useRef } from "react";
import MainButton from "./MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledContactSection } from "./Styles/ContactSection.styled";
import {
  faPaperPlane,
  faArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";

function ContactSection() {
  const form = useRef();

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
      sendEmail();
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_tfdrsqd",
        "template_gpor08u",
        form.current,
        "flzT7xi3wlITXflpu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <Fade>
              <form action="submit" ref={form}>
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
            </Fade>
          </div>
        </>
      )}

      <div className="contact-section-right">
        <Fade>
          <h3>Let's talk</h3>
          <a
            href="mailto: mzunax@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            mzunax@gmail.com
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </a>
        </Fade>
      </div>
    </StyledContactSection>
  );
}

export default ContactSection;
