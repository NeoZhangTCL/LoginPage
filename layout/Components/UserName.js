import React from "react";

export default class UserName extends React.Component {
  render() {
    return (
      <div>
        <div class="User-block"></div>
        <div className="Rectangle">
          <img className="Group" src="resources/group-2.png"/>
          <input className="Input" type="text" value="EMAIL"/>
        </div>
      </div>
    );
  }
}
