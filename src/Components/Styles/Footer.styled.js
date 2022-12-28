import styled from "styled-components";

export const StyledFooter = styled.section`
  height: 12.5rem;
  background-color: var(--yellow);

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 2rem 0;
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
    flex: 1;
    img {
      height: 2.2rem;
    }
  }

  ul {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    li {
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

  .contact {
    display: flex;
    justify-content: end;
    flex: 1;
    a {
      color: var(--main-black);

      :hover {
        color: var(--main-black);
        text-decoration: underline;
      }
    }

    svg {
      color: var(--main-yellow);
      padding-left: 1.6rem;
      font-size: 1.6rem;
    }

    @media screen and (max-width: 700px) {
      align-items: flex-end;
    }
  }

  @media screen and (max-width: 700px) {
    height: 25rem;
  }
`;
