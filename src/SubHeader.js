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
        <a href='mail&#116;&#111;&#58;r%&#54;&#56;an%69&#120;%6&#70;n1&#64;g&#109;&#97;i%&#54;C&#46;com'>
        <script type="text/javascript" language="javascript">
      </script><noscript>Sorry, you need Javascript on to email me.</noscript>
            <img className="mail-logo" src={email} alt=""/>
            <span className="gothic"> rhani&#120;on1&#64;gm&#97;il&#46;c&#111;m</span>
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

