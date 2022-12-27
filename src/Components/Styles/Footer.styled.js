import styled from "styled-components";

export const StyledFooter = styled.section`
  height: 12.5rem;
  background-color: var(--yellow);

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 77%;
    margin: auto;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }

    @media screen and (max-width: 700px) {
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .footer-logo {
    img {
      height: 2.2rem;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      padding: 0 2rem;
      a {
        svg {
          height: 2rem;
          color: var(--main-black);
        }

        :hover {
          svg {
            color: var(--main-white);
          }
        }
      }
    }
  }

  .copy {
    font-size: 1.6rem;
    font-weight: 500;
  }

  @media screen and (max-width: 700px) {
    height: 25rem;
  }
`;
