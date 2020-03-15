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
            <p className="oneandquarter">I am a fullstack software engineer based in Manhatten. I have a background in math & came to programming from quantitative fianance. I am a passionate problem sovler with an apreciation for design. When I'm not programming I love to spend my time on the ocean whether it be surfing, or sailing. </p>
          </div>
        </div>
      </div>
    );
  }
}
