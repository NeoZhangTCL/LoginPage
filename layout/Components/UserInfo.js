import React from "react";

export default class UserInfo extends React.Component {

  render() {
    return (
      <div>
        <div className="User-Pic">
          <img src="./resources/jeff-copy@2x.png" />
        </div>
        <div className="User-Name">
          <p><strong>Jeffery Aramini</strong> jeff_aramini@ihealthsolutions.net</p>
        </div>
      </div>
      );
    }
  }
