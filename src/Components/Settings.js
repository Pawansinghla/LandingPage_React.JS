import React, { Component } from "react";
import "../styles.css";
import Settings1 from "./Settings1";
import Header from "./Header";
import Settings2 from "./Settings2";
import Settings3 from "./Settings3";

export default class Settings extends Component {
  
  
  render() {
    return (
      <div>
        <Header></Header>
        <div className="right-col">
          <div className="num-block">
            <div className="num">
              <div className="num-first">
                <p>01</p>
              </div>
              <div className="num-second">
                <p>/03</p>
              </div>
            </div>
          </div>
          <div className="option">
            <p className="basicinfo" onClick={this.click1}>
              Basic Information
            </p>
            <p className="aboutyou" onClick={this.click2}>
              About You
            </p>
            <p className="socials" onClick={this.click3}>
              Socials
            </p>
          </div>
        </div>
        <Settings1></Settings1>

        <Settings2></Settings2>

        <Settings3></Settings3>
      </div>
    );
  }
}
