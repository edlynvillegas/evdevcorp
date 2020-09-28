import React from 'react'
import './ongoing-projects.styles.scss'
// Components
import OPList from '../../shared/op-list/op-list.component'

const OngoingProjects = ({ limit }) => {

    return(
        <section id="oprojects" aria-labelledby="ongoing_projects_section">
            <div className="section-content">
                <p className="section-title">On-going projects</p>
                <OPList limit={limit} />
            </div>
        </section>
    )
}

export default React.memo(OngoingProjects)