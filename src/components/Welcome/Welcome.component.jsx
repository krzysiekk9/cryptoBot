import React, { useContext, useEffect, useRef } from "react";

import {
  WelcomeSection,
  WelcomeTextWrapper,
  WelcomeTitle,
  WelcomeText,
} from "./Welcome.styles";
import RefContext from "../../store/ref-context";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Welcome = () => {
  const refCtx = useContext(RefContext);
  const welcomeSectionRef = useRef();
  const welcomeTextRef = useRef();
  const welcomeTitleRef = useRef();

  useEffect(() => {
    refCtx.setWelcomeSectionRefCtx(welcomeSectionRef);
    scrollAnimation();
  }, [refCtx, welcomeSectionRef]);

  const scrollAnimation = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: welcomeSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(welcomeSectionRef.current, { x: "-100%" }, { x: "0%" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: welcomeSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(welcomeTitleRef.current, { y: "200%" }, { y: "-150%" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: welcomeSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(welcomeTextRef.current, { y: "200%" }, { y: "-100%" });
  };

  return (
    <WelcomeSection ref={welcomeSectionRef}>
      <WelcomeTextWrapper>
        <WelcomeTitle ref={welcomeTitleRef}>Future of Trading</WelcomeTitle>
        <WelcomeText ref={welcomeTextRef}>
          In the dynamic world of cryptocurrency trading, having the right tools
          can make all the difference. Introducing CryptoBot, the cutting-edge
          crypto trading bot designed to help you navigate the complexities of
          the crypto market with ease and confidence. Whether you're a seasoned
          trader or a newcomer, CryptoBot is your ultimate trading companion.
        </WelcomeText>
      </WelcomeTextWrapper>
    </WelcomeSection>
  );
};

export default Welcome;
