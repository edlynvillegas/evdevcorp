import React, { useContext } from 'react'
import './banner.styles.scss'
import { useHistory } from 'react-router-dom'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import BannerSpan from '../../shared/banner-span/banner-span.component'

const Banner = ({ state, bg }) => {
    const { name, short_desc } = useContext(ContentContext)
    const isMain = state === 'Main';
    let history = useHistory();
    
    return(
        <>
            <section className={`banner ${ isMain ? 'full-vh' : 'half-vh' }`} style={{backgroundImage:`url(${bg})`}}>
                <div className="banner-content">
                    {
                        isMain ?
                        <div>
                            <h1 className="--w-md">Dream & Build it with {name}</h1>
                            <p>{short_desc}</p>
                            <button role="link" className="btn-secondary" onClick={() => history.push('/about')}>About Us</button>
                            <button role="link" className="btn-light-outline" onClick={() => history.push('/properties')}>Our Properties</button>
                        </div> :
                        <h1 className="font_anton">{state}</h1>
                    }
                </div>
            </section>
            <BannerSpan />
        </>
    )
}

export default React.memo(Banner)