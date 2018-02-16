import React, { Component } from 'react';
import '../App.css';
import Correct from './Correct'
import Incorrect from './Incorrect'

class Evaluate extends Component {
    constructor (props) {
        super (props);
        
        this.setState = {
            correct: null,
            incorrect: null
        }

    }

    // this.props.isCorrect? "correct" : "incorrect"

    render () {
        let isCorrect = this.props.isCorrect
        let showEval = null;
        let score = this.props.score;

        if (isCorrect === true) {
            // console.log('eval true')
            showEval = <Correct />;

        } else if (isCorrect === false) {
            // console.log('eval false')
            showEval = <Incorrect />;

        } else {
            showEval = null;

        }

        return (
            <div className="card">
                <div className="row">
                    <div className="col-md-8">
                        {showEval}
                    </div>
                    <div className="col-md-4 score-card">
                        <h4 className="card-title">Score</h4>
                        {score}
                    </div>
                </div>
            </div>
        )
    }
}

export default Evaluate;