import React, { Component } from 'react'
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";


class App extends Component {
  render() {

    const title = "Indecision"
    const subtitle = "Put your life in the hands of a computer";
    const options = ['Option 1', 'Option 2', 'Option 3']

    return (
      <div>
       <Header title={title} subtitle={subtitle} />
       <Action />
       <Options options={options} />
       <AddOption />
      </div>
    )
  }
}

export default App