import styled from "styled-components";

export const StyledSectionHeader = styled.header`
  color: var(--main-white);
  .header-content {
    width: 100%;
    margin: auto;

    h4 {
      font-size: 2.4rem;
      font-weight: 400;
      padding-bottom: 5.2rem;
      @media screen and (max-width: 700px) {
        font-size: 1.8rem;
        font-weight: 600;
      }
    }
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 5.5rem 0 3.8rem 0;
    .line {
      height: 0.4rem;
      width: 7rem;
      background-color: var(--yellow);
    }
    h3 {
      font-size: 1.6rem;
      padding-left: 1.8rem;
      font-weight: 400;
    }
  }
`;
