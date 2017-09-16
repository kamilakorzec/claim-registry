import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => <button><Link to={`${props.route}`}>{props.name}</Link></button>;

export default Navigation;
