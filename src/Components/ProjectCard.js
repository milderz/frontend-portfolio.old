import { StyledProjectCard } from "./Styles/ProjectCard.styled";
import { Link } from "react-router-dom";
import Tag from "./Tag";

function ProjectCard({
  projectName,
  shortDescription,
  mainImage,
  labels,
  slug,
}) {
  return (
    <Link to={slug}>
      <StyledProjectCard bgImg={mainImage}>
        <div className="thumbnail"></div>
        <div className="card-info">
          <header>
            <h4 className="card-title">{projectName}</h4>
          </header>
          <p className="project-description">{shortDescription}</p>
          <div className="card-tags">
            {labels.map((label, index) => (
              <Tag tagColor={label.color} tagName={label.text} key={index} />
            ))}
          </div>
        </div>
      </StyledProjectCard>
    </Link>
  );
}

export default ProjectCard;
