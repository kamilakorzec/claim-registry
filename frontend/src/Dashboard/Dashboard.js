import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

import Entry from './Entry/Entry'

const dashboardColumns = [
    {accessor: 'name', Header: 'Name'},
    {accessor: 'email', Header: 'E-mail'},
    {accessor: 'policy', Header: 'Policy ID'},
    {accessor: 'claim_type', Header: 'Claim Type'},
    {accessor: 'amount', Header: 'Claim Amount'},
    {accessor: 'date', Header: 'Date Occured'},
    {Header: '', Cell: Entry}

]

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <ReactTable data={[]} columns={dashboardColumns}/>
            </div>
        );
    }
}

export default Dashboard;
