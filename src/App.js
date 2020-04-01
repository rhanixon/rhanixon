import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Bio from "./Bio";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  // constructor() {
  //   super()
  // this.handleClick = this.handleClick.bind(this)
  // this.state ={
  //   CV_Downloads: 0
  // }
  // }

  // handleClick(product) {
  //   this.setState({CV_Downloads: this.state.CV_Downloads + 1})
  //   console.log(this.state.CV_Downloads)
  // }

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
              {/* <button className="btn"  onClick={() => this.handleClick()}> */}
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
          <div className="Footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
