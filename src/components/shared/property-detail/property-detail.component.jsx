import React from 'react'
import './property-detail.styles.scss'
// SVGs
import { ReactComponent as MarkerSVG } from '../../../assets/images/icons/map-pin.svg'

const PropertyDetail = ({ title, description, address, image, handleClose }) => {
    const split_title = title.split(' ')
    
    return(
        <div className="property-detail grid">
            <figure className="grid__col-6 grid__col-tb-12">
                <img src={image} alt={title} />
            </figure>
            <div className="grid__col-6 grid__col-tb-12">
                <div className="info">
                    <p>{split_title[0]} <span>{split_title[1]}</span></p>
                    <p><MarkerSVG/> {address}</p>
                    <p>{description}</p>
                </div>
                <div>
                    <button className="btn-secondary" onClick={() => handleClose()}>Close detail</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PropertyDetail)