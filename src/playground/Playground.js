import React from 'react';
import CodeEditor from '../components/code-editor/CodeEditor';
import TerminalWindow from '../components/terminal-window/TerminalWindow';

const Playground = () => {
  return (
    <div className='playground'>
      <h1>Playground!</h1>
      <CodeEditor/>
      <TerminalWindow/>
    </div>
  )
}

export default Playground;
