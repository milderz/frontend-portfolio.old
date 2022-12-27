import styled from "styled-components";

export const StyledTag = styled.div`
  margin: 0 1.2rem 0 0;
  background-color: ${({ tagColor }) => tagColor && tagColor};
  background: ${({ background }) => background && background};
  display: flex;
  align-items: center;
  color: var(--main-black);
  padding: 0.3rem;
  border-radius: 0.3rem;

  svg {
    height: 1.6rem;
  }
  .tag-name {
    font-size: 1rem !important;
    font-weight: 800;
    padding: 0 1rem;
    color: var(--main-black);
  }
`;
