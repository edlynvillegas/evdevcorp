import React from 'react'
import './banner-span.styles.scss'
// SVGs
import { ReactComponent as SearchSVG } from '../../../assets/images/icons/search.svg'
import { ReactComponent as BuildingSVG } from '../../../assets/images/icons/building.svg'
import { ReactComponent as CalendarSVG } from '../../../assets/images/icons/calendar.svg'

const BannerSpan = () => {
    return(
        <div className="banner-span">
            <div className="span-content">
                <div className="span-item">
                    <SearchSVG />
                    <div>
                        <p>Find a Home</p>
                        <p>Find your next dream home</p>
                    </div>
                </div>
                <div className="span-item">
                    <BuildingSVG />
                    <div>
                        <p>Explore Property</p>
                        <p>Visit the properties</p>
                    </div>
                </div>
                <div className="span-item">
                    <CalendarSVG />
                    <div>
                        <p>Get a Quote</p>
                        <p>Seeking a Good Life?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BannerSpan)