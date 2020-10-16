import React, { useEffect, useState, useRef, useCallback, useContext } from 'react'
import './header.styles.scss'
// import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
// Providers
import { UIContext } from '../../providers/UIProvider'
// Components
import HeaderList from '../shared/header-list/header-list.component'
import Button from '../fields/button/button.component'
import Sidebar from '../sidebar/sidebar.component'
// Custom Hooks
import useWindowScroll from '../../utils/useWindowScroll'
import useBreakpoints from '../../utils/useBreakpoints'

const routes = [
    { path: "/", name: 'Home' },
    { path: "/about", name: 'About' },
    { path: "/properties", name: 'Properties' },
    { path: "/services", name: 'Services' },
    { path: "/contact", name: 'Contact' }
];

const Header = () => {
    const hdRef = useRef(null)
    const [isFixed, setFix] = useState(false)
    const { top, direction } = useWindowScroll()
    const device = useBreakpoints()
    const { isSidebar, setSidebar } = useContext(UIContext)

    useEffect(() => {
        if (!(device === 'tablet' || device === 'mobile')) setSidebar(false)
        // eslint-disable-next-line
    }, [device])

    useEffect(() => {
        if (isSidebar) document.body.className = '--has-backdrop';
        else document.body.className = '';
        // return () => { document.body.className = ''; }
    }, [isSidebar]);

    const toggleSidebar = useCallback(() => {
        console.log('toggleSidebar')
        setSidebar(prev => !prev)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (direction === 'down') setFix(top > 0)
        else setFix(top > hdRef.current.offsetHeight)
        // eslint-disable-next-line
    }, [top])
    return(
        <>
            <header className={isFixed ? '--fixed' : ''} ref={hdRef}>
                <div className="header-content">
                    <Link className="logo font_anton" to="/" title="Home">EV<span>DevCorp.</span></Link>
                    {
                        device === 'tablet' || device === 'mobile' ?
                        <Button handleClick={toggleSidebar} /> :
                        <HeaderList routes={routes} />
                    }
                </div>
            </header>
            {
                device === 'tablet' || device === 'mobile' ?
                <Sidebar routes={routes} /> :
                null
            }
        </>
    )
}

export default React.memo(Header)