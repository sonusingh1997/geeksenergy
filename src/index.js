import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextApi from "./contextApi/ContextApi";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApi>
        <App />
      </ContextApi>
    </BrowserRouter>
  </React.StrictMode>
);
