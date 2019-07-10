import React from 'react';
import Terminal from 'terminal-in-react';
import { description, commandPassThrough, msg, style } from './TerminalWindowConfig';
import './TerminalWindow.css';

const TerminalWindow = (props) => {

  const commands =  {
    sub: () => {
      props.submit();
    }
  };

  return (
    <div className='col-md-6 terminal-window'>
      <Terminal 
        watchConsoleLogging
        commandPassThrough={commandPassThrough}
        hideTopBar
        color='#EDEDED'
        backgroundColor='#263238'
        barColor='black'
        style={style}
        commands={commands}
        descriptions={description}
        msg={msg}
      />
    </div>
  )
};

export default TerminalWindow;
