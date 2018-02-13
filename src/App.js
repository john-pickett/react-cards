import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'
import Answers from './components/Answers'
import Spanish from './components/Spanish'
import Evaluate from './components/Evaluate'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isCorrect: null
    }
    this.handleAnswerSelect = this.handleAnswerSelect.bind(this);
  }

  handleAnswerSelect (value) {
    console.log('App ' + value)

    if (value === 'option1') {
      console.log('true')
      this.setState({
        isCorrect: true
      })
    } else {
      console.log('false')
      this.setState({
        isCorrect: false
      })
    } 
  }

  
  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Flash Cards</h1>
          </header>
          <div className="row">
            <div className="col-md-6">
              <Spanish />
            </div>
            <div className="col-md-6">
              <Answers onAnswerSelect={this.handleAnswerSelect} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Timer />
            </div>
            <div className="col-md-8">
              <Evaluate isCorrect={this.state.isCorrect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
