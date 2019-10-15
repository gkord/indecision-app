import React, { Component } from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOption from "./components/AddOption";
import OptionModal from "./components/OptionModal";
import "./styles/App.scss"

class App extends Component {
  constructor() {
    super();
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }

  //method that clears all of our options
  handleClearOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  //method that deletes singular option
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };

  //method that picks a random option
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState({
      selectedOption: option
    })
  };

  //method that allows user to add an option
  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  clearSelectedOption = () => {
    this.setState({
      selectedOption: undefined
    })
  }

  componentDidMount() {
    //persist data locally
    try {
      const json = localStorage.getItem("options");
      //parse our string into a JSON object
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //collect data into string when user updates options
    //check if the length has changed
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    // const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div className="app">
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleClearOptions={this.handleClearOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal 
        selectedOption={this.state.selectedOption}
        clearSelectedOption={this.clearSelectedOption}
         />
      </div>
    );
  }
}

export default App;
