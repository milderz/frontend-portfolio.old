import ProjectCard from "./ProjectCard";
import { StyledProjectsGrid } from "./Styles/ProjectsGrid.styled";

import { faReact, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Tag from "./Tag";

function ProjectsGrid() {
  return (
    <StyledProjectsGrid>
      <ProjectCard
        tags={
          <>
            <Tag tagName="REACT" icon={faReact} tagColor="#61dbfb" />
            <Tag
              tagName="STYLED COMPONENTS"
              icon={faReact}
              background="linear-gradient(45deg, rgba(219,112,147,1) 0%, rgba(241,178,99,1) 100%);"
            />
          </>
        }
      />
      <ProjectCard
        tags={<Tag tagName="prueba" tagColor="#e599f7" icon={faTiktok} />}
      />
      <ProjectCard />
    </StyledProjectsGrid>
  );
}

export default ProjectsGrid;
