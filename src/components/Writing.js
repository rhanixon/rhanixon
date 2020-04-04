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
          <h1>Writing</h1>
        </div>
        <div className="boxed2-black-bg">
          <div className="bio-item-black-bg">
            <h2>I Wanna Go Fast</h2>
            <h3 className="oneandquarter">
              This spring, while my teammates and I were working on Hive Mind -
              a real-time, multi-player, cross-platform mobile application based
              on the New York Times Spelling Bee - we ran into an interesting
              problem. Given a dictionary containing all the words in the
              english language, generate all possible solutions for all possible
              puzzles in our game. At first glance this problem may seem
              trivial. But things start to get crazy when you factor in the fact
              that there are 4,604,600 possible puzzles each of which may
              contain as many as 1,000 valid words. Our first pass at solving
              the problem itterativley would have taken over 6 hours to run if
              we were willing to subject our computers to that kidn of torture.
              So the question quickly became: how can we possibly make this
              faster? And after that, how fast can we possibly make this thing?
            </h3>
            <a className="zero" href="#fast">
              <h3 className="black-bg">
                Check it out <i className="black-bg"></i>
              </h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
