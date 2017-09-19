import React  from 'react';
import Actions from './Actions/Actions'

const getClass = (status) => { return status === 'approved' ? 'success' : status === 'rejected' ? 'danger' : '' };

const  Entry = ({entry, update}) => (
    <tr className={getClass(entry.status)}>
        <td>{entry.name}</td>
        <td>{entry.email}</td>
        <td>{entry.policy}</td>
        <td>{entry.claim_type}</td>
        <td>{entry.amount}</td>
        <td>{entry.date}</td>
        <td>{entry.status}</td>
        <td><Actions entry={entry} updateStatus={(entry, status) => update(entry, status)} /></td>
    </tr>
);

export default Entry;
