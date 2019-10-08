import React, { Component } from "react";
class AddOption extends Component {
  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim()
    if (option) {
        alert(option)
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
