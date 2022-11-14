import { StyledMainButton } from "./Styles/MainButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainButton({ btnText, icon, handleFormSubmit }) {
  return (
    <StyledMainButton onClick={handleFormSubmit}>
      <FontAwesomeIcon icon={icon} />
      {btnText}
    </StyledMainButton>
  );
}

export default MainButton;
