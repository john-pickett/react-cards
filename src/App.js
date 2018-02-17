import $ from 'jquery';
import axios from 'axios';

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
      name: '',
      disabled: true,
      timeUp: false,
      scores: []
    }

    this.getScores();
  }

  componentWillMount () {
    console.log('will mount')
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
        score: 0,
        timeUp: false
      })
    } else if (value === 'end') {
      // console.log('value is end')
      this.setState({
        disabled: true,
        timeUp: true
      })
      this.openModal();
    }
  }

  openModal = () => {
    $('#scoreModal').modal()
  }

  getScores = () => {
    axios.get('http://localhost:3000/scores')
    .then((doc) => {
      console.log('got score data');
      console.log(doc.data);
      let tempScores = [];
      doc.data.scores.forEach((score) => {
        tempScores.push(score);
      })
      this.setState({
        scores: tempScores
      });
    }, (err) => {
      console.log(err);
    })
  }

  saveScore = () => {
    let myScore = {
      "name": this.state.name,
      "score": this.state.score
    };
    console.log('saving ' + JSON.stringify(myScore));
    axios.post('http://localhost:3000/scores', myScore)
    .then((doc) => {
      console.log('score saved');
    }, (err) => {
      console.log(err)
    });
  }

  handleUserName = (event) => {
    this.setState({
      name: event.target.value
    })
    console.log('user name: ' + this.state.name)
  }
  
  render() {
    const highScores = this.state.scores.map((score) => {
      return <li>{score.name} - {score.score}</li>
    });

    return (
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Flash Cards</h1>
          </header>
          <FlashCards onAnswerSelect={this.handleAnswerSelect} disabled={this.state.disabled} timeUp={this.state.timeUp}/>
          <div className="row">
            <div className="col-md-4">
              <Timer timerBus={this.handleTimer}/>
            </div>
            <div className="col-md-8">
              <Evaluate isCorrect={this.state.isCorrect} score={this.state.score}/>
            </div>
          </div>
          <div className="modal fade" id="scoreModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Score</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <h4 className="text-center">You scored {this.state.score} points on Spanish!</h4>
                          <div>&nbsp;</div>
                          <h6 className="text-center">All-Time High Scores</h6>
                          <ol>
                            {highScores}
                          </ol>
                          <h6 className="text-center">Save Your Score</h6>
                          <div className="row">
                            <div className="col-md-6 offset-md-2">
                            <p>Type Your Name</p>
                              <input id="user-name-input" type="text" onChange={this.handleUserName}/>
                            </div>
                            <div className="col-md-3">
                            <p>Score</p>
                              {this.state.score}
                            </div>
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" onClick={this.saveScore}>Save changes</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
