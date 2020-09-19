import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
// Components
import HeaderLink from '../shared/header-link/header-link.component'

const Header = () => {
    const routes = [
        { path: "/", name: 'Home' },
        { path: "/about", name: 'About' },
        { path: "/properties", name: 'Properties' },
        { path: "/services", name: 'Services' },
        { path: "/contact", name: 'Contact' }
    ];

    return(
        <header>
            <div className="header-content">
                <Link className="logo" to="/" title="Home">SM<span>DevCorp.</span></Link>
                
                <ul className="header-links">
                    { routes.map(route => <HeaderLink key={route.path} {...route} />) }
                </ul>
            </div>
        </header>
    )
}

export default React.memo(Header)