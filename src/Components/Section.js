import React from "react";

import { StyledSection } from "./Styles/Section.styled";

function Section({ children, version, height }) {
  return (
    <StyledSection version={version} height={height}>
      <section className="section-content">{children}</section>
    </StyledSection>
  );
}

export default Section;
