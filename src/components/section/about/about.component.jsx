
import React, { useRef } from 'react'
import './about.styles.scss'
// Components
import AboutList from '../../shared/about-list/about-list.component'
// Custom Hooks
import useElementScroll from '../../../utils/useElementScroll'

const AboutSection = () => {
    const abtRef = useRef(null);
    const { isPassed } = useElementScroll(abtRef.current)
    
    return(
        <section id="about" aria-labelledby="about_section" ref={abtRef}>
            <div className={`section-content --left${isPassed ? ` --down` : ''}`}>
                <p className="section-title">About us</p>
                <AboutList/>
            </div>
        </section>
    )
}

export default React.memo(AboutSection)