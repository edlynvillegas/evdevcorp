import React, { useContext } from 'react'
import './ongoing-projects.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import OPItem from '../../shared/op-item/op-item.component'

const OngoingProjects = () => {
    const { projects } = useContext(ContentContext)

    return(
        <section id="oprojects">
            <div className="section-content">
                <p className="section-title">On-going projects</p>

                <div className="project-list">
                    {
                        projects.map(proj => <OPItem key={proj.id} {...proj} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo(OngoingProjects)