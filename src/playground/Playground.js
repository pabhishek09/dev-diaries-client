import React from 'react';

import Challenge from './Challenge';
import OptionsBar from '../components/options-bar/OptionsBar';
import CodeEditor from '../components/code-editor/CodeEditor';
import TerminalWindow from '../components/terminal-window/TerminalWindow';
import { execute, evaluate } from '../utils/playground.util';

import './Playground.scss';


const Playground = () => {

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
    <div className='row playground'>
      <OptionsBar run={run} submit={submit}/>
      <CodeEditor code={defaultCode} onCodeChange={handleCodeChange}/>
      <TerminalWindow submit={submit}/>
    </div>
  )
};

export default Playground;
