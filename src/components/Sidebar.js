import React from "react";
import { push as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu right>
      
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Portfolio">
        Portfolio
      </a>

    </Menu>
  );
};
