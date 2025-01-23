// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./assets/styles/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter></BrowserRouter>
);
