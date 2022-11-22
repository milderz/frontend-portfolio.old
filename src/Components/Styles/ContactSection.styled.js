import styled from "styled-components";

export const StyledContactSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-bottom: 5.5rem;
  height: 100%;

  .submitted-form {
    flex: 1;
    padding: 12.6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-black);
    border-radius: 0.6rem;
    animation: fadeIn 1s ease;

    svg {
      height: 6rem;
      color: var(--yellow);
    }

    p {
      padding: 2.8rem 0;
      font-size: 1.8rem;
      color: var(--main-white);
    }

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }

  .contact-section-left {
    flex: 1;
  }
  .contact-section-right {
    flex: 1;
    display: flex;
    align-items: end;
    justify-content: flex-start;
    flex-direction: column;

    height: 100%;

    @media screen and (max-width: 700px) {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      width: 33.7rem;
      padding: 4rem 0;
    }
    @media screen and (max-width: 460px) {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    p {
      font-size: 2.8rem;
      color: var(--main-white);
      @media screen and (max-width: 700px) {
        font-size: 1.8rem;
      }
    }

    a {
      font-size: 1.6rem;
      color: var(--main-white);

      svg {
        color: var(--yellow);
      }

      :hover {
        color: var(--yellow);
        text-decoration: underline;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;

    label {
      height: 5.2rem;
      margin-bottom: 2.4rem;
      position: relative;
    }

    label.empty-input {
      ::after {
        content: "This is required";
        color: var(--yellow);
        position: absolute;
        top: 1.8rem;
        right: 1.2rem;
        transform: translateY(-50%);
      }
    }

    input {
      background-color: var(--secondary-black);
      border: 0.2rem solid transparent;

      width: 100%;
      border-radius: 0.6rem;
      color: var(--main-white);
      padding: 1.2rem;
      font-size: 1.6rem;
    }

    textarea.empty-input {
      background-color: red;
    }

    .message-label {
      height: 16.4rem;
      textarea {
        background-color: var(--secondary-black);
        border: 0.2rem solid transparent;
        height: 100%;
        width: 100%;
        border-radius: 0.6rem;
        color: var(--main-white);
        padding: 1.2rem;
        font-size: 1.6rem;
        resize: none;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
