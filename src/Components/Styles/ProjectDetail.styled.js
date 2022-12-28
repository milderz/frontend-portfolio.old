import styled from "styled-components";

export const StyledProjectDetail = styled.section`
  .content {
    width: 77%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3.8rem;
    margin: 5.5rem auto;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 575px) {
    }

    .project-description {
      color: #c8c8c8;
      width: 100%;
    }

    .img-content {
      height: 36rem;
      width: 100%;
      border-radius: 0.6rem;
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

  header {
    display: flex;
    align-items: center;
    gap: 3.8rem;
  }

  p {
    white-space: pre-line;
  }

  .tags {
    display: flex;
  }

  .buttons {
    display: flex;
    gap: 1.9rem;
  }
`;
