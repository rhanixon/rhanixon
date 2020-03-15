import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
        <div className="portfolio-container">
          <div className="bio-header">
            <h1>Portfolio</h1>
          </div>
          <div className="boxed2">
          <div className="bio-item">
            <h2>Record Shop</h2>
            <h3>An online e-comerce store created using react and redux. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis mauris, tempus bibendum orci eget, eleifend sodales arcu. Nulla eu lectus id ante faucibus tincidunt.</h3>
            <a className="one" href="https://recordshop1982134.herokuapp.com/products">
            <h3>Check it out <i class="right"></i></h3>
            </a>
            <h2>Capstone</h2>
            <h3>Description of my captsone project... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis mauris, tempus bibendum orci eget, eleifend sodales arcu. Nulla eu lectus id ante faucibus tincidunt.</h3>
            <a className="zero" href="https://github.com/grace-shopper-MPEB/motherboard">
            <h3>Check it out <i class="right"></i></h3>
            </a>
        </div>
        </div>
      </div>
    );
  }
}
