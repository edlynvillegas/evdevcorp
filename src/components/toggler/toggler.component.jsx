import React from 'react'
import './toggler.styles.scss'

const Toggler =({ isSidebar, handleClick }) => {
    return(
        <button id="toggler"
                type="button"
                className={isSidebar ? '--visible' : ''}
                onClick={() => handleClick()}>x</button>
    )
}

export default React.memo(Toggler)