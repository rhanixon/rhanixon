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
              Bootcamp grad and software engineer at Bloomberg LP in New York.
              I have a background in math and came to programming from
              quantitative finance. You can check out some of my projects and writing by
              clicking my name or the arrow below.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
