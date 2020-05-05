import React, { Component } from "react";

export default class Settings2 extends Component {

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