/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="portfolio-container">
          <div className="bio-header">
            <h1>Portfolio</h1>
          </div>
          <div className="boxed2">
            <div className="bio-item">
              <h2>Hive Mind</h2>
              <h3 className="oneandquarter">
                A real-time, multi-player, cross-platform mobile application
                based on the New York Times Spelling Bee game developed in 3
                weeks. Deployed on Heroku and designed with React Native, React
                Hooks, Redux, Express, PostgreSQL, and Socket.io. UI/UX with
                interactive data visualizations using React Native and D3.
                Back-end architecture written in TypeScript. Algorithm to
                generate solutions for all possible puzzles within 2 seconds
                created using bitmaps and linear algebra. You can check out some
                writing on this project by clicking the arrow below.
              </h3>
              <a
                className="zero"
                href="https://expo.io/@hivemind/hive-mind?release-channel=prod"
              >
                <h3>
                  Check it out <i className="right"></i>
                </h3>
              </a>
              <a
                className="one"
                href="https://github.com/hive-mind-fs/hive-mind"
              >
                <h3>
                  Source Code <i className="right"></i>
                </h3>
              </a>
              <h2>Fullstack Records</h2>
              <h3 className="oneandquarter">
                A fully functional e-commerce web application developed in 9
                days using React-Redux, Node, Express, PostgreSQL, Google OAuth,
                and Stripe integration. RESTful API routes enable a persistent
                shopping cart. Custom application logic synchronizes front-end
                orders with back-end inventory preventing users from placing
                orders on unavailable items. Time-Series data on user-product
                interactions tracked using custom algorithm.
              </h3>
              <a
                className="two"
                href="https://recordshop1982134.herokuapp.com/products"
              >
                <h3>
                  Check it out <i className="right"></i>
                </h3>
              </a>
              <a
                className="three"
                href="https://github.com/rhanixon/FullstackRecords"
              >
                <h3>
                  Source Code <i className="right"></i>
                </h3>
              </a>
            </div>
          </div>
          <div className="arrow-container">
            <a data-scroll href="#writing">
              <div className="arrow-black"></div>
            </a>
          </div>
        </div>
        <div className="writing" id="writing">
          <div className="writing-container">
            <div className="bio-header-black-bg">
              <h1>Writing</h1>
            </div>
            <div className="boxed2-black-bg">
              <div className="bio-item-black-bg">
                <h2>I Wanna Go Fast</h2>
                <h3 className="oneandquarter">
                  This spring, while my teammates and I were working on Hive
                  Mind - a real-time, multi-player, cross-platform mobile
                  application based on the New York Times Spelling Bee - we ran
                  into an interesting problem. Given a dictionary containing all
                  the words in the english language, generate all possible
                  solutions for all possible puzzles in our game. At first
                  glance this problem may seem trivial. But things start to get
                  crazy when you factor in the fact that there are 4,604,600
                  possible puzzles each of which may contain as many as 1,000
                  valid words. Our first pass at solving the problem
                  itterativley would have taken over 6 hours to run if we were
                  willing to subject our computers to that kidn of torture. So
                  the question quickly became: how can we possibly make this
                  faster? And after that, how fast can we possibly make this
                  thing?
                </h3>
                <a className="zero" href="/Fast">
                  <h3 className="black-bg">
                    Check it out <i className="black-bg"></i>
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
