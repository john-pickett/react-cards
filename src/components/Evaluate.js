import React, { Component } from 'react';
import '../App.css';
import Correct from './Correct'
import Incorrect from './Incorrect'

class Evaluate extends Component {
    constructor (props) {
        super (props);
        
    }

    render () {
        let isCorrect = this.props.isCorrect
        let showEval = null;

        if (isCorrect === true) {
            console.log('eval true')
            showEval = <Correct />;
        } else if (isCorrect === false) {
            console.log('eval false')
            showEval = <Incorrect />;
        } else {
            showEval = null;
        }
        return (
            <div className="card">
                <h4 className="card-title">Evaluate</h4>
                {showEval}
            </div>
        )
    }
}

export default Evaluate;