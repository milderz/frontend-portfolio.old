import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ version }) =>
    version === "primary" ? "#1c1c1c" : "#242424"};

  .section-content {
    width: 77%;
    margin: auto;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
  }

  .about-me-text {
    flex: 1;
    padding-bottom: 5.5rem;
    color: var(--main-white);
    font-size: 1.6rem;

    p {
      padding: 1.6rem 0;
      line-height: 1.5;
      width: 68ch;
      font-size: 1.6rem;

      @media screen and (max-width: 780px) {
        width: auto;
        font-size: 1.4rem;
      }
    }
  }
`;
