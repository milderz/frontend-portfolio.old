import ProjectCard from "./ProjectCard";
import { StyledProjectsGrid } from "./Styles/ProjectsGrid.styled";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import Tag from "./Tag";

function ProjectsGrid() {
  return (
    <StyledProjectsGrid id="projects">
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
        projectName="PhotoSnap"
        projectDescription="A marketing site for a photo-sharing app, created using React JS and Styled Components."
        webLink="https://photo-snap-site.netlify.app/"
        githubLink="https://github.com/milderz/Photosnap"
        bgImg="/photo-snap.webp"
      />
      <ProjectCard
        tags={
          <>
            <Tag tagName="REACT" icon={faReact} tagColor="#61dbfb" />
            <Tag tagName="FIREBASE" icon={faServer} tagColor="#ffcc01" />
          </>
        }
        projectName="Notes App"
        projectDescription="A note taking web app developed with React, Firebase and StyledComponents"
        webLink="https://thenotesappproject.netlify.app/"
        githubLink="https://github.com/milderz/notes-crud-app"
        bgImg="/notes.png"
      />
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
        projectName="Designo Studio"
        projectDescription="A portfolio website for a design agency, developed using React and Styled Components"
        webLink="https://designostudio.netlify.app/"
        githubLink="https://github.com/milderz/designo"
        bgImg="/designo.jpg"
      />
    </StyledProjectsGrid>
  );
}

export default ProjectsGrid;
