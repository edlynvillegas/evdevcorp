import React, { useContext } from 'react'
import './testimonials.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import TestimonialItem from '../../shared/testimonial-item/testimonial-item.component'

const Testimonials = () => {
    const { testimonials } = useContext(ContentContext)
    
    return(
        <section id="testimonials">
            <div className="section-content">
                <p className="section-title">Why people loves our services</p>

                <div className="testimonial-list grid grid--gap-20">
                    {
                        testimonials.map((item, index) => <TestimonialItem {...item} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo(Testimonials)