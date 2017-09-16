import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => <Link className="nav-item" to={`${props.route}`}>{props.name}</Link>;

export default Navigation;
