import styled from "styled-components";

export const StyledProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border: 0.2rem solid transparent;
  transition: all 0.4s ease;

  :hover {
    border: 0.2rem solid var(--yellow);
    h4 {
      color: var(--yellow);
    }
  }

  .thumbnail {
    flex: 23.6rem;

    background-color: var(--yellow);
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
      url(${({ bgImg }) => bgImg && bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
  }

  .card-info {
    flex: 20rem;
    background-color: var(--main-black);
    padding: 3rem 1.8rem 1.8rem 1.8rem;
    color: var(--main-white);
    border-bottom-left-radius: 1.6rem;
    border-bottom-right-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h4 {
      font-size: 1.6rem;
      font-weight: 600;
      transition: color 0.4s ease;
    }

    .project-description {
      font-size: 1.3rem;
      line-height: 1.5;
      padding-top: 1.8rem;
      flex-grow: 1;
    }
  }

  .card-tags {
    display: flex;
  }
`;
