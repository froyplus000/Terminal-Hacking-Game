import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // Remove StrictMode if don't want HexArray to log twice each time
  <StrictMode>
    <App />
  </StrictMode>
);
