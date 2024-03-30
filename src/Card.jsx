import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Card.css";

function Card() {
  return (
    <div>
      <img alt="robots" src="https://robohash.org/test?200x200" />
      <div>
        <h2>Jane doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
}

export default Card;
