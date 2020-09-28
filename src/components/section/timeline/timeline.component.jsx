
import React, { useRef } from 'react'
import './timeline.styles.scss'
// Components
import TimelineList from '../../shared/timeline-list/timeline-list.component'
// Custom Hooks
import useElementScroll from '../../../utils/useElementScroll'

const TimelineSection = ({ title }) => {
    const tlRef = useRef(null);
    const { isPassed } = useElementScroll(tlRef.current)
    
    return(
        <section id="timeline" aria-labelledby="timeline_section" ref={tlRef}>
            <div className={`section-content --left${isPassed ? ` --down` : ''}`}>
                <p className="section-title">{title ? title :'About us'}</p>
                <TimelineList/>
            </div>
        </section>
    )
}

export default React.memo(TimelineSection)