/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import Sidebar from "./Sidebar";
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Sidebar />
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
              <h2>Sodoku</h2>
              <h3 className="oneandquarter">
                A fully functional mobile friendly progressive web app to play
                sodoku created using TypeScript, React, and Redux. The
                motivation for this project was to learn more about backtracking
                algorithms and NP-Completeness. Play a game yourself and see
                what you think.
              </h3>
              <a className="one" href="https://ts-sodoku.herokuapp.com/">
                <h3>
                  Check it out <i className="right"></i>
                </h3>
              </a>
              <a className="three" href="https://github.com/rhanixon/Sodoku">
                <h3>
                  Source Code <i className="right"></i>
                </h3>
              </a>
            </div>
          </div>
          <div className="arrow-container">
            <a data-scroll href="/Writing">
              <div className="arrow-black"></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
