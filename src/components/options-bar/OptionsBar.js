import React from 'react';

const OptionsBar = (props) => {
  return (
    <div className="col-md-12 options-bar">
      <ul className="nav">
        <li className="nav-item">
          <span className="nav-link" onClick={props.run}>Run</span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={props.submit}>Submit</span>
        </li>
      </ul>
    </div>
  )
};

export default OptionsBar;
