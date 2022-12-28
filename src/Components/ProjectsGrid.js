import { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { StyledProjectsGrid } from "./Styles/ProjectsGrid.styled";
import projectsData from "../projectsData.json";
import { Fade } from "react-awesome-reveal";

function ProjectsGrid() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <StyledProjectsGrid>
      {projects.map((project, index) => (
        <Fade cascade>
          <ProjectCard
            key={index}
            projectName={project.projectName}
            shortDescription={project.shortDescription}
            mainImage={project.mainImage}
            labels={project.labels}
            slug={project.slug}
          />
        </Fade>
      ))}
    </StyledProjectsGrid>
  );
}

export default ProjectsGrid;
