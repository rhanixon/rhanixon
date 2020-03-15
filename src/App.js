import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Bio from "./Bio";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import "./App.css";

function App() {
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
                href="https://github.com/rhanixon/CV/raw/master/NixonCV.pdf"
              >
                Download CV
              </a>
            </span>
          </button>
        </header>
        <div className="portfolio" id="portfolio">
          <Portfolio />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
