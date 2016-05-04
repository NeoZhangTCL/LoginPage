import React from "react";

export default class Password extends React.Component {
  render() {
    return (
      <div className="Rectangle">
        <img id="pass" className="Group" src="resources/group.png"/>
        <input className="Input" type="text" value="PASSWORD"/>
      </div>
    );
  }
}
