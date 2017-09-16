import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => <a><Link to={`${props.route}`}>{props.name}</Link></a>;

export default Navigation;
