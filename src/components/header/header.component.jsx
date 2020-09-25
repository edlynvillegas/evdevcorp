import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
// Components
import HeaderList from '../shared/header-list/header-list.component'

const Header = () => (
    <header>
        <div className="header-content">
            <Link className="logo font_anton" to="/" title="Home">EV<span>DevCorp.</span></Link>
            <HeaderList/>
        </div>
    </header>
)

export default React.memo(Header)