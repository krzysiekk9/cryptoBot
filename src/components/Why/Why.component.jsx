import React, { useRef, useState, useContext, useEffect } from "react";
import RefContext from "../../store/ref-context";

import {
  WhySection,
  WhyTextWrapper,
  WhyTitle,
  WhyText,
  Question,
  QuestionButtonContainer,
} from "./Why.styles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Why = () => {
  const refCtx = useContext(RefContext);

  const whySectionRef = useRef();
  const whyTitleRef = useRef();
  const questionContainerRef = useRef();
  const answerRef = useRef();

  const [showAnswer, setShowAnswer] = useState({
    question1: false,
    question2: false,
    question3: false,
  });

  const scrollAnimation = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: whySectionRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(whySectionRef.current, { x: "-100%" }, { x: "0%", duration: 1 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: whySectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(whyTitleRef.current, { y: "200%" }, { y: "10%", duration: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: whySectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(
        questionContainerRef.current,
        { y: "200%" },
        { y: "10%", duration: 1 }
      );
  };

  const animateShowAsnwer = () => {
    gsap.fromTo(answerRef.current, { x: "250%" }, { x: "0%", duration: 1 });
  };

  useEffect(() => {
    refCtx.setWhySectionRefCtx(whySectionRef);
    scrollAnimation();
  }, [refCtx, whySectionRef, answerRef]);

  useEffect(() => {
    animateShowAsnwer();
  }, [showAnswer]);

  const questionClickHandler = (e) => {
    switch (e.target.id) {
      case "1":
        setShowAnswer({
          question1: true,
          question2: false,
          question3: false,
        });
        break;
      case "2":
        setShowAnswer({
          question1: false,
          question2: true,
          question3: false,
        });
        break;
      case "3":
        setShowAnswer({
          question1: false,
          question2: false,
          question3: true,
        });
        break;
      default:
        break;
    }
  };

  return (
    <WhySection ref={whySectionRef}>
      <WhyTextWrapper>
        <WhyTitle ref={whyTitleRef}>Why CryptoBot?</WhyTitle>
        <QuestionButtonContainer ref={questionContainerRef}>
          <Question onClick={questionClickHandler} id="1">
            01
          </Question>

          <Question onClick={questionClickHandler} id="2">
            02
          </Question>

          <Question onClick={questionClickHandler} id="3">
            03
          </Question>
        </QuestionButtonContainer>
        {showAnswer.question1 && (
          <WhyText id="1" ref={answerRef}>
            <h1>01 - 24/7 Trading</h1>
            <p>
              CryptoBot never sleeps, ensuring you never miss a trading
              opportunity. With round-the-clock trading capabilities, you can
              capitalize on market movements anytime, anywhere.
            </p>
          </WhyText>
        )}
        {showAnswer.question2 && (
          <WhyText ref={answerRef}>
            <h1>02 - Advanced Algorithms</h1>
            <p>
              CryptoBot utilizes state-of-the-art algorithms to analyze market
              trends and execute trades at optimal times. Our technology ensures
              that you make informed decisions, maximizing your profits and
              minimizing risks.
            </p>
          </WhyText>
        )}
        {showAnswer.question3 && (
          <WhyText ref={answerRef}>
            <h1>03 - Comprehensive Analytics</h1>
            <p>
              Gain insights into your trading performance with CryptoBot's
              comprehensive analytics. Track your gains, losses, and overall
              portfolio performance with detailed reports and real-time data.
            </p>
          </WhyText>
        )}
      </WhyTextWrapper>
    </WhySection>
  );
};

export default Why;
