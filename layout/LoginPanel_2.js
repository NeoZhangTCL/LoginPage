import React from "react";
import { Link } from "react-router"

import Logo from "./Components/Logo"
import UserInfo from "./Components/UserInfo"
import Password from "./Components/Password"
import LoginBtn from "./Components/LoginBtn"
import NeedHelp from "./Components/NeedHelp"

export default class LoginPanel_2 extends React.Component{
  render(){
    return(
      <div>
        <UserInfo />
        <Password />
        <Link to="appPanel">
          <div class="RectangleBtn">
            <p class="NEXT">SIGN IN</p>
          </div>
        </Link>
        <NeedHelp />
        <div className="Logo-Thumbnail">
          <img src=".\resources\logo-thumbnail.png" />
        </div>
      </div>
    );
  }
}
