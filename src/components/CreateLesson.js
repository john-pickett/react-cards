import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';

import axios from 'axios';

class CreateLesson extends Component {
    constructor (props) {
        super(props)

        this.state = {
            length: 1,
            timer: 30
        }
    }

    saveLesson = () => {
        console.log('lesson saved');
    }
    render () {
        return (
            <div>
                <Navbar />
                <h2>Create New Lesson</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card create-lesson-card">
                        <span className="card-title">Flash Cards</span>
                            <div className="md-form">
                                <input type="text" id="lesson-title" className="form-control" />
                                <label htmlFor="lesson-title">Lesson Title</label>
                                <input type="text" id="card1" className="form-control" />
                                <label htmlFor="card1">Input</label>
                                <input type="text" id="card2" className="form-control" />
                                <label htmlFor="card2" >Input</label>
                            </div>
                            
                            <p>The word and its answer must be on the same row.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card create-lesson-card">
                        <span className="card-title">Correct Answers</span>
                            <input type="text" />
                            <label>Input</label>
                            <input type="text" />
                            <label>Input</label>
                            <button className="btn btn-primary" onClick={this.saveLesson}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateLesson;