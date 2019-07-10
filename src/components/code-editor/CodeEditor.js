import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './CodeEditor.css';

const CodeEditor = (props) => {

  const handleCodeChange = (editor, data, value) => {
    props.onCodeChange(value);
  };

  return (
    <div className='col-md-6 code-editor'>
      <CodeMirror
        value={props.code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={handleCodeChange}/>
    </div>
  )
};

export default CodeEditor;
