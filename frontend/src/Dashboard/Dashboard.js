import React, { Component } from 'react';
import axios from 'axios';

import Entry from './Entry/Entry'

const baseUrl = 'http://localhost:8000/claims';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {data: []};
        this.setState.bind(this);
    }

    render() {
        return (
            <div className="dashboard col-sm-12">
                <table className="col-sm-12">
                    <thead>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Policy ID</th>
                        <th>Claim type</th>
                        <th>Claim amount</th>
                        <th>Date occurred</th>
                        <th>Status</th>
                    </thead>
                    <tbody>{this.state.data.map((entry) => <Entry key={entry._id} entry={entry}/>)}</tbody>
                </table>
            </div>
        );
    }

    componentDidMount() {
        axios.get(baseUrl).then((response) => this.setState({data: response.data}));
    }
}

export default Dashboard;
