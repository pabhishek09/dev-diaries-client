import React from 'react';
import Challenge from './Challenge';
import OptionsBar from '../options-bar/OptionsBar';
import CodeEditor from '../code-editor/CodeEditor';
import TerminalWindow from '../terminal-window/TerminalWindow';
import { execute, evaluate } from '../../utils/playground.util';
import './AttemptProblem.scss';

const AttemptProblem = () => {

  let codeEditorState;
  const problem = Challenge.problems[0];
  const defaultCode = `
/*
  ${problem.description}
  Code should contain a function ${problem.name} which accepts ${problem.argument}
*/
`;

  const handleCodeChange = (codeValue) => {
    codeEditorState = codeValue;
  };

  const run = () => {
    try {
      execute(codeEditorState);
    } catch (err) {
      console.log(err);
    }
  };

  const submit = () => {
    try {
      evaluate(codeEditorState, problem.name, problem.expectations)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='row attempt-problem'>
      <OptionsBar run={run} submit={submit}/>
      <CodeEditor code={defaultCode} onCodeChange={handleCodeChange}/>
      <TerminalWindow submit={submit}/>
    </div>
  )
};

export default AttemptProblem;
