import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HeaderComp from './components/header/header';
import FooterComp from './components/footer/footer';
import LoginComponent from './views/login/login'
import ForumComponent from './views/forum/forum.jsx';
import ProfileComponent from './views/profile/profile';
import PlaygroundComponent from './views/playground/playground';
import challengeComponent from './views/challenge/challenge';
import challengeDetailComponent from './views/challengeDetail/challengeDetail';
import challengeProblemComponent from './views/challengeProblem/challengeProblem';
import ErrorComponent from './views/errorRoute/error';

//The two routes for challenge and challenge details need to be set. Need to also create components for those.
export const history = createBrowserHistory();
const Routes = () => {
    return (
        <div >
            
            <Router history={history}>
            {window.location.pathname !== '/login' && <HeaderComp/>}
                <Switch>
                    <Route path="/login" exact component={LoginComponent}></Route>
                    <Route path="/profile" exact component={ProfileComponent}></Route>
                    <Route path="/forum" exact component={ForumComponent}></Route>
                    <Route path="/playground" exact component={PlaygroundComponent}></Route>
                    <Route path="/playground/challenges" exact component={challengeComponent}></Route> */} 
                    <Route path="/playground/challenges/:challengeId" exact component={challengeDetailComponent}></Route>
                    <Route path="/playground/challenges/:challengeId/problem" exact component={challengeProblemComponent}></Route>
                    <Redirect from="/" to="/profile"></Redirect>
                    <Route component={ErrorComponent}></Route>
                </Switch>
                <FooterComp></FooterComp>
            </Router>
            </div>
    )
}

export default Routes