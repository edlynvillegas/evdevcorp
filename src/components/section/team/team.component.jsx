import React, { useContext } from 'react'
import './team.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import TeamItem from '../../shared/team-item/team-item.component'

const TeamSection = () => {
    const { teams } = useContext(ContentContext)

    return(
        <section id="teams" aria-labelledby="teams_section">
            <div className="section-content">
                <p className="section-title">Meet with experts</p>
                <div className="team-list grid grid--gap-10">
                    { teams.map((team, index) => <TeamItem {...team} key={index} />) }
                </div>
            </div>
        </section>
    )
}

export default React.memo(TeamSection)