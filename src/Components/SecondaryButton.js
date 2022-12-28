import React from "react";
import { StyledSecondaryButton } from "./Styles/SecondaryButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecondaryButton = ({ text, icon, path }) => {
  return (
    <StyledSecondaryButton href={path} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} />
      {text}
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
