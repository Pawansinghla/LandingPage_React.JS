import React, { Component } from "react";
import '../css/settings.css';
import '../css/style.css';
import Settings1 from "./Settings1";
import Header from "./Header";
import Settings2 from "./Settings2";
import Settings3 from "./Settings3";

export default class Settings extends Component {

  state = {
    show: 'basic',
    number: 1
  }

  click1 = () => {
    this.setState({
      show: 'basic',
      number: 1
    });
  }
  click2 = () => {
    this.setState({
      show: 'about',
      number: 2
    });
  }
  click3 = () => {
    this.setState({
      show: 'socials',
      number: 3
    });
  }



  render() {
    return (
      <div>
        <Header></Header>
        <div className="how-flex">
          <div className="col right-col">
            <div className="num-block">
              <div className="num">
                <div className="num-first">
                  <p>0{this.state.number}</p>
                </div>
                <div className="num-second">
                  <p>/03</p>
                </div>
              </div>
            </div>
            <div className="option">
              <p className="basicinfo" style={this.state.number === 1 ? { fontWeight: 500, fontSize: '26px' } : null} onClick={this.click1} >
                Basic Information
            </p>
              <p className="aboutyou" style={this.state.number === 2 ? { fontWeight: 500, fontSize: '26px' } : null} onClick={this.click2}>
                About You
            </p>
              <p className="socials" style={this.state.number === 3 ? { fontWeight: 500, fontSize: '26px' } : null} onClick={this.click3}>
                Socials
            </p>
            </div>
          </div>

          {this.state.show === 'basic' && <Settings1></Settings1>}
          {this.state.show === 'about' && <Settings2></Settings2>}
          {this.state.show === 'socials' && <Settings3></Settings3>}
        </div>
      </div>
    );
  }
}
