import React from 'react'
import './op-item.styles.scss'

const OPItem = ({ title, description, image }) => {
    return(
        <div className="op-item">
            <div className="op-content">
                <figure>
                    <img src={image} alt={title}/>
                </figure>
                <div className="op-info">
                    <p>{title}</p>
                    <p>{ description.length > 120 ? `${description.substr(0, 120)}...` : description}</p>
                    <button className="btn-light-outline">View project</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(OPItem)