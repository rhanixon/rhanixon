import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Bio from "./Bio";
import Portfolio from "./Portfolio";
import Writing from "./Writing";
import Footer from "./Footer";
import "../style/App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="Header">
            <Header />
          </div>
          <div className="SubHeader">
            <SubHeader />
          </div>
          <header className="App-header">
            <div className="bio" id="bio">
              <Bio />
            </div>
            <button className="btn">
              <span className="gothic">
                <a
                  className="btn"
                  href="https://github.com/rhanixon/CV/raw/master/NixonCV2020.pdf"
                >
                  Download CV
                </a>
              </span>
            </button>
            <div>
              <a data-scroll href="#portfolio">
                <div className="arrow"></div>
              </a>
            </div>
          </header>
          <div className="portfolio" id="portfolio">
            <Portfolio />
          </div>
          <div className="writing" id="writing">
            <Writing />
          </div>
        </div>

        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
