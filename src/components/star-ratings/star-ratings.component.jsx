import React from 'react'
import './star-ratings.styles.scss'
// SVGs
import { ReactComponent as StarSVG } from '../../assets/images/icons/star.svg'

const StarRatings = ({ ratings }) => {
    const star_length = [1, 2, 3, 4, 5];
    return(
        <div className="star-ratings" title={`${ratings} stars`} aria-labelledby={`${ratings} stars`}>
            {
                star_length.map(star => (
                    <StarSVG key={star} className={star <= ratings ? 'filled' : null} />
                ))
            }
        </div>
    )
}

export default React.memo(StarRatings)