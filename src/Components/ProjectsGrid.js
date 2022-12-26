import { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { StyledProjectsGrid } from "./Styles/ProjectsGrid.styled";
import projectsData from "../projectsData.json";

function ProjectsGrid() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <StyledProjectsGrid>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          shortDescription={project.shortDescription}
          mainImage={project.mainImage}
          labels={project.labels}
          slug={project.slug}
        />
      ))}
    </StyledProjectsGrid>
  );
}

export default ProjectsGrid;
