import React, { Component } from 'react';

import { Auth } from "../Auth";

import "./UnauthorizedDashboard.css";



class UnauthorizedDashboard extends Component {
    render() {
        return (
            <div className="unauthorized">
                <div className="unauthorized-message"> Sign in to see the dashboard. </div>
                <button className="btn btn-primary" onClick={Auth.logIn}>Sign in</button>
            </div>
        );
    }
}

export default UnauthorizedDashboard;
