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
      timesUp: false
    }
    this.handleAnswerSelect = this.handleAnswerSelect.bind(this);
  }

  handleAnswerSelect (value) {
    // console.log('App ' + value)
    if (value === 'correct') {
      // console.log('true')
      this.setState({
        isCorrect: true
      })
    } else if (value === 'incorrect') {
      // console.log('false')
      this.setState({
        isCorrect: false
      })
    } else {
      this.setState({
        isCorrect: null
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
          <FlashCards onAnswerSelect={this.handleAnswerSelect} />
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
