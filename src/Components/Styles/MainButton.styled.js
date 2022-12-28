import styled from "styled-components";

export const StyledMainButton = styled.a`
  margin: 1.6rem 0;
  cursor: pointer;
  background-color: var(--yellow);
  border: 0.2rem solid transparent;
  padding: 0.9rem 2.4rem;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--main-black);
  transition: all 0.4s ease;
  text-align: center;

  svg {
    margin-right: 1.6rem;
  }

  :hover {
    border: 0.2rem solid var(--yellow);
    background-color: transparent;
    color: var(--yellow);
  }
`;
