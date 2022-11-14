import styled from "styled-components";

export const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.6rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

  .thumbnail {
    flex: 23.6rem;
    background-color: var(--yellow);
    background: url("/photo-snap.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
  }

  .card-info {
    flex: 20rem;
    background-color: var(--main-black);
    padding: 1.8rem;
    color: var(--main-white);
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h4 {
      font-size: 1.6rem;
      font-weight: 600;
    }

    p {
      font-size: 1.3rem;
      line-height: 1.5;
    }
  }

  .card-tags {
    display: flex;
  }
`;
