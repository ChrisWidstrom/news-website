import React, { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import './index.css';

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
