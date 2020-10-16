import React, { useContext, useCallback } from 'react'
import './sidebar.styles.scss'
import ReactDOM from 'react-dom';
// Providers
import { UIContext } from '../../providers/UIProvider'
// Components
import Toggler from '../toggler/toggler.component'

const Sidebar = ({ routes } ) => {
    const { isSidebar, setSidebar } = useContext(UIContext)

    const handleClick = useCallback(() => {
        setSidebar(false)
        // eslint-disable-next-line
    }, [])

    return ReactDOM.createPortal(
        <>
            <Toggler isSidebar={isSidebar} handleClick={handleClick} />
            <aside className={isSidebar ? '--open' : ''}>
                <div className="sidebar-content">
                    <ul>
                        {
                            routes.map((route, index) => (
                            <li key={index}>{route.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
        </>
    , document.getElementById("root"))
}

export default React.memo(Sidebar)