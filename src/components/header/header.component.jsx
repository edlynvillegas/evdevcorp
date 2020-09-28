import React, { useEffect, useState, useRef } from 'react'
import './header.styles.scss'
// import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
// Components
import HeaderList from '../shared/header-list/header-list.component'
// Custom Hooks
import useWindowScroll from '../../utils/useWindowScroll'

const Header = () => {
    const hdRef = useRef(null)
    const [isFixed, setFix] = useState(false)
    const { top, direction } = useWindowScroll()

    useEffect(() => {
        if (direction === 'down') setFix(top > 0)
        else setFix(top > hdRef.current.offsetHeight)
        // eslint-disable-next-line
    }, [top])
    return(
        <header className={isFixed ? '--fixed' : ''} ref={hdRef}>
            <div className="header-content">
                <Link className="logo font_anton" to="/" title="Home">EV<span>DevCorp.</span></Link>
                <HeaderList/>
            </div>
        </header>
    )
}

export default React.memo(Header)