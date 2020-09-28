import React, { useContext, useRef } from 'react'
import './about.styles.scss'
import { Link } from 'react-router-dom'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Custom Hooks
import useElementScroll from '../../../utils/useElementScroll'
// Icons
import { ReactComponent as FacebookSVG } from '../../../assets/images/icons/facebook.svg'
import { ReactComponent as TwitterSVG } from '../../../assets/images/icons/twitter.svg'
import { ReactComponent as LinkedinSVG } from '../../../assets/images/icons/linkedin.svg'

import CharmIMG from '../../../assets/images/shots/pexels-adrian-cuj-2457096.jpg';

const AboutSection = () => {
    const { full_desc, socials } = useContext(ContentContext)
    const abtRef = useRef(null);
    const { isPassed } = useElementScroll(abtRef.current)

    return(
        <section id="about" aria-labelledby="about_section" ref={abtRef}>
            <div className={`section-content grid --right${isPassed ? ` --up` : ''}`}>
                <figure className="grid__col-6 grid__col-mb-12">
                    <img src={CharmIMG} alt="Teams"/>
                </figure>
                <div className="grid__col-6 grid__col-mb-12">
                    <p className="section-title">About the company</p>
                    <p>{full_desc}</p>

                    <div className="socials">
                        <Link to={socials.facebook} title="Facebook"><FacebookSVG/></Link>
                        <Link to={socials.twitter} title="Twitter"><TwitterSVG/></Link>
                        <Link to={socials.linkedin} title="Linkedin"><LinkedinSVG/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(AboutSection)