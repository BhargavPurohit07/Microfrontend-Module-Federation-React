import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ObservableProvider } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ObservableProvider>
      <App />
    </ObservableProvider>
  </React.StrictMode>
);
