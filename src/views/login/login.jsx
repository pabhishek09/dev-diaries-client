import React, { Component } from 'react';
import config from '../../githubConfig';

import './login.scss';

export default class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    loginUser(){
       const a =`https://github.com/login/oauth/authorize?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&scope=user`;
       window.location.replace(a);
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className="login-div row no-side-margins">
                <div className="col-sm-4 img-center">
                    <img src={require('../../assets/login-logo.png')} className="login-logo" alt="dev-diaries-logo" />
                </div>
                <div className="col-sm-8 img-center">
                    <img src={require('../../assets/sign-in-github.png')} className="sign-in-img" alt="sign-in-github" onClick={()=>this.loginUser()} />
                </div>
            </div>
        );
    }
}