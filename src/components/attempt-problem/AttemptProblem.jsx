import React, { Component } from 'react';
import OptionsBar from '../options-bar/OptionsBar';
import CodeEditor from '../code-editor/CodeEditor';
import TerminalWindow from '../terminal-window/TerminalWindow';
import { execute, evaluate, getFnDefaultCode } from '../../utils/playground.util';
import './AttemptProblem.scss';

let codeEditorState;
let defaultCode;
let problemDetails;

export default class AttemptProblem extends Component {

  constructor(props) {
    super();
  }

  componentWillReceiveProps(nextProps) {
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

  submit () {
    try {
      evaluate(codeEditorState, this.problem.name, this.problem.expectations)
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className='row attempt-problem'>
      <OptionsBar run={this.run} submit={this.submit}/>
      <CodeEditor code={defaultCode} onCodeChange={this.handleCodeChange}/>
      <TerminalWindow submit={this.submit}/>
    </div>
    );
  }
};
