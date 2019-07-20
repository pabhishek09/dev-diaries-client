import React from 'react';
import './RankedUser.scss';

const RankedUser = (props) => {
  let imgSrc;
  if (props.info.level === 'Gold') {
    imgSrc = require('../../assets/gold-badge.png')
  } else if (props.info.level === 'Silver') {
    imgSrc = require('../../assets/silver-badge.png')
  } else if(props.info.level === 'Bronze') {
    imgSrc = require('../../assets/bronze-badge.png')
  }
  return (
    <div className={'ranked-user' + (props.isLoggedInUser ? ' user-rank' : '')}>
      <div className='rank-container'>
        <span className='rank'>{props.info.rank}.</span>
      </div>
      <div className='badge-container'>
        <img src={imgSrc} alt='badge' className='user-badge'/>
      </div>
      <div className='user-info'>
        <a className='name' href={props.info.html_url} target='_blank' rel="noopener noreferrer">{props.info.login}</a>
        <span className='score'>{props.info.playgroundProfile.score}</span>
      </div>
    </div>
  )
};

export default RankedUser;
