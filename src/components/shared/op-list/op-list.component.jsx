import React, { useContext } from 'react'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import OPItem from '../op-item/op-item.component'

const OPList = ({ limit }) => {
    const { projects } = useContext(ContentContext)
    const projects_arr = limit && projects.length > limit ? projects.slice(0, limit) : projects

    return(
        <div className="project-list grid grid--gap-20">
            {
                projects_arr.map(proj => <OPItem key={proj.id} {...proj} />)
            }
        </div>
    )
}

export default React.memo(OPList)