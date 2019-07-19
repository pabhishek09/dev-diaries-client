import React, { Component } from 'react';
import './ChallengesList.scss';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ProblemList from '../problem-list/ProblemList';
import _map from 'lodash/map';

export default class ChallengesList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="challengelist-parent">
        <Accordion>
          {_map(this.props.challenges, (challenge, index) => {
            return (
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Card.Header} variant="link" eventKey={index}>
                    <div className="row no-side-margins">
                      <div className="col-sm-2">
                        <img src={require('../../assets/chip.png')} className="chip-score-img" alt="chip-logo" />
                        <span className="count-text">{challenge.problemCount*10}</span>
                      </div>
                      <div className="col-sm-8 challenge-name-text img-center">{challenge.name}</div>
                      <div className="col-sm-2 img-center" ><i className="up"></i></div>
                    
                    </div>
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body><ProblemList challengeId={challenge._id} problems={challenge.problems} /></Card.Body>
                </Accordion.Collapse>
              </Card>
            )
          })}
        </Accordion>
      </div>
      // <ListGroup>
      //   {_map(this.props.challenges, (challenge, index) => {
      //     return (<ListGroup.Item key={index}>
      //       <p>{challenge.name}</p>
      //       <p>{challenge.desc}</p>
      //       <ProblemList challengeId={challenge._id} problems={challenge.problems} />
      //     </ListGroup.Item>)
      //   })}
      // </ListGroup>
    );
  }
}
