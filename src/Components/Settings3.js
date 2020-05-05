import React, { Component } from "react";
import "../styles.css";

export default class Settings3 extends Component {
    // constructor(props) {
    //     super(props);
    
        
    //     this.click3 = this.click3.bind(this);
    //   }
      
    // click3(){
    //     this.render();
    // }
    render() {
    return (
      <div class="disappear3" id="disappear3">
        <div className="how-flex-settings">
          <div className="right-col">
            <div className="num-block">
              <div className="num">
                <div className="num-first">
                  <p>03</p>
                </div>
                <div className="num-second">
                  <p>/03</p>
                </div>
              </div>
            </div>
            <div className="option">
              <p className="basicinfo">Basic Information</p>
              <p className="aboutyou">About You</p>
              <p className="socials">Socials</p>
            </div>
          </div>
          <div class="left-col">
            <div class="letstart">
              <p>Where can others find you online?</p>
            </div>
            <div class="script-new">
              <p>
                Please provide the full url. Leave empty if you dont't want to
                give
              </p>
            </div>
            <div class="qns">
              <p>Website</p>
              <input class="input" placeholder="https://your-website.com/" />
              <p>Github</p>
              <input class="input" placeholder="https://github.com/" />
              <p>LinkedIn</p>
              <input class="input" placeholder="https://linkedin.com/in/" />

              <p>Twitter</p>
              <input class="input" placeholder="https://twitter.com/" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
