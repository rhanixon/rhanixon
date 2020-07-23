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
              Bootcamp grad and software engineer at Bloomberg LP in New York. I
              have a background in math and came to programming from
              quantitative finance.
            </p>
            <p className="port_link">
              <a className="btn" href="/Portfolio">
                Check out my portfolio
                <i className="right_white"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
