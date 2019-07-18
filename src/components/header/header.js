import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const HeaderComp = () => (
    <header className="appHeader">
        <NavLink to="/profile" exact className="navLinkClass" >My Profile</NavLink>
        <NavLink to="/playground" exact className="navLinkClass">Playground</NavLink>
        <NavLink to="/forum" exact className="navLinkClass">Forum</NavLink>
    </header>
);

export default HeaderComp;