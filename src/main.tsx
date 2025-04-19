// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./assets/styles/index.css";

const queryClient = new QueryClient()

createRoot(document.getElementById("root") as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </QueryClientProvider>
);
