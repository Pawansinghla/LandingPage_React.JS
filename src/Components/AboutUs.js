import React from "react";
import "../styles.css";
export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-left-col">
        <img alt="about-left-svg" src={require("../png/about-left-SVG.png")} />
      </div>
      <div className="about-right-col">
        <h1>ABOUT OSC</h1>
        <br />
        <br />
        <p>
          No one rejects, dislikes, or avoids pleasure itself, because it is
          pleasure, but because those who do not know how to pursue pleasure
          rationally encounter consequences that are extremely painful. Nor
          again is there anyone who loves or pursues or desires to obtain pain
          of itself, because it is pain, but because occasionally circumstances
          occur in which toil and pain can procure.
        </p>
      </div>
    </div>
  );
}
