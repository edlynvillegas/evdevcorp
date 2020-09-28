import React from 'react'
import './timeline-item.styles.scss'

const TimelineItem = ({ year, description }) => (
    <div className="timeline-item grid__col-4 grid__col-tb-6 grid__col-mb-12">
        <p>{year}</p>
        <p>{description}</p>
    </div>
)

export default React.memo(TimelineItem)