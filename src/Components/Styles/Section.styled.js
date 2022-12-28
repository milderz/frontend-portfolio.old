import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ version }) =>
    version === "primary" ? "var(--main-black)" : "#242424"};

  .section-content {
    width: 77%;
    margin: auto;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
  }

  .about-me-text {
    flex: 1;
    padding-bottom: 5.5rem;

    p {
      padding: 1.6rem 0;
      width: 68ch;

      @media screen and (max-width: 780px) {
        width: auto;
        font-size: 1.4rem;
      }
    }
  }
`;
