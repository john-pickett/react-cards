import React, { Component } from 'react';
import '../App.css';

class Timer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            timeRemaining: "60"
        }
        this.cardsTimer = this.cardsTimer.bind(this);
        // this.delta = this.delta.bind(this);
    }
    componentDidMount () {
        // this.cardsTimer();
    }

    cardsTimer () {
        var begin = new Date().getTime();
        var timesUp = begin + 5000;
    
        var x = setInterval( () => {
          var now = new Date().getTime();
          var timeLeft = timesUp - now;
          
          var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
          console.log('left: ' + secondsLeft);
          this.setState({
            timeRemaining: secondsLeft
          });
          if (timeLeft <= 0) {
            this.setState({
                timeRemaining: "Time's Up!"
            })
            clearInterval(x);
          }
        }, 1000)
      }
    render () {
        return (
            <div className="card" id="timer-card">
                <h4 className="card-title">Timer</h4>
                <p>{this.state.timeRemaining}</p>
                <button type="button" className="btn btn-primary" onClick={this.cardsTimer}>Start</button>
            </div>
        )
    }
}

export default Timer;