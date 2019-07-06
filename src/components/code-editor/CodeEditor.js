import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const handleCodeChange = (editor, data, value) => {
  console.log('Editor code changes');
  console.log(value);
  console.log(data);
  console.log(editor);
}

const CodeEditor = () => {
  return (
    <div className='col-md-6 code-editor'>
      <CodeMirror
        value='function main() {}'
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={handleCodeChange}/>
    </div>
  )
}

export default CodeEditor;
