import React from 'react';
import RankedUser from '../ranked-user/RankedUser';
import './Leaderboard.scss';

const Leaderboard = (props) => {
  return (
    <div className='leaderboard'>
      <span className='title'>Your rank</span>
      <RankedUser info={props.userOnLeaderboard} isLoggedInUser={true}/>
      <span className='title'>Leaderboard</span>
      {props.leaderboard.map((userInfo, index) => {
        return <RankedUser info={userInfo} key={index}/>
      })}
    </div>
  )
};

export default Leaderboard;
