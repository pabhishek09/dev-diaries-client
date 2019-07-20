import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

export default class HeaderComp extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <header className="appHeader row no-side-margins">
                <div className="col-sm-3 text-center">
                    <img src={require('../../assets/dev-diaries-header.png')} className="dev-diaries-logo" alt="dev-diaries-logo" />
                </div>
                <div className="col-sm-6 header-links">
                    <NavLink to="/profile" exact className="navLinkClass" >My Profile</NavLink>
                    <NavLink to="/playground" exact className="navLinkClass">Playground</NavLink>
                </div>
            </header>
        )
    }
}
