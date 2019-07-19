import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import OptionsBar from '../options-bar/OptionsBar';
import CodeEditor from '../code-editor/CodeEditor';
import TerminalWindow from '../terminal-window/TerminalWindow';
import Http from '../../utils/http.util';
import { execute, evaluate, getFnDefaultCode } from '../../utils/playground.util';
import './AttemptProblem.scss';

let codeEditorState;
let defaultCode;
let problemDetails;
let challengeId;

export default class AttemptProblem extends Component {

  constructor(props) {
    super();
    this.state = {
      show: false,
      score: 0
    };
    this.submit = this.submit.bind(this);
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow () {
    console.log('Handle show called');
    this.setState({show: true},()=>{

      console.log(this.state.show);
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    problemDetails = nextProps.problemDetails;
    defaultCode = getFnDefaultCode(problemDetails.signature);
  }

  handleCodeChange (codeValue) {
    codeEditorState = codeValue;
  };

  run () {
    try {
      execute(codeEditorState);
    } catch (err) {
      console.log(err);
    }
  };

  loadNextProblem () {

  };

  navigateToChallenges () {

  };
  
  submit () {
      // const score = evaluate(codeEditorState, problemDetails.signature.fnName, problemDetails.evaluate);
      const endpoint = `playground/submit-solution`;
      const body = {
        userId: '5d3018885b96ecf7463a640',
        challengeId: this.props.challengeId,
        name: problemDetails.name,
        problemCount: 1,
        problemId: problemDetails._id,
        solution: codeEditorState,
        topScore: 0,
        fnName: problemDetails.signature.fnName
      };
      Http.post({endpoint: endpoint, body}).then((res) => {
        console.log(`\n \n \n Congratulations! \n \n \n Your score is ${res.score}`);
        setTimeout(() => {
          this.setState({score: res.score});
          this.handleShow();
        }, 2000);
      });
  };

  render() {
    return (
      <>
      <div className='row attempt-problem'>
      <OptionsBar run={this.run} submit={this.submit}/>
      <CodeEditor code={defaultCode} onCodeChange={this.handleCodeChange}/>
      <TerminalWindow submit={this.submit}/>
      </div>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Body>Congratulations, your score is {this.state.score}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.navigateToChallenges}>
            Back
          </Button>
          <Button variant="primary" onClick={this.loadNextProblem}>
            Next 
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
};
