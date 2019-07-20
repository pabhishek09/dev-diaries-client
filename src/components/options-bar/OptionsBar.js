import React from 'react';
import { NavLink } from 'react-router-dom';
import './OptionsBar.scss';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';


const OptionsBar = (props) => {
  return (
    <div className="col-sm-12 options-bar">
      <div className="problem-details">
        <span className="title">{props.problemDetails.name}</span>
        <span className="desc">{props.problemDetails.desc}</span>
      </div>
      <div className="actions">
        <ButtonToolbar>
          <NavLink className="challenges-link" to="/playground" exact>Back to challenges</NavLink>
          <Button variant="primary btn btn-run" onClick={props.run}>Run</Button>
          <Button variant="secondary btn btn-submit" onClick={props.submit}>Submit</Button>
        </ButtonToolbar>
      </div>
    </div> 
  )
};

export default OptionsBar;
