import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  </React.StrictMode>
);