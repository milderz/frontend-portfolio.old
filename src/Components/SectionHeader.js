import { StyledSectionHeader } from "./Styles/SectionHeader.styled";

function SectionHeader({ title, subtitle }) {
  return (
    <StyledSectionHeader>
      <div className="header-content">
        <div className="title-container">
          <div className="line"></div>
          <h3>{title}</h3>
        </div>

        <h4>{subtitle}</h4>
      </div>
    </StyledSectionHeader>
  );
}

export default SectionHeader;
