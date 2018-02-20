
import axios from 'axios';
import classnames from 'classnames';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mdbreact/docs/css/mdb.min.css';

import React, { Component } from 'react';
import './App.css';
import NavbarFC from './components/Navbar';
import Timer from './components/Timer';
import Evaluate from './components/Evaluate';
import FlashCards from './components/FlashCards';
import ModalFC from './components/Modal';



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isCorrect: null,
      timesUp: false,
      score: 0,
      userName: '',
      disabled: true,
      timeUp: false,
      highScores: [],
      modal: false
    }

    this.getScores();
  }

  componentWillMount () {
    // console.log('will mount')
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
        timeUp: true,
        modal: true
      })
      this.openModal();
    }
  }

  openModal = () => {
    // $('#scoreModal').modal()
  }

  getScores = () => {
    axios.get('http://localhost:3000/scores')
    // axios.get('https://flash-cards-api.herokuapp.com/scores')
    .then((doc) => {
      console.log('got score data');
      console.log(doc.data);
      let tempScores = [];
      doc.data.scores.forEach((score) => {
        score.score = parseInt(score.score)
        tempScores.push(score);
      })
      tempScores.sort((a, b) => {
        return b.score - a.score
      })
      this.setState({
        highScores: tempScores
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
    // console.log('saving ' + JSON.stringify(myScore));
    axios.post('http://localhost:3000/scores', myScore)
    // axios.post('https://flash-cards-api.herokuapp.com/scores', myScore)
    .then((doc) => {
      console.log('score saved');
      // $('#scoreModal').modal('hide');
    }, (err) => {
      console.log(err)
    });
  }

  handleUserName = (event) => {
    this.setState({
      userName: event.target.value
    });
    console.log('user name: ' + this.state.userName);
  }
  
  render() {
    const highScores = this.state.highScores.map((score) => {
      return <li>{score.name} - {score.score}</li>
    });

    return (
      <div className="App">
        <NavbarFC />
        <div className="body">
          <FlashCards onAnswerSelect={this.handleAnswerSelect} disabled={this.state.disabled} timeUp={this.state.timeUp}/>
          <div className="row">
            <div className="col-md-4">
              <Timer timerBus={this.handleTimer}/>
            </div>
            <div className="col-md-8">
              <Evaluate isCorrect={this.state.isCorrect} score={this.state.score}/>
            </div>
          </div>
        </div>
        <ModalFC active={this.state.modal}/>
      </div>
    );
  }
}

export default App;
