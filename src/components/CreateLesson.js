import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';

class CreateLesson extends Component {

    render () {
        return (
            <div>
                <Navbar />
                <h2>Create New Lesson</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                        <span className="card-title">Words To Guess</span>
                            <input type="text" />
                            <label>Lesson Title</label>
                            <input type="text" />
                            <label>Input</label>
                            <p>The word and its answer must be on the same row.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                        <span className="card-title">Correct Answers</span>
                            <input type="text" />
                            <label>Input</label>
                            <input type="text" />
                            <label>Input</label>
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateLesson;