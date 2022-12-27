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

  .header-link {
    color: var(--main-white);
    font-size: 1.6rem;
    height: 3.1rem;
    background-color: var(--secondary-black);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    border-radius: 0.6rem;
    transition: all 0.2s ease;

    svg {
      padding-right: 1.6rem;
    }

    :hover {
      color: var(--main-black);
      background-color: var(--yellow);
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

  .buttons {
    /* width: 100%; */
    display: flex;
    /* justify-content: space-between; */
    gap: 1.9rem;
  }
`;
