import React, { Component } from "react";
import Option from "./Option";

class Options extends Component {
  handleRemoveAll = () => {
    alert("removed");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

export default Options;
