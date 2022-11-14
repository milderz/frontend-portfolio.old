import { StyledNavLinks } from "./Styles/NavLinks.styled";

function NavLinks({ mobileBtnActive }) {
  return (
    <StyledNavLinks mobileBtnActive={mobileBtnActive}>
      <ul>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </StyledNavLinks>
  );
}

export default NavLinks;
