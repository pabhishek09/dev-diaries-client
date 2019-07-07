import React from 'react';
import CodeEditor from '../components/code-editor/CodeEditor';
import TerminalWindow from '../components/terminal-window/TerminalWindow';
import './Playground.css';

const Playground = () => {
  return (
    <div className='row playground'>
      <div className='col-md-12 options-bar'>
        <p>Run</p>
      </div>
      <CodeEditor/>
      <TerminalWindow/>
    </div>
  )
}

export default Playground;
