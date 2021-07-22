import React from "react";
import atom from "../../../public/assets/images/atom.svg";
import saber from "../../../public/assets/images/light-saber.png";
import "./style.css";

export function Header() {
  return (
    <>
      <h1>
        30 days of React
        <img src={atom} alt="atom" className="image spin" />
      </h1>
      <h2>
        Day 13
        <img src={saber} alt="saber" className="image" />
      </h2>
    </>
  );
}
