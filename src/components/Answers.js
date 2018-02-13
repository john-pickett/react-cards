import React, { Component } from 'react';
import '../App.css';


class Answers extends Component {
    constructor (props) {
        super (props);
        this.state = {
            selectedOption: null
          }
          this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange (event) {
        console.log('Answers: ' + event.target.value);
        this.setState({
          selectedOption: event.target.value
        });
        this.props.onAnswerSelect(event.target.value);
      }

    render () {
        return (
            <div className="card">
                <h4 className="card-title">English</h4>
                <div className="form-group">
                    <input name="group2" type="radio" className="with-gap" id="radio4"  value="option1"
                    checked={this.state.selectedOption === 'option1'} onClick={this.handleOptionChange}/>
                    <label>Option 1</label>
                </div>
                <div className="form-group">
                    <input name="group2" type="radio" className="with-gap" id="radio5" value="option2"
                    checked={this.state.selectedOption === 'option2'} onClick={this.handleOptionChange}/>
                    <label>Option 2</label>
                </div>
                <div className="form-group">
                    <input name="group2" type="radio" className="with-gap" id="radio6" value="option3"
                    checked={this.state.selectedOption === 'option3'} onClick={this.handleOptionChange}/>
                    <label>Option 3</label>
                </div>
            </div>
        )
    }
}


export default Answers;