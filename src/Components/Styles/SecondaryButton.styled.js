import styled from "styled-components";

export const StyledSecondaryButton = styled.a`
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
    color: var(--yellow);
  }

  :hover {
    color: var(--main-black);
    background-color: var(--yellow);

    svg {
      color: var(--main-black);
    }
  }
`;
