import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginComponent from './views/login/login'
import ForumComponent from './views/forum/forum.jsx';
import ProfileComponent from './views/profile/profile';
import ChallengeComponent from './views/playground/challenges/challenges';
import ProblemComponent from './views/playground/problem/problem';
import ErrorComponent from './views/errorRoute/error';

export const history = createBrowserHistory();
const Routes = () => {
    return (
        <div className="full-height container-fluid">
            <Router history={history}>
                <Switch>
                    <Route path="/login" exact component={LoginComponent}></Route>
                    <Route path="/profile" exact component={ProfileComponent}></Route>
                    <Route path="/forum" exact component={ForumComponent}></Route>
                    <Route path="/playground" exact component={ChallengeComponent}></Route>
                    <Route path="/playground/:challengeId/:problemId" exact component={ProblemComponent}></Route>
                    <Redirect from="/" to="/profile"></Redirect>
                    <Route component={ErrorComponent}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
