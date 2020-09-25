import React, { useRef } from 'react'
import './future-projects.styles.scss'
// Components
import FPList from '../../shared/fp-list/fp-list.component'
// Custom Hooks
import useElementScroll from '../../../utils/useElementScroll'

const FutureProjectsSection = () => {
    const fpRef = useRef();
    const { isVisible, isPassed } = useElementScroll(fpRef.current)

    return(
        <section id="fprojects" aria-labelledby="future_projects_section" ref={fpRef}>
            <div className={`section-content --right${isPassed ? ` --up` : ''}`}>
                <p className="section-title">The future projects</p>
                <FPList isVisible={isVisible} />
            </div>
        </section>
    )
}

export default React.memo(FutureProjectsSection)