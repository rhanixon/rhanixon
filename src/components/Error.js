/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
export default class Writing extends Component {
  handleClick() {
    // window.open("/insert/your/path/here");
    window.location.href = "/fast";
  }
  render() {
    return (
      <div className="writing-container">
        <div className="bio-header-black-bg">
          <h1>404</h1>
        </div>
        <div className="boxed2-black-bg">
          <div className="bio-item-black-bg">
            <h2>It appears youve gotten lost...</h2>
            <a className="zero" href="/">
              <h3 className="black-bg">
                Go back home <i className="black-bg"></i>
              </h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
