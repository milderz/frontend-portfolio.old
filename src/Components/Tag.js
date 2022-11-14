import { StyledTag } from "./Styles/Tag.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Tag({ tagName, icon, tagColor, background }) {
  return (
    <StyledTag tagColor={tagColor} background={background}>
      <FontAwesomeIcon icon={icon} />
      <p className="tag-name">{tagName}</p>
    </StyledTag>
  );
}

export default Tag;
