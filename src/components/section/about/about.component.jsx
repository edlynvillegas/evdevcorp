import React, { useContext } from 'react'
import './about.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'

const AboutSection = () => {
    const { timeline } = useContext(ContentContext)

    return(
        <section id="about">
            <div className="section-content">
                <p className="section-title">About us</p>

                <div className="about-list">
                    {
                        timeline.map(({year, description}, index) => (
                            <div className="about-item" key={index}>
                                <p>{year}</p>
                                <p>{description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo(AboutSection)