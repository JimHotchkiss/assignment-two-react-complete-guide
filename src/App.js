import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent'

class App extends Component {
  
  // Define state here
    state = {
      userInput: ''
    }

  // Define inputLengthHandler
  inputLengthHandler = (event) => {
   this.setState({userInput: event.target.value})

  }

  // Define deleteCharHandler 
  deleteCharHandler = (charIndex) => {
    // Split the input string into an array of sub-strings 
    const input = this.state.userInput.split('')
    // Then splice out the 1 at the charIndex
    input.splice(charIndex, 1);
    // Join this split array back into a string
    const updatedText = input.join('');
    // Now update the state with new string
    this.setState({userInput: updatedText})
  }


      render() {

        const charList = this.state.userInput.split('').map((char, index) => {
          return <CharComponent 
            character={char}
            key={index}
            click={() => {this.deleteCharHandler(index)}}
          />
        })
        return (
          <div 
            className="App">
                <input
                  type="text"
                  // 2-way binding
                  onChange={this.inputLengthHandler}
                  value={this.state.userInput}
                  >
                </input>
                <ValidationComponent
                  textLength ={this.state.userInput.length}/>
                {charList}
          </div>
        );
      }
    
    
}
  

export default App;
