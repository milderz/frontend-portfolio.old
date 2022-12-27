import styled from "styled-components";

export const StyledProjectDetail = styled.section`
  background-color: var(--main-black);
  height: 100vh;

  .content {
    width: 77%;
    margin: auto;
    height: 100%;
    @media screen and (max-width: 1280px) {
      width: 90%;
    }
  }

  .previous-button {
    height: 3.1rem;
    width: 10.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    gap: 1.4rem;
    border: none;
    border-radius: 0.6rem;
    background-color: var(--secondary-black);
    color: var(--main-white);
    cursor: pointer;
    transition: all 0.2s ease;

    svg {
      color: var(--yellow);
    }

    :hover {
      background-color: var(--yellow);
      color: var(--main-black);

      svg {
        color: var(--main-black);
      }
    }
  }

  h3 {
    font-size: 2.8rem;
    color: var(--main-white);
  }

  p {
    color: var(--main-white);
    font-size: 1.6rem;
    white-space: pre-line;
  }

  .tags {
    display: flex;
  }
`;
