import styled from "styled-components";

export const StyledNavLinks = styled.nav`
  height: 100%;
  flex: 1;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    li {
      height: 100%;

      a {
        font-size: 1.6rem;
        color: var(--main-white);

        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        letter-spacing: 0.125rem;

        ::after {
          position: absolute;
          bottom: 0;
          content: "";
          width: 100%;
          height: 0.4rem;
          background-color: var(--yellow);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        :hover::after {
          opacity: 1;
        }
      }
    }

    @media screen and (max-width: 800px) {
      padding: 4.8rem;
      position: absolute;
      top: 6.5rem;
      height: 100vh;
      right: 0;
      width: 80%;
      background-color: var(--secondary-black);
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;

      transform: ${({ mobileBtnActive }) =>
        mobileBtnActive ? "translateX(0)" : "translateX(100%)"};
      transition: transform 0.4s ease;

      li {
        height: auto;
        padding: 2.8rem 0;
      }
    }
  }
`;
