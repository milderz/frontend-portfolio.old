import { StyledProjectCard } from "./Styles/ProjectCard.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({
  tags,
  projectName,
  projectDescription,
  githubLink,
  webLink,
  bgImg,
}) {
  return (
    <StyledProjectCard bgImg={bgImg}>
      <div className="thumbnail"></div>
      <div className="card-info">
        <header>
          <h4 className="card-title">{projectName}</h4>
          <div className="projects-links">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
            <a href={webLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </div>
        </header>
        <p className="project-description">{projectDescription}</p>
        <div className="card-tags">{tags}</div>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
