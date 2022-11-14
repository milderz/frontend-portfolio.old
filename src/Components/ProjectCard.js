import { StyledProjectCard } from "./Styles/ProjectCard.styled";

function ProjectCard({ tags }) {
  return (
    <StyledProjectCard>
      <div className="thumbnail"></div>
      <div className="card-info">
        <h4 className="card-title">Project name</h4>
        <p className="project-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          hic facere atque, aspernatur asperiores veniam.
        </p>
        <div className="card-tags">{tags}</div>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
