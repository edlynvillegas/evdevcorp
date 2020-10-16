import React from 'react'
import './service-item.styles.scss'

const ServiceItem = ({ summary = false, title, icon, short_desc, description }) => {
    return(
        <div className="service-item grid__col-4 grid__col-tb-6 grid__col-mb-12">
            <div className="item-content">
                {icon}
                <p>{title}</p>
                <p>{ summary ? short_desc : description}</p>
            </div>
        </div>
    )
}

export default React.memo(ServiceItem)