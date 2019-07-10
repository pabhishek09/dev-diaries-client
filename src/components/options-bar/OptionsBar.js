import React from 'react';

const OptionsBar = (props) => {
  return (
    <div className="col-md-12 options-bar">
      <ul class="nav">
        <li class="nav-item">
          <span class="nav-link" onClick={props.run}>Run</span>
        </li>
        <li class="nav-item">
          <span class="nav-link" onClick={props.submit}>Submit</span>
        </li>
      </ul>
    </div>
  )
};

export default OptionsBar;
