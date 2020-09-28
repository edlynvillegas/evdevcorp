import React from 'react'
import './page-not-found.styles.scss'

const PageNotFound = () => {

    return(
        <section id="page-not-found">
            <div className="section-content">
                <p>Oops! Page not found! :(</p>
            </div>
        </section>
    )
}

export default React.memo(PageNotFound)