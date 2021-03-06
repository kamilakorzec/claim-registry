import React, { Component } from 'react';
import { Form, Input, Select } from 'formsy-react-components';
import axios from 'axios';

import './Form.css'

const selectOptions = [
    {value: 'lost_baggage', label: 'Lost Baggage'},
    {value: 'theft', label: 'Theft'},
    {value: 'missed_flight', label: 'Missed flight'},
    {value: 'illness', label: 'Illness'},
    {value: 'accident', label: 'Accident'},
];

class ClaimForm extends Component {
    render() {
        return (
            <div className="col-sm-12 form">
                <Form onSubmit={this.submitData} className="col-sm-12">
                    <Input name="name" type="text" label="Name" />
                    <Input name="email" type="email" label="E-mail address" />
                    <Input name="policy" type="text" label="Policy ID" />
                    <Select name="claim_type" options={selectOptions} label="Claim type"/>
                    <Input name="amount" type="number" label="Claim amount" />
                    <Input name="date" type="date" label="Date occurred" />

                    <button onClick={this.submitData} className="btn btn-primary pull-right">Submit claim</button>
                </Form>
            </div>
        );
    }

    submitData(data) {
        const request = Object.assign({}, data, {status: "new"});
        axios.post('http://localhost:8000/claims', request).then(() => window.location.reload())
    }
}

export default ClaimForm;
