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
            <p className="oneandquarter">
              I am a full stack software engineer based in Manhattan. I have a
              background in math and came to programming from quantitative
              finance. I am a passionate problem solver with an appreciation for
              design. When I'm not programming I like to spend my time on the
              ocean, wether it be surfing, sailing, or scuba diving. You can
              check out some of my projects and writing by clicking my name or
              the arrow below.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
