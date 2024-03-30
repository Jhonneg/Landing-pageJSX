import React from "react";
import ReactDOM from "react-dom/client";
import CardList from "./Cardlist";
import "./index.css";
import { robots } from "./robots.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>
);
