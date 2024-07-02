import React, { useContext } from "react";
import RefContext from "../../store/ref-context";

import logo from "../../assets/logo.png";

import { HeaderCont, HeaderNavigation } from "./Header.styles";

const Header = () => {
  const refCtx = useContext(RefContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML);
    if (event.target.innerHTML === "See More") {
      refCtx.welcomeSectionRefCtx.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (event.target.innerHTML === "Why Us") {
      refCtx.whySectionRefCtx.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (event.target.innerHTML === "Contact") {
      refCtx.formSectionRefCtx.current.scrollIntoView({
        block: "start",
      });
    }
  };

  return (
    <HeaderCont>
      <img src={logo} alt="logo" />
      <HeaderNavigation>
        <a href="#" onClick={onClickHandler}>
          See More
        </a>
        <a href="#" onClick={onClickHandler}>
          Why Us
        </a>
        <a href="#" onClick={onClickHandler}>
          Contact
        </a>
      </HeaderNavigation>
    </HeaderCont>
  );
};

export default Header;
