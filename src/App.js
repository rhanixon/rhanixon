import React from "react";
// import logo from "./logo.svg";
import Header from "./Header";
import SubHeader from "./SubHeader";
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
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
