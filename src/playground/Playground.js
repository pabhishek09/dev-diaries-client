import React from 'react';
import CodeEditor from '../components/code-editor/CodeEditor';
import TerminalWindow from '../components/terminal-window/TerminalWindow';
import './Playground.css';

const Playground = () => {
  return (
    <div className='row playground-container'>
      <CodeEditor/>
      <TerminalWindow/>
    </div>
  )
}

export default Playground;
