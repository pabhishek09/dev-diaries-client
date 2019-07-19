import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import HeaderComp from '../../components/header/header';
import UserComp from '../../components/userComp/userComp';

// import UserContext from '../../userDetails';
import './home.scss';
import ProfileComponent from '../profile/profile';
import ChallengeComponent from '../playground/challenges/challenges';
import ForumComponent from '../forum/forum';

export default class HomeComponent extends Component {
    // static contextType = UserContext
    constructor(props) {
        super();
        this.state = {
        }
    }
    componentDidMount() {
        let githubAuthCode = (window.location.href).split('?')[1];
        let finalAuthCode = (githubAuthCode) ? githubAuthCode.split('=')[1] : null;
        if (finalAuthCode) {

        }
        axios.get(`http://localhost:4000/api/user/authenticate?code=${finalAuthCode}`)
            .then(res => {
                let data = res.data;
                console.log(data.user[0]);
                if (data) {
                    this.setState({ userDetails: data.user[0] }
                    )
                }
            }).catch((err) => {
                if (err.response.status === 401) {
                    window.location.replace('/login');
                }
                console.error('Error -->: ', err);
            })
    }

    render() {
        return (
            <div>
                <HeaderComp userDetails={this.state.userDetails} />
                <Route exact path={`${this.props.match.path}/profile`} component={ProfileComponent} />
                <Route path={`${this.props.match.path}/playground`} component={ChallengeComponent} />
                <Route path={`${this.props.match.path}/forum`} component={ForumComponent} />
            </div>
        );
    }
}