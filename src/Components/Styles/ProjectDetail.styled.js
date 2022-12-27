import styled from "styled-components";

export const StyledProjectDetail = styled.section`
  /* background-color: #ff009b17; */

  .content {
    width: 77%;
    /* margin: auto; */
    margin: 5.5rem auto;
    display: flex;
    align-items: center;
    gap: 6.8rem;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
    @media screen and (max-width: 990px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 128.8rem;
    }
    @media screen and (max-width: 575px) {
      height: 158.8rem;
    }

    .text-content {
      flex: 3;
      display: flex;
      flex-direction: column;
      gap: 3.8rem;

      @media screen and (max-width: 990px) {
        flex: 1;
      }

      p {
        color: #c8c8c8;
        @media screen and (max-width: 575px) {
          width: 100%;
        }
      }
    }

    .img-content {
      flex: 2.6;
      height: 36rem;
      width: 100%;
      border-radius: 0.6rem;
      @media screen and (max-width: 990px) {
        flex: 10;
        height: 20rem;
      }
    }
  }

  .previous-button {
    height: 3.1rem;
    width: 10.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    gap: 1.4rem;
    border: none;
    border-radius: 0.6rem;
    background-color: var(--secondary-black);
    color: var(--main-white);
    cursor: pointer;
    transition: all 0.2s ease;

    svg {
      color: var(--yellow);
    }

    :hover {
      background-color: var(--yellow);
      color: var(--main-black);

      svg {
        color: var(--main-black);
      }
    }
  }

  h3 {
    font-size: 2.8rem;
    color: var(--main-white);
  }

  p {
    color: var(--main-white);
    font-size: 1.6rem;
    white-space: pre-line;
  }

  .tags {
    display: flex;
  }

  .buttons {
    display: flex;
    gap: 3.8rem;

    @media screen and (max-width: 575px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;

      a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
