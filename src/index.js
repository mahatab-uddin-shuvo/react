import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Component/App";
import { ContactProvider } from "./Contexts/ContactContext";
const router = (
  <BrowserRouter>
    <ContactProvider>
      <App />
    </ContactProvider>
  </BrowserRouter>
);

//Rendering in DOM
ReactDOM.render(router, document.getElementById("root"));
