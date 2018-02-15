import React, { Component } from 'react';
import '../App.css';

class Spanish extends Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 0,
            guesses: [
                "bailar",
                "comer",
                "empezar",
                "correr",
                "tener",
                "hacer",
                "poder",
                "decir",
                "ir",
                "ver"
            ]
        }
    }

    nextGuess = () => {
        console.log('nextGuess running')
        this.setState({
            counter: this.state.counter + 1
        })
    }

    timer = () => {
        setInterval(this.nextGuess, 1000)
    }
        
    componentDidMount () {
        
    }
    render () {
        
        let guesses = [
            
        ];
        
        return (
            <div className="card">
                <h4 className="card-title">Spanish</h4>
                <p className="guess-word">{this.state.guesses[this.state.counter]}</p>
              </div>
        )
    }
}

export default Spanish;