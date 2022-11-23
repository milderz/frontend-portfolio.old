import { StyledSectionHeader } from "./Styles/SectionHeader.styled";
import Fade from "react-reveal/Fade";

function SectionHeader({ title, subtitle }) {
  return (
    <StyledSectionHeader>
      <Fade>
        <div className="header-content">
          <div className="title-container">
            <div className="line"></div>
            <h3>{title}</h3>
          </div>

          <h4>{subtitle}</h4>
        </div>
      </Fade>
    </StyledSectionHeader>
  );
}

export default SectionHeader;
