import React from 'react'
import { Link } from 'react-router'

export default props => (
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </Link>
    </li>
)

// Versao 1
/*
export default props => (
    <li>
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </a>
    </li>
)
*/