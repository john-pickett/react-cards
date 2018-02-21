import React, { Component } from 'react';
import '../App.css';
import TimeUp from './TimeUp';

class FlashCards extends Component {
    constructor (props) {
        super(props);

        this.state = {
            counter: 0,
            length: 26,
            guesses: ["bailar","comer","empezar","correr","tener","hacer","poder","decir","ir","ver","dar","saber","querer","llegar","pasar",
                        "deber","poner","parecer","quedar","creer","hablar","llevar","dejar","seguir","encontrar","llamar"],
            answers: ["to dance","to eat","to begin","to run","to have","to do","to be able","to say","to go","to see","to give",
                        "to know","to want","to arrive","to happen","to ought to","to put","to seem", "to stay", "to believe","to speak",
                        "to carry","to leave","to follow","to find","to call"],
            randomAnswers: [],
            selectedOption: null
        }
        this.getRandomAnswers();

    }

    nextGuess = () => {
        // console.log('nextGuess running')
        this.setState({
            counter: this.state.counter + 1
        })
        
        if (this.state.counter >= this.state.length) {
            this.setState({
                counter: 0
            })
        }
    }

    handleOptionChange = (event) => {
        console.log('FlashCards: ' + event.target.value);
        // this goes to App and then Evaluate to show Correct/Incorrect
        this.setState({
          selectedOption: event.target.id
        });
        // console.log(this.state.answers.indexOf(event.target.value))
        if (this.state.answers.indexOf(event.target.value) === this.state.counter) {
            console.log('correct')
            this.props.onAnswerSelect('correct');
        } else {
            console.log('nope')
            this.props.onAnswerSelect('incorrect');
        }

        // this incs the counter and then clears the previous guess
        setTimeout( () => {
            this.setState({
                counter: this.state.counter + 1
            })
            this.clearGuess()
        }, 1000)
      }

    clearGuess = () => {
        this.getRandomAnswers();
        this.setState({
            selectedOption: null
        })
        // this resets Correct/Incorrect in Evaluate
        this.props.onAnswerSelect(null);
        
    }

    getRandomAnswers = () => {
        // need to make sure correct answer is not added to randomAnswers!!
        
        // console.log('getRandomAnswers running')
        if (this.state.randomAnswers.length > 0) {
            this.setState({
                randomAnswers: []
            })
        }
        
        let currentAnswer = this.state.answers[this.state.counter];
        while (this.state.randomAnswers.length <= 3) {
            let possibleAnswer = this.state.answers[this.random(10)];
            // checks to see if pA is already in rA, then checks to make sure pA is not cA
            if (this.state.randomAnswers.indexOf(possibleAnswer) === -1 && possibleAnswer !== currentAnswer) {
                this.state.randomAnswers.push(possibleAnswer)
            }
        }
        this.state.randomAnswers.splice(this.random(4), 0, currentAnswer);
        // console.log('ra[0]: ' + this.state.randomAnswers[0]);
    }

    random = (range) => {
        return Math.floor(Math.random() * range);
    }

    isDisabled = () => {
        if (this.props.disabled) {
            return true;
        } else {
            return false;
        }
    }

    render () {
        
        let isTimeUp = this.props.timeUp;
        let showTimeUp = null;

        if (isTimeUp === true) {
            showTimeUp = <TimeUp />
        } 

        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card flash-card">
                        <h4 className="card-title">Spanish</h4>
                        <p className="guess-word">{this.state.guesses[this.state.counter]}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card flash-card">
                        <h4 className="card-title">English</h4>
                        <div className="row">
                            <div className="col-md-6 offset-md-6">
                                <div id="time-up">
                                    {showTimeUp}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input disabled={this.isDisabled()} name="group2" type="radio" className="with-gap" id="radio1" 
                            value={this.state.randomAnswers[0]} checked={this.state.selectedOption === 'radio1'} 
                            onClick={this.handleOptionChange} />
                            <label htmlFor="radio1" >{this.state.randomAnswers[0]}</label>
                        </div>
                        <div className="form-group">
                            <input disabled={this.isDisabled()} name="group2" type="radio" className="with-gap" id="radio2" 
                            value={this.state.randomAnswers[1]} checked={this.state.selectedOption === 'radio2'} 
                            onClick={this.handleOptionChange} />
                            <label htmlFor="radio2">{this.state.randomAnswers[1]}</label>
                        </div>
                        <div className="form-group">
                            <input disabled={this.isDisabled()} name="group2" type="radio" className="with-gap" id="radio3" 
                            value={this.state.randomAnswers[2]} checked={this.state.selectedOption === 'radio3'} 
                            onClick={this.handleOptionChange} />
                            <label htmlFor="radio3">{this.state.randomAnswers[2]}</label>
                        </div>
                        <div className="form-group">
                            <input disabled={this.isDisabled()} name="group2" type="radio" className="with-gap" id="radio4" 
                            value={this.state.randomAnswers[3]} checked={this.state.selectedOption === 'radio4'} 
                            onClick={this.handleOptionChange} />
                            <label htmlFor="radio4">{this.state.randomAnswers[3]}</label>
                        </div>
                        <div className="form-group">
                            <input disabled={this.isDisabled()} name="group2" type="radio" className="with-gap" id="radio5" 
                            value={this.state.randomAnswers[4]} checked={this.state.selectedOption === 'radio5'} 
                            onClick={this.handleOptionChange} />
                            <label htmlFor="radio5">{this.state.randomAnswers[4]}</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default FlashCards;