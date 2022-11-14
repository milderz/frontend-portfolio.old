import styled from "styled-components";

export const StyledProjectsGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 43.6rem;
  grid-gap: 3.6rem;
  padding-bottom: 8.2rem;

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
