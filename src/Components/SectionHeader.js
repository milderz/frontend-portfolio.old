import { StyledSectionHeader } from "./Styles/SectionHeader.styled";
import { Fade, Slide } from "react-awesome-reveal";

function SectionHeader({ title, subtitle, id }) {
  return (
    <StyledSectionHeader>
      <div className="header-content" id={id}>
        <Fade>
          <div className="title-container">
            <div className="line"></div>
            <h5>{title}</h5>
          </div>

          <h3>{subtitle}</h3>
        </Fade>
      </div>
    </StyledSectionHeader>
  );
}

export default SectionHeader;
