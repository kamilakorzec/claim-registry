import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/claims';

class Actions extends Component {
    render() {
        return (
            <div className="actions">
                <button className="btn btn-primary" onClick={() => this.update('approved')}>Approve</button>
                <button className="btn btn-secondary" onClick={() => this.update('rejected')}>Reject</button>
            </div>
        );
    }

    update(status) {
        const entry = this.props.entry;
        const request = Object.assign({}, entry, {status});

        axios.put(`${baseUrl}/${entry._id}`, request)
    }
}

export default Actions;
