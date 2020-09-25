import React, { useContext } from 'react'
import './testimonial-list.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import TestimonialItem from '../../shared/testimonial-item/testimonial-item.component'

const TestimonialList = () => {
    const { testimonials } = useContext(ContentContext)
    
    return(
        <div className="testimonial-list grid grid--gap-20">
            {
                testimonials.map((item, index) => <TestimonialItem {...item} key={index} />)
            }
        </div>
    )
}

export default React.memo(TestimonialList)