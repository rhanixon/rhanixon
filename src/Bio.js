import React, { Component } from "react";

export default class Bio extends Component {
  render() {
    return (
        <div className="bio-container">
          <div className="bio-header">
            <h2>About Me</h2>
          </div>
          <div className="boxed">
          <div className="bio-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis mauris, tempus bibendum orci eget, eleifend sodales arcu. Nulla eu lectus id ante faucibus tincidunt. Sed imperdiet metus sapien, eget efficitur ante scelerisque vitae. Praesent efficitur ipsum nisi, sed suscipit ex fermentum quis. Duis sed ullamcorper mauris. Duis ornare metus vitae imperdiet hendrerit.</p>
          </div>
        </div>
      </div>
    );
  }
}
