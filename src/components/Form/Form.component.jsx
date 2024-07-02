import React from "react";
import { useState, useEffect, useRef, useContext } from "react";

import RefContext from "../../store/ref-context";
import Footer from "../Footer/Footer.component";

import {
  FormSection,
  FormTitle,
  FormContainer,
  Button,
  Modal,
} from "./Form.styles";

import gsap from "gsap";

const Form = () => {
  const refCtx = useContext(RefContext);
  const formSectionRef = useRef();
  const [displayModal, setDisplayModal] = useState(false);

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    setDisplayModal(true);
    setTimeout(() => {
      setDisplayModal(false);
    }, 2000);
  };
  const scrollAnimation = () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: formSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart reset restart restart",
        },
      })
      .fromTo(".form-email", { x: "-100%" }, { x: "0%", duration: 0.5 })
      .fromTo(".form-description", { x: "-100%" }, { x: "0%", duration: 0.5 })
      .fromTo(".form-btn", { x: "-100%" }, { x: "50%", duration: 0.5 });
  };

  useEffect(() => {
    refCtx.setFormSectionRefCtx(formSectionRef);
    scrollAnimation();
  }, [refCtx, formSectionRef]);

  return (
    <FormSection ref={formSectionRef}>
      {displayModal && <Modal> &#10003; Success</Modal>}
      <FormTitle>Contact Us</FormTitle>
      <FormContainer onSubmit={onFormSubmitHandler}>
        <div className="form-email">
          <label htmlFor="email">Your contact E-mail</label>
          <input type="email" placeholder="E-mail" id="email"></input>
        </div>
        <div className="form-description">
          <label htmlFor="description">
            Briefly describe what you expect from cryptobot
          </label>
          <textarea name="description" id="description"></textarea>
        </div>
        <Button type="primary" value="Submit" className="form-btn" />
      </FormContainer>
      <Footer />
    </FormSection>
  );
};

export default Form;
