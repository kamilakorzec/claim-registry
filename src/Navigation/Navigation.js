import React, { Component } from 'react';

import NavItem from './NavItem/NavItem.js';

export const routes = ['dashboard', 'form'];

class Navigation extends Component {
    render() {
        return (
            <div className="Header">
                {routes.map(route => <NavItem route={route} name={route}/>)}
            </div>
        );
    }
}

export default Navigation;
