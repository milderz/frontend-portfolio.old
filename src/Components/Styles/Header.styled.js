import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--main-black);
  height: 6.3rem;
  border-bottom: 0.01px solid #ededed4f;

  .header-content {
    width: 77%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 1280px) {
      width: 90%;
    }
  }

  img {
    height: 2.5rem;
  }
`;

export const StyledLogo = styled.div`
  flex: 1;
`;
