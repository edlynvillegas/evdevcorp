import React from 'react'

const ServiceItem = ({ title, description }) => {
    return(
        <div className="service-item">
            <div className="item-content">
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default React.memo(ServiceItem)