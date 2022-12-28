import { StyledSectionHeader } from "./Styles/SectionHeader.styled";
import { Fade } from "react-awesome-reveal";

function SectionHeader({ title, subtitle, id }) {
  return (
    <StyledSectionHeader>
      <div className="header-content" id={id}>
        <Fade>
          <div className="title-container">
            <div className="line"></div>
            <h3>{title}</h3>
          </div>

          <h4>{subtitle}</h4>
        </Fade>
      </div>
    </StyledSectionHeader>
  );
}

export default SectionHeader;
