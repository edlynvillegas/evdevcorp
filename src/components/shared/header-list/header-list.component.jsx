import React from 'react'
import './header-list.styles.scss'
// Components
import HeaderLink from '../header-link/header-link.component'

const routes = [
    { path: "/", name: 'Home' },
    { path: "/about", name: 'About' },
    { path: "/properties", name: 'Properties' },
    { path: "/services", name: 'Services' },
    { path: "/contact", name: 'Contact' }
];

const HeaderList = () => (
    <ul className="header-links">
        { routes.map((route, index) => <HeaderLink key={index} {...route} />) }
    </ul>
)

export default React.memo(HeaderList)