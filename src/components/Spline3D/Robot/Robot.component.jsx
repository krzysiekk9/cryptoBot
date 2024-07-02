import React, { Fragment } from "react";
import { useRef, useEffect, useState, useContext } from "react";
import RefContext from "../../../store/ref-context";

import Spline from "@splinetool/react-spline";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Robot } from "./Robot.styles";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SplineRobot = () => {
  const bot = useRef();

  const [isLoaded, setIsLoaded] = useState(false); //is 3D robot loaded

  const refCtx = useContext(RefContext);

  const welcomeSection = refCtx.welcomeSectionRefCtx;
  const whySection = refCtx.whySectionRefCtx;
  const feauturesSection = refCtx.featuresSectionRefCtx;
  const formSection = refCtx.formSectionRefCtx;

  useEffect(() => {
    //after robot loaded and refs in context - animate
    if (
      bot.current &&
      whySection &&
      welcomeSection &&
      feauturesSection &&
      formSection
    ) {
      gsap.set(bot.current.scale, { x: 0.8, y: 0.8, z: 0.8 });
      gsap.set(bot.current.position, { x: 1000, y: 0 }); //set robot outside the view

      gsap
        .timeline({
          scrollTrigger: {
            trigger: welcomeSection.current,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(bot.current.scale, { x: 0.8, y: 0.8, z: 0.8 })
        .to(bot.current.position, { x: 180, y: 0 }, 0);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: whySection.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(bot.current.scale, { x: 1.2, y: 1.2, z: 1.2 })
        .to(bot.current.position, { x: 220, y: -250 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: feauturesSection.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(bot.current.scale, { x: 0.6, y: 0.6, z: 0.6 })
        .to(bot.current.position, { x: -250, y: 0 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: formSection.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(bot.current.scale, { x: 1.2, y: 1.2, z: 1.2 })
        .to(bot.current.position, { x: 220, y: -280 }, 0);
    }
  }, [isLoaded, whySection, welcomeSection, feauturesSection, formSection]);

  const onLoad = async (spline) => {
    const obj = await spline.findObjectByName("Bot");
    bot.current = await obj;

    if (bot.current) {
      setIsLoaded(true);
    }
  };

  return (
    <Fragment>
      <Robot>
        <Spline
          scene="https://prod.spline.design/0KspFQ3tzSZZN2S2/scene.splinecode"
          onLoad={onLoad}
        />
      </Robot>
    </Fragment>
  );
};

export default SplineRobot;
