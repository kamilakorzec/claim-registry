import React, { Component } from 'react';

import NavItem from './NavItem/NavItem.js';
import { Auth } from "../Auth";

export const routes = ['dashboard', 'form'];

class Navigation extends Component {
    render() {
        return (
            <div className="Header">
                {routes.map(route => <NavItem route={route} name={route} key={route}/>)}
                <span className="nav-item" onClick={Auth.authenticate() ? Auth.logOut : Auth.logIn}>
                    { Auth.authenticate() ? 'Log out' : 'Sign in' }
                </span>
            </div>
        );
    }
}

export default Navigation;
