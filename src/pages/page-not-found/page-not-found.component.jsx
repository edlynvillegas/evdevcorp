import React, { useCallback } from 'react'
import './page-not-found.styles.scss'
import { useHistory } from 'react-router-dom'
import Button from '../../components/fields/button/button.component'

const PageNotFound = () => {
    let history = useHistory();

    const goTo = useCallback(() => {
        history.push('/')
        // eslint-disable-next-line
    }, [])

    return(
        <section id="page-not-found">
            <div className="section-content">
                <div>
                    <h1><span>404:</span><br/>Page not found! :(</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button spec={{color: 'secondary'}} role="link" handleClick={() => goTo()} value="Go back to homepage"/>
                </div>
            </div>
        </section>
    )
}

export default React.memo(PageNotFound)