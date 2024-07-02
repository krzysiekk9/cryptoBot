import React from "react";

const RefContext = React.createContext({
  isBotLoaded: {},
  setIsBotLoaded: {},
  whySectionRefCtx: {},
  setWhySectionRefCtx: {},
  welcomeSectionRefCtx: {},
  setWelcomeSectionRefCtx: {},
  featuresSectionRefCtx: {},
  setFeaturesSectionRefCtx: {},
  formSectionRefCtx: {},
  setFormSectionRefCtx: {},
});

export default RefContext;
