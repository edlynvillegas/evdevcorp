import React from 'react'
import './header-list.styles.scss'
// Components
import HeaderLink from '../header-link/header-link.component'

const HeaderList = ({ routes }) => (
    <ul className="header-links">
        { routes.map((route, index) => <HeaderLink key={index} {...route} />) }
    </ul>
)

export default React.memo(HeaderList)