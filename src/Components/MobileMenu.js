import React from "react";
import { useState } from "react";
import { StyledMobileMenu } from "./Styles/MobileMenu.styled";

function MobileMenu({ handleMobileMenuClick, mobileBtnActive }) {
  return (
    <StyledMobileMenu>
      <div
        className={`hamburger ${mobileBtnActive && "is-active"}`}
        id="hamburger-1"
        onClick={handleMobileMenuClick}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
