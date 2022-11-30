import styled from "styled-components";

export const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22.7rem, 1fr));
  grid-auto-rows: 22.7rem;
  grid-gap: 6rem;
  padding-bottom: 5.5rem;

  @media screen and (max-width: 889px) {
    grid-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: 13.7rem; */
  }
  @media screen and (max-width: 545px) {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 13.7rem;
  }
  .skill-card {
    background-color: var(--main-black);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 0.2rem solid transparent;
    transition: border 0.4s ease;
    border-radius: 0.8rem;

    @media screen and (max-width: 545px) {
      justify-content: space-evenly;
    }

    p {
      color: var(--main-white);
      font-size: 1.6rem;
      font-weight: 600;
      padding: 1.6rem 0;
      transition: color 0.4s ease;
      @media screen and (max-width: 545px) {
        padding: 0;
        font-size: 1.2rem;
      }
      @media screen and (max-width: 426px) {
        padding: 0;
        font-size: 1.1rem;
        text-align: center;
      }
    }

    svg {
      height: 6rem;
      path {
        fill: var(--main-white);
        transition: fill 0.4s ease;
      }
      @media screen and (max-width: 545px) {
        height: 3.6rem;
      }
    }

    :hover {
      border: 0.2rem solid var(--yellow);
      svg {
        path {
          fill: var(--yellow);
        }
      }

      p {
        color: var(--yellow);
      }
    }
  }
`;
