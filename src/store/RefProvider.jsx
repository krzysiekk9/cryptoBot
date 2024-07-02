import RefContext from "./ref-context";
import { useState } from "react";

const RefProvider = (props) => {
  const [isBotLoaded, setIsBotLoaded] = useState(false);
  const [whySectionRefCtx, setWhySectionRefCtx] = useState();
  const [welcomeSectionRefCtx, setWelcomeSectionRefCtx] = useState();
  const [featuresSectionRefCtx, setFeaturesSectionRefCtx] = useState();
  const [formSectionRefCtx, setFormSectionRefCtx] = useState();

  return (
    <RefContext.Provider
      value={{
        isBotLoaded,
        setIsBotLoaded,
        whySectionRefCtx,
        setWhySectionRefCtx,
        welcomeSectionRefCtx,
        setWelcomeSectionRefCtx,
        featuresSectionRefCtx,
        setFeaturesSectionRefCtx,
        formSectionRefCtx,
        setFormSectionRefCtx,
      }}
    >
      {props.children}
    </RefContext.Provider>
  );
};

export default RefProvider;
