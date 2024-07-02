import React, { useContext } from "react";
import RefContext from "../../store/ref-context";

import Header from "../Header/Header.component";
import Button from "../UI/Button/Button.component";

import { HomeSection, HomeTextWrapper, HomeWrapper } from "./Home.styles";

const Home = () => {
  const refCtx = useContext(RefContext);

  const onButtonClickHandler = () => {
    refCtx.welcomeSectionRefCtx.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <HomeWrapper>
      <Header />
      <HomeSection>
        <HomeTextWrapper>
          Effortless Trading <p>Maximum Profits</p>
        </HomeTextWrapper>
        <Button type="primary" value="See More" onClick={onButtonClickHandler}>
          See More
        </Button>
      </HomeSection>
    </HomeWrapper>
  );
};

export default Home;
