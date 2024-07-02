import React, { useEffect } from "react";
import { useRef, useContext } from "react";

import RefContext from "../../store/ref-context";

import {
  FeautersSection,
  FeautersContainer,
  HowItWorksContainer,
  TextWrapper,
} from "./Features.styles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Features = () => {
  const refCtx = useContext(RefContext);
  const featuresSectionRef = useRef();
  const featuresContainerRef = useRef();
  const howItWorksContainerRef = useRef();

  const scrollAnimation = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: featuresSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: false,
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(
        featuresSectionRef.current,
        { x: "-100%" },
        { x: "0%", duration: 1 }
      );

    gsap
      .timeline(
        {
          scrollTrigger: {
            trigger: featuresSectionRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "restart reset restart restart",
          },
        },
        "<"
      )
      .fromTo(
        featuresContainerRef.current,
        { x: "-300%", y: "0%" },
        { x: "0%", y: "50%", duration: 2 }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: featuresSectionRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(
        howItWorksContainerRef.current,
        { x: "200%", y: "0%" },
        { x: "0%", y: "50%", duration: 2 }
      );
  };

  useEffect(() => {
    refCtx.setFeaturesSectionRefCtx(featuresSectionRef);
    scrollAnimation();
  }, [refCtx, featuresSectionRef]);

  return (
    <FeautersSection ref={featuresSectionRef}>
      <TextWrapper>
        <FeautersContainer ref={featuresContainerRef}>
          <h1>Key Features</h1>
          <ul>
            <li>
              <span>Automated Trading</span>
              <p>
                Let CryptoBot handle your trades automatically based on your
                predefined strategies.
              </p>
            </li>
            <li>
              <span>Customizable Strategies</span>
              <p>
                Tailor your trading strategies to suit your risk tolerance and
                investment goals.
              </p>
            </li>
            <li>
              <span>Backtesting</span>
              <p>
                Test your strategies against historical data to ensure their
                effectiveness before going live.
              </p>
            </li>
            <li>
              <span>Multi-Exchange Support</span>
              <p>
                Trade on multiple cryptocurrency exchanges simultaneously from
                one platform.
              </p>
            </li>
            <li>
              <span>Real-Time Alerts</span>
              <p>
                Stay informed with real-time alerts on significant market
                movements and trading opportunities.
              </p>
            </li>
          </ul>
        </FeautersContainer>
        <HowItWorksContainer ref={howItWorksContainerRef}>
          <h1>How It Works</h1>
          <ul>
            <li>
              <span>Contact Us</span>
              <p>Fill from and we will contact you to create your CryptoBot.</p>
            </li>
            <li>
              <span>Connect Your Exchange</span>
              <p>
                Securely link your cryptocurrency exchange accounts to
                CryptoBot.
              </p>
            </li>
            <li>
              <span>Set Your Strategy</span>
              <p>
                Customize your trading strategies or choose from pre-built
                options.
              </p>
            </li>
            <li>
              <span>Start Trading</span>
              <p>
                Activate CryptoBot and watch it execute trades on your behalf.
              </p>
            </li>
          </ul>
        </HowItWorksContainer>
      </TextWrapper>
    </FeautersSection>
  );
};

export default Features;
