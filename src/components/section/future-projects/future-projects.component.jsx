import React, { useContext } from 'react'
import './future-projects.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import Carousel from '../../carousel/carousel.component'
import FPItem from '../../shared/fp-item/fp-item.component'

const FutureProjectsSection = () => {
    const { pending_projects } = useContext(ContentContext)

    return(
        <section id="fprojects">
            <div className="section-content">
                <p className="section-title">The future projects</p>

                <div className="project-list">
                    <Carousel
                        autoplay
                        autoplayInterval={6000}
                        transition={{ms: 1200, easing: 'ease'}}
                        slides={pending_projects.map(proj => <FPItem key={proj.id} {...proj} />)} />
                </div>
            </div>
        </section>
    )
}

export default React.memo(FutureProjectsSection)