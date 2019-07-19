import React, { Component } from 'react';
import axios from 'axios';

import './profile.scss'

export default class ProfileComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentWillMount(){
        let githubAuthCode=(window.location.href).split('?')[1];
        let finalAuthCode=(githubAuthCode)?githubAuthCode.split('=')[1]:null;
        if(finalAuthCode){

        }
        axios.get(`http://localhost:4000/api/user/authenticate?code=${finalAuthCode}`)
        .then(res => {
        console.log(res);
      }).catch((err)=>{
          console.error('Error -->: ',err);
         //throw new Error('Error -->: ',err);
      })
    }
  
    render() {
        return (
            <div className="center-abs">
                <h1>Welcome to the Profile page of the application</h1>
            </div>
        );
    }
}