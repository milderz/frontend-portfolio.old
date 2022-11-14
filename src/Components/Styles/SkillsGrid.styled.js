import styled from "styled-components";

export const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22.7rem, 1fr));
  grid-auto-rows: 22.7rem;
  grid-gap: 6rem;
  padding-bottom: 5.5rem;
  .skill-card {
    background-color: var(--main-black);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 0.2rem solid transparent;
    transition: border 0.4s ease;

    p {
      color: var(--main-white);
      font-size: 1.6rem;
      font-weight: 600;
      padding: 1.6rem 0;
      transition: color 0.4s ease;
    }

    svg {
      height: 6rem;
      path {
        fill: var(--main-white);
        transition: fill 0.4s ease;
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
