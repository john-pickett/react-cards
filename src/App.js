import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'
import Evaluate from './components/Evaluate'
import FlashCards from './components/FlashCards'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isCorrect: null,
      timesUp: false,
      score: 0,
      disabled: false
    }

  }

  handleAnswerSelect = (value) => {
    // console.log('App ' + value)
    if (value === 'correct') {
      // console.log('true')
      this.setState({
        isCorrect: true
      })
      this.state.score += 10;
    } else if (value === 'incorrect') {
      // console.log('false')
      this.setState({
        isCorrect: false
      })
      this.state.score -= 5;
    } else {
      this.setState({
        isCorrect: null
      })
    }
  }

  handleTimer = (value) => {
    if (value === 'start') {
      // console.log('value is start')
      this.setState({
        disabled: false,
        score: 0
      })
    } else if (value === 'end') {
      // console.log('value is end')
      this.setState({
        disabled: true
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
          <FlashCards onAnswerSelect={this.handleAnswerSelect} disabled={this.state.disabled}/>
          <div className="row">
            <div className="col-md-4">
              <Timer timerBus={this.handleTimer}/>
            </div>
            <div className="col-md-8">
              <Evaluate isCorrect={this.state.isCorrect} score={this.state.score}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
