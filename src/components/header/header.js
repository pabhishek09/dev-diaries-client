import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const HeaderComp = () => (
    <header className="appHeader row text-center">
        <div className="col-sm-3">
            <img src={require('../../assets/dev-diaries-header.png')} className="dev-diaries-logo" alt="dev-diaries-logo" />
        </div>
        <div className="col-sm-6">
        <NavLink to="/profile" exact className="navLinkClass" >My Profile</NavLink>
        <NavLink to="/playground" exact className="navLinkClass">Playground</NavLink>
        <NavLink to="/forum" exact className="navLinkClass">Forum</NavLink>
        </div>
        <div className="col-sm-3">
            <img src={require('../../assets/dev-diaries-header.png')} className="user-img" alt="dev-diaries-logo" />
        </div>
       
    </header>
);

export default HeaderComp;
