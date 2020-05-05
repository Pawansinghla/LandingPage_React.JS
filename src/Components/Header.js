import React from "react";
import "../css/style.css";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="../public/index.html">OPEN<span>&lt;SOURCE&gt;</span>CODE</a>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </header>

  );
}