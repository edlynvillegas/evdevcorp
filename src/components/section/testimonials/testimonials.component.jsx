import React, { useRef } from 'react'
import './testimonials.styles.scss'
// Components
import TestimonialList from '../../shared/testimonial-list/testimonial-list.component'
// Custom Hooks
import useElementScroll from '../../../utils/useElementScroll'

const Testimonials = () => {
    const tmRef = useRef();
    const { isPassed } = useElementScroll(tmRef.current)
    
    return(
        <section id="testimonials" aria-labelledby="testimonials_section" ref={tmRef}>
            <div className={`section-content --right${isPassed ? ` --up` : ''}`}>
                <p className="section-title">Why people loves our services</p>
                <TestimonialList/>
            </div>
        </section>
    )
}

export default React.memo(Testimonials)