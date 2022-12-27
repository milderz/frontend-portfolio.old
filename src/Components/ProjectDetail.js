import React, { useEffect, useState } from "react";
import projectsData from "../projectsData.json";
import { useParams, useNavigate } from "react-router-dom";
import { StyledProjectDetail } from "./Styles/ProjectDetail.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import Tag from "./Tag";
import MainButton from "./MainButton";

const ProjectDetail = () => {
  const [projects, setProjects] = useState([]);
  let { name } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    setProjects(projectsData.filter((project) => project.slug === name));
  }, [name]);

  return (
    <>
      {projects.map((project) => (
        <StyledProjectDetail>
          <div className="content">
            <div className="text-content">
              <button className="previous-button" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} />
                BACK
              </button>
              <h3>{project.projectName}</h3>
              <p>{project.longDescription}</p>
              <div className="tags">
                {project.labels.map((label) => (
                  <Tag tagName={label.text} tagColor={label.color} />
                ))}
              </div>
              <div className="buttons">
                <MainButton btnText="Preview website" icon={faEye} />
                <MainButton btnText="Code " icon={faGithub} />
              </div>
            </div>
            <div
              className="img-content"
              style={{
                background: `url(${project.mainImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </StyledProjectDetail>
      ))}
    </>
  );
};

export default ProjectDetail;
