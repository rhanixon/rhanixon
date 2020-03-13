import React, { Component } from 'react'
import linkedin from './linkedin.png'
import github from './github.svg'
import phone from './phone.png'
import email from './email.png'

export default class SubHeader extends Component {
    render() {
        return (
        <div>
        <div className="box">
            <a href="mailto:rhanixon1@gmail.com">
            <img className="mail-logo" src={email} alt=""/>
            <span className="gothic"> rhanixon1@gmail.com</span>
          </a>
        </div>
        <div className="box">
            <a href="tel:+1 (202) 368-0011">
            <img className="logo" src={phone} alt=""/>
            <span className="gothic"> +1 (202) 368-0011</span>
          </a>
          </div>
            <div className="box">
                <a href="https://www.linkedin.com/in/bobby-nixon/">
                <img className="logo" src={linkedin} alt=""/>
                <span className="gothic"> rhanixon</span>
          </a>
          </div>
          <div className="box">
                <a href="https://github.com/rhanixon">
                <img className="logo" src={github} alt="" />
            <span className="gothic"> rhanixon</span>
          </a>

          </div>
        </div>
        )
    }
}

