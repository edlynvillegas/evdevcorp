import React, { useContext } from 'react'
import './banner.styles.scss'
import { useHistory } from 'react-router-dom'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import BannerSpan from '../../shared/banner-span/banner-span.component'
import Button from '../../fields/button/button.component'

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
                            <Button spec={{color: 'secondary'}} role="link" handleClick={() => history.push('/about')} value="About Us"/>
                            <Button spec={{color: 'light', type: 'outline'}} role="link" handleClick={() => history.push('/properties')} value="Our Properties"/>
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