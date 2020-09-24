import React from 'react'
import './service-item.styles.scss'

const ServiceItem = ({ title, description }) => {
    return(
        <div className="service-item grid__col-4 grid__col-tb-6 grid__col-mb-12">
            <div className="item-content">
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default React.memo(ServiceItem)