// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import store from "./stores/store";
createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
    <Router />
  </BrowserRouter>
  </Provider>
);
