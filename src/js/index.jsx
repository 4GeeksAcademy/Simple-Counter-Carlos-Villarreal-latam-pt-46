import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//Components
import SecondsCounter from './components/SecondsCounter';

setInterval(() => {
  ReactDOM.createRoot(document.getElementById('root'));render(
    <div>
      <SecondsCounter/>
    </div>
);
}
);
