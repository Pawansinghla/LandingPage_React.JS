import React, { Component } from "react";
import "../css/style.css";


export default class Settings2 extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state={
  //         display: "none"
  //     }

  //     this.click2 = this.click2.bind(this);

  //   }

  // click2() {
  //     this.render();
  // }
  render() {
    return (



      <div class="col left-col">
        <div class="letstart">
          <p>What do you do?</p>
        </div>
        <div class="qns">
          <p>Title</p>
          <input class="input" placeholder="Developer, Student, Programmer" />
          <p>About</p>
          <input
            class="input-bio"
            placeholder="A short bio of less than 120 characters"
          />
          <p>Skills</p>
          <input
            class="input-skills"
            id="myInput"
            placeholder="Enter your skills"
          />
        </div>
        <div class="script">
          <span onclick="newElement()" class="addBtn">Add</span>
          <p>Press Enter to add the skill. Enter minimum five skills</p>

          <ul id="myUL"></ul>
        </div>
      </div>


    );
  }
}