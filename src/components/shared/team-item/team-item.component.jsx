import React from 'react'
import './team-item.styles.scss'

// Icons
import { ReactComponent as FacebookSVG } from '../../../assets/images/icons/facebook.svg'
import { ReactComponent as TwitterSVG } from '../../../assets/images/icons/twitter.svg'
import { ReactComponent as LinkedinSVG } from '../../../assets/images/icons/linkedin.svg'

const TeamItem = ({ name, position, description, image, socials }) => {
    return(
        <div className="team-item grid__col-4 grid__col-tb-12">
            <img src={image} alt={name} />
            <div className="item-info">
                <div>
                    <figure>
                        <img src={image} alt={name} />
                    </figure>
                    <p>{name}</p>
                    <p>{position}</p>
                    <p>{description}</p>
                </div>
                <div>
                    { socials.facebook ? <a href={socials.facebook}><FacebookSVG/></a> : null }
                    { socials.twitter ? <a href={socials.twitter}><TwitterSVG/></a> : null }
                    { socials.linkedin ? <a href={socials.linkedin}><LinkedinSVG/></a> : null }
                </div>
            </div>
        </div>
    )
}

export default React.memo(TeamItem)