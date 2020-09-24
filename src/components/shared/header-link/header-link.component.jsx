import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const HeaderLink = ({path, name, icon}) => {
    let match = useRouteMatch(path);
    let styles = 'link-item';
    if (match?.isExact) styles += ' active'
    
    return (
        <li className={styles}>
            {icon ? icon : null}
            <Link to={path} title={name}>{name}</Link>
        </li>
    )
}

export default React.memo(HeaderLink)