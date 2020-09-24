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

                <div className="about-list grid grid--gap-20">
                    {
                        timeline.map(({year, description}, index) => (
                            <div className="about-item grid__col-4" key={index}>
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