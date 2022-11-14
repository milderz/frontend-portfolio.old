import { StyledNavLinks } from "./Styles/NavLinks.styled";

function NavLinks({ mobileBtnActive }) {
  return (
    <StyledNavLinks mobileBtnActive={mobileBtnActive}>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </StyledNavLinks>
  );
}

export default NavLinks;
