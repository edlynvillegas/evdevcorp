import React from 'react'
import './testimonial-item.styles.scss'
// Components
import StarRatings from '../../star-ratings/star-ratings.component'

const TestimonialItem = ({ name, position, image, message, ratings }) => {
    return(
        <div className="testimonial-item grid__col-4 grid__col-sm-12">
            <div className="item-info">
                <p>{name}</p>
                <p>{position}</p>
            </div>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p className="message">{message}</p>
            <StarRatings ratings={ratings} />
        </div>
    )
}

export default React.memo(TestimonialItem)