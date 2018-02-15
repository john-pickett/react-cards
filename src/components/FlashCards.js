import React, { Component } from 'react';
import '../App.css';

class FlashCards extends Component {
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
            ],
            answers: [
                "to dance",
                "to eat",
                "to begin",
                "to run",
                "to have",
                "to do",
                "to be able",
                "to say",
                "to go",
                "to see"
            ],
            randomAnswers: [],
            selectedOption: null
        }
        this.getRandomAnswers();
    }

    nextGuess = () => {
        console.log('nextGuess running')
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleOptionChange = (event) => {
        // console.log('FlashCards: ' + event.target.value);
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
        console.log('getRandomAnswers running')
        if (this.state.randomAnswers.length > 0) {
            this.setState({
                randomAnswers: []
            })
        }
        
        let currentAnswer = this.state.answers[this.state.counter];
        while (this.state.randomAnswers.length <= 3) {
            let possibleAnswer = this.state.answers[this.random(10)];
            if (this.state.randomAnswers.indexOf(possibleAnswer) === -1) {
                this.state.randomAnswers.push(possibleAnswer)
            }
        }
        this.state.randomAnswers.splice(this.random(4), 0, currentAnswer);
        console.log('ra[0]: ' + this.state.randomAnswers[0]);
    }

    random = (range) => {
        return Math.floor(Math.random() * range);
    }

    render () {
        
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <h4 className="card-title">Spanish</h4>
                        <p className="guess-word">{this.state.guesses[this.state.counter]}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <h4 className="card-title">English</h4>
                        <div className="form-group">
                            <input name="group2" type="radio" className="with-gap" id="radio1"  value={this.state.randomAnswers[0]}
                            checked={this.state.selectedOption === 'radio1'} onClick={this.handleOptionChange}/>
                            <label>{this.state.randomAnswers[0]}</label>
                        </div>
                        <div className="form-group">
                            <input name="group2" type="radio" className="with-gap" id="radio2" value={this.state.randomAnswers[1]}
                            checked={this.state.selectedOption === 'radio2'} onClick={this.handleOptionChange}/>
                            <label>{this.state.randomAnswers[1]}</label>
                        </div>
                        <div className="form-group">
                            <input name="group2" type="radio" className="with-gap" id="radio3" value={this.state.randomAnswers[2]}
                            checked={this.state.selectedOption === 'radio3'} onClick={this.handleOptionChange}/>
                            <label>{this.state.randomAnswers[2]}</label>
                        </div>
                        <div className="form-group">
                            <input name="group2" type="radio" className="with-gap" id="radio4"  value={this.state.randomAnswers[3]}
                            checked={this.state.selectedOption === 'radio4'} onClick={this.handleOptionChange}/>
                            <label>{this.state.randomAnswers[3]}</label>
                        </div>
                        <div className="form-group">
                            <input name="group2" type="radio" className="with-gap" id="radio5"  value={this.state.randomAnswers[4]}
                            checked={this.state.selectedOption === 'radio5'} onClick={this.handleOptionChange}/>
                            <label>{this.state.randomAnswers[4]}</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlashCards;