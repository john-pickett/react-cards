import React, { Component } from 'react';
import '../App.css';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class ModalFC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: 'Score',
      score: 0,
      highScores: null,
      userName: ''
    };

  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isActive === true) {
      this.setState({
          modal: true,
          score: this.props.userScore,
          highScores: this.props.highScores
      });
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClick = () => {
    this.props.saveScore(this.state.userName);
    this.toggle();
  }

  handleUserName = (event) => {
    this.setState({
      userName: event.target.value
    });
    console.log('user name: ' + this.state.userName);
  }

  render() {
    let highScores;

    if (this.state.highScores) {
      highScores = this.state.highScores.map((score) => {
        return <li key={score._id}>{score.name} - {score.score}</li>
      });
    }
    

    return (
      <div>
        {/* <Button color="primary" onClick={this.toggle}>Launch demo modal</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} autoFocus={false}>
          <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
          <ModalBody>
          <h4 className="text-center">You scored {this.state.score} points on Spanish!</h4>
            <div>&nbsp;</div>
            <h6 className="text-center">All-Time High Scores</h6>
            <ol>
              {highScores}
            </ol>
            <h6 className="text-center">Save Your Score</h6>
            <div className="row">
              <div className="col-md-6 offset-md-2">
              <p>Type Your Name</p>
                <input id="user-name-input" type="text" onChange={this.handleUserName}/>
              </div>
              <div className="col-md-3">
              <p>Score</p>
                {this.state.score}
              </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
            <Button color="primary" onClick={this.handleClick}>Save changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalFC;