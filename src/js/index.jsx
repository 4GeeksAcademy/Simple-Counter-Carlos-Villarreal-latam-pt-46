import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//Components
import SecondsCounter from './components/SecondsCounter';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);