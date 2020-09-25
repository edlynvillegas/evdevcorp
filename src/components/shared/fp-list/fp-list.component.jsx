import React, { useContext } from 'react'
import './fp-list.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import Carousel from '../../carousel/carousel.component'
import FPItem from '../../shared/fp-item/fp-item.component'

const FPList = ({ isVisible }) => {
    const { pending_projects } = useContext(ContentContext)

    return(
        <div className="fp-list">
            <Carousel
                autoplay={isVisible}
                autoplayInterval={4000}
                transition={{ms: 1200, easing: 'ease'}}
                slides={pending_projects.map(proj => <FPItem key={proj.id} {...proj} />)} />
        </div>
    )
}

export default React.memo(FPList)