import React, { useContext } from 'react'
import './team.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Icons
import { ReactComponent as FacebookSVG } from '../../../assets/images/icons/facebook.svg'
import { ReactComponent as TwitterSVG } from '../../../assets/images/icons/twitter.svg'
import { ReactComponent as LinkedinSVG } from '../../../assets/images/icons/linkedin.svg'

const TeamSection = () => {
    const { teams } = useContext(ContentContext)

    return(
        <section id="teams">
            <div className="section-content">
                <p className="section-title">Meet with experts</p>
                <div className="team-list">
                    {
                        teams.map(({ name, position, description, image, socials }, index) => (
                            <div className="team-item" key={index}>
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
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo(TeamSection)