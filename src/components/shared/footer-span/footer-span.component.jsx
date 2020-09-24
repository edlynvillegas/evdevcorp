import React, { useContext }  from 'react'
import './footer-span.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// SVGs
import { ReactComponent as PhoneSVG } from '../../../assets/images/icons/telephone.svg'
import { ReactComponent as BuildingSVG } from '../../../assets/images/icons/envelope.svg'
import { ReactComponent as CalendarSVG } from '../../../assets/images/icons/map.svg'

const FooterSpan = () => {
    const { hotline, schedule, email, address } = useContext(ContentContext)

    return(
        <div className="footer-span">
            <div className="span-content grid">
                <div className="span-item grid__col-4">
                    <PhoneSVG />
                    <div>
                        <p>{hotline}</p>
                        <p>{schedule.day}, {schedule.time}</p>
                    </div>
                </div>
                <div className="span-item grid__col-4">
                    <BuildingSVG />
                    <div>
                        <p>{email}</p>
                        <p>{schedule.day}, {schedule.time}</p>
                    </div>
                </div>
                <div className="span-item grid__col-4">
                    <CalendarSVG />
                    <div>
                        <p>{address}</p>
                        <p>{schedule.day}, {schedule.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FooterSpan)