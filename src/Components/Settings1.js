import React, {Component} from "react";
import "../styles.css";
import Settings2 from "./Settings2"
import Settings3 from "./Settings3";
export default class Settings1 extends Component{
    // constructor(props) {
    //     super(props);
    
    //     this.click1 = this.click1.bind(this);
        
    //   }
      
    // click1(){

    //     this.render();
    // }
  render() {
    return (
      <div class="disappear1" id="disappear1">
        <div className="how-flex-settings">
          {/* <div className="right-col">
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
              <p className="basicinfo" onClick={this.click2}>Basic Information</p>
              <p className="aboutyou" onClick={this.click1}>About You</p>
              <p className="socials" onClick={this.click1}>Socials</p>
            </div>
          </div> */}
          <div className="left-col">
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
        </div>
      </div>
    );
  }
}
