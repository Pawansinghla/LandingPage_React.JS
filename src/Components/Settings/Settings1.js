import React, { Component } from "react";

import Settings2 from "../Settings/Settings2"
import Settings3 from "../Settings/Settings3";
export default class Settings1 extends Component {
  render() {
    return (


      <div className="col left-col">
        <div className="letstart">
          <p>Lets Get Started</p>
        </div>
        <div className="qns">
          <p>What is your email?</p>
          <input className="input" placeholder="Email" />
          <p>What is your First Name?</p>
          <input className="input" placeholder="First Name" />
          <p>What is your Last Name?</p>
          <input className="input" placeholder="Last Name" />
          <p>Enter a unique Username</p>
          <input className="input" placeholder="Username" />
        </div>
        <div className="script">
          <p>Only letters, numbers and underscores are allowed</p>
        </div>
      </div>


    );
  }
}
