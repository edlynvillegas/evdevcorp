import React, { useContext } from 'react'
import './banner.styles.scss'
import { useHistory } from 'react-router-dom'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'

const Banner = ({ state, bg }) => {
    const { title, subtitle } = useContext(ContentContext)
    const isMain = state === 'Main';
    let history = useHistory();
    
    return(
        <section className={`banner ${ isMain ? 'full-vh' : 'half-vh' }`} style={{backgroundImage:`url(${bg})`}}>
            <div className="banner-content">
                {
                    isMain ?
                    <div>
                        <h1 className="font_poppins medium">Dream & Build it with {title}</h1>
                        <p>{subtitle}</p>
                        <button className="btn-secondary" onClick={() => history.push('/about')}>About Us</button>
                        <button className="btn-light-outline" onClick={() => history.push('/properties')}>Our Properties</button>
                    </div> :
                    <h1 className="font_anton">{state}</h1>
                }
            </div>
        </section>
    )
}

export default React.memo(Banner)