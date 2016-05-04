import React from "react";
import { Link } from "react-router"

import Logo from "./Components/Logo"
import UserName from "./Components/UserName"
import Password from "./Components/Password"
import LoginBtn from "./Components/LoginBtn"
import NeedHelp from "./Components/NeedHelp"

export default class LoginPanel_1 extends React.Component{
  render(){
    return(
      <div>
        <Logo />
        {this.props.children}
        <Password />
        <Link to="login2">
          <div class="RectangleBtn">
            <p class="NEXT">NEXT</p>
          </div>
        </Link>
        <NeedHelp />
      </div>
    );
  }
}
