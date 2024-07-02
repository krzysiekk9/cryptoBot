import React from "react";

import SplineLines from "./components/Spline3D/BackgroundLines/BackgroundLines.component";
import SplineRobot from "./components/Spline3D/Robot/Robot.component";

import Home from "./components/Home/Home.component";
import Welcome from "./components/Welcome/Welcome.component";
import Why from "./components/Why/Why.component";
import Features from "./components/Features/Features.component";
import Form from "./components/Form/Form.component";
import RefProvider from "./store/RefProvider";

function App() {
  return (
    <RefProvider>
      <SplineLines />
      <SplineRobot />
      <Home />
      <Welcome />
      <Why />
      <Features />
      <Form />
    </RefProvider>
  );
}

export default App;
