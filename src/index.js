import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context/context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
