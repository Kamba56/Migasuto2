// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import SubscriptionPage from "./Pages/subscription/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Router from "./router";
import "./assets/styles/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SubscriptionPage />}></Route>
    </Routes>
  </BrowserRouter>
);
