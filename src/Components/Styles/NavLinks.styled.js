import styled from "styled-components";

export const StyledNavLinks = styled.nav`
  z-index: 2;
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
      padding: 2.8rem;
      position: absolute;
      top: 6.5rem;
      height: 25rem;
      left: 50%;
      width: 100%;
      background-color: var(--yellow);
      color: var(--main-black);
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      visibility: ${({ mobileBtnActive }) =>
        mobileBtnActive ? "visible" : "hidden"};
      opacity: ${({ mobileBtnActive }) => (mobileBtnActive ? "1" : "0")};
      transform: translateX(-50%);
      max-width: 40rem;

      transition: all 0.4s ease;

      li {
        a {
          color: var(--main-black);
          font-weight: 600;
        }
      }
    }
  }
`;
