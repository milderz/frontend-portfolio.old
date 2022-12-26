import { StyledTag } from "./Styles/Tag.styled";

function Tag({ tagName, tagColor }) {
  return (
    <StyledTag tagColor={tagColor}>
      <p className="tag-name">{tagName}</p>
    </StyledTag>
  );
}

export default Tag;
