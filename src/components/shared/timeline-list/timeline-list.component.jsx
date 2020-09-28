import React, { useContext } from 'react'
// Components
import TimelineItem from '../timeline-item/timeline-item.component'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'

const TimelineList = () => {
    const { timeline } = useContext(ContentContext)

    return(
        <div className="about-list grid grid--gap-20">
            {
                timeline.map((tl, index) => <TimelineItem key={index} {...tl} />)
            }
        </div>
    )
}

export default React.memo(TimelineList)