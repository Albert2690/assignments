import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <React.StrictMode>
        <ToastContainer />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  
  
);
