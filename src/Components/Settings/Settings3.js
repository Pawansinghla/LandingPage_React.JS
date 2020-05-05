import React, { Component } from "react";


export default class Settings3 extends Component {

  render() {
    return (


      <div class="col left-col">
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

    );
  }
}
