import React  from 'react';
import Actions from './Actions/Actions'

const  Entry = ({entry}) => (
    <tr>
        <td>{entry.name}</td>
        <td>{entry.email}</td>
        <td>{entry.policy}</td>
        <td>{entry.claim_type}</td>
        <td>{entry.amount}</td>
        <td>{entry.date}</td>
        <td>{entry.status}</td>
        <td><Actions entry={entry} /></td>
    </tr>
);

export default Entry;
