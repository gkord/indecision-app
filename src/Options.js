import React, { Component } from 'react'
import Option from "./Option";

class Options extends Component {
    render() {
        return (
          <div>
            {this.props.options.map((option )=> {
                return <p>{option}</p>;
            })}
    
          </div>
        );
    }
}

export default Options