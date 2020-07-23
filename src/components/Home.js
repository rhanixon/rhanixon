import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Bio from "./Bio";
import Sidebar from "./Sidebar";
import "../style/App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
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
            {/* <div>
              <a href="/Portfolio">
                <div className="arrow"></div>
              </a>
            </div> */}
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
