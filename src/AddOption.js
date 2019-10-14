import React, { Component } from "react";
class AddOption extends Component {
  constructor(props){
    super(props)
  }
  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim()
    if (option) {
        this.props.handleAddOption(option)
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" id="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
