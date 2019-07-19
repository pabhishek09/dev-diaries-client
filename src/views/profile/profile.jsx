import React, { Component } from 'react';
import axios from 'axios';
import ChallengesList from '../../components/challenges-list/ChallengesList';
import HeaderComp from '../../components/header/header';
import UserComp from '../../components/userComp/userComp'
import Http from '../../utils/http.util';
import './profile.scss'

export default class ProfileComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        let userId;
        let githubAuthCode = (window.location.href).split('?')[1];
        let finalAuthCode = (githubAuthCode) ? githubAuthCode.split('=')[1] : null;
        if (finalAuthCode) {
            axios.get(`http://localhost:4000/api/user/authenticate?code=${finalAuthCode}`)
            .then(res => {
                let data = res.data;
                console.log(data.user[0]);
                if (data) {
                    this.setState({ userDetails: data.user[0] })
                    userId=data.user[0]._id;
                    console.log(userId);
                    this.getUserChallenges(userId).then((resData) => this.setState({ mychallenges: resData }, () => {console.log(this.state.mychallenges)}));
                }
            }).catch((err) => {
                  if(err.response.status===401){
                    window.location.replace('/login');
                  }
                console.error('Error -->: ', err);
            })}
            
    }

        
    
      async getUserChallenges(userId) {
        const mychallengesEndpoint = `playground/my-challenges/${userId}`;
        return await Http.get({ endpoint: mychallengesEndpoint });
      };

    render() {
        return (<div>
            
                <HeaderComp/>
                <div className="row no-side-margin">
                    <div className="offset-sm-2 col-sm-8">
                        <UserComp userDetails={this.state.userDetails}></UserComp>
                        <ChallengesList challenges={this.state.mychallenges}/>
                    </div>
                </div>
        </div>

        );
    }
}