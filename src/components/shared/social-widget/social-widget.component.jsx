import React, { useContext, useCallback } from 'react'
import './social-widget.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// SVGs
import { ReactComponent as FacebookSVG } from '../../../assets/images/icons/facebook.svg'
import { ReactComponent as TwitterSVG } from '../../../assets/images/icons/twitter.svg'
import { ReactComponent as LinkedinSVG } from '../../../assets/images/icons/linkedin.svg'

const SocialItem = ({ link, icon, type, followers = 0 }) => (
    <a className={`social-widget__social-item ${type}`} href={link}>
        <div className="social-item__social-icon">
            {icon}
        </div>
        <p className="social-item__social-count">{followers}</p>
    </a>
)

const SocialWidget = () => {
    const { socials } = useContext(ContentContext)

    return(
        <div className="social-widget">
            <SocialItem link={socials.facebook} type="facebook" icon={<FacebookSVG/>} followers={3465} />
            <SocialItem link={socials.twitter} type="twitter" icon={<TwitterSVG/>} followers={450} />
            <SocialItem link={socials.linkedin} type="linkedin" icon={<LinkedinSVG/>} followers={6780} />
        </div>
    )
}

export default React.memo(SocialWidget)