import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

export default class HeaderComp extends Component{
    constructor(props) {
        super();
        this.state = {
            userDetails:props.userDetails
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.userDetails && (!this.props.userDetails)){
            this.setState({
                userDetails:nextProps.userDetails
            })
        }
    }
    render(){
        let userDetails=this.state.userDetails;
        return(
            <header className="appHeader row ">
            <div className="col-sm-3 text-center">
                <img src={require('../../assets/dev-diaries-header.png')} className="dev-diaries-logo" alt="dev-diaries-logo" />
            </div>
            <div className="col-sm-6 header-links">
            <NavLink to="/profile" exact className="navLinkClass" >My Profile</NavLink>
            <NavLink to="/playground" exact className="navLinkClass">Playground</NavLink>
            <NavLink to="/forum" exact className="navLinkClass">Forum</NavLink>
            </div>
            <div className="col-sm-3 text-center">
                {userDetails && <img src={userDetails.avatar_url} className="user-img" alt="dev-diaries-logo" />}
                
            </div>
           
        </header>
        )
            
    }
}
