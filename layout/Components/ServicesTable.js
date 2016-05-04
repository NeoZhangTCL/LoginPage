import React from "react";

export default class ServiceTable extends React.Component {
  render() {
    const tableStyle = {
      margin : '0px auto'
    };
    return (
      <div style={tableStyle}>
        <div>
          <span className="Page-Container">
            <a href="#" className="Page"><img src="./resources/icon.png"/></a>
          </span>
          <span className="Page-Container">
            <a href="#" className="Page"><img src="./resources/icon.png"/></a>
          </span>
          <span className="Page-Container">
            <a href="#" className="Page"><img src="./resources/icon.png"/></a>
          </span>
        </div>
        <div>
            <span className="Page-Container">
              <a href="#" className="Page"><img src="./resources/icon.png"/></a>
            </span>
            <span className="Page-Container">
              <a href="#" className="Page"><img src="./resources/icon.png"/></a>
            </span>
            <span className="Page-Container">
              <a href="#" className="Page"><img src="./resources/icon.png"/></a>
            </span>
          </div>
          <div>
              <span className="Page-Container">
                <a href="#" className="Page"><img src="./resources/icon.png"/></a>
              </span>
              <span className="Page-Container">
                <a href="#" className="Page"><img src="./resources/icon.png"/></a>
              </span>
              <span className="Page-Container">
                <a href="#" className="Page"><img src="./resources/icon.png"/></a>
              </span>
            </div>
      </div>
    );
  }
}
