import React, { useContext } from 'react'
import './services.styles.scss'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'
// Components
import ServiceItem from '../../shared/service-item/service-item.component'

const ServicesSection = ({ summary }) => {
    const { services } = useContext(ContentContext)

    return(
        <section id="service" aria-labelledby="services_section">
            <div className="section-content">
                <p className="section-title">High quality construction solutions<br/>for residentials & industries</p>
                <div className="service-list grid grid--gap-20">
                    { services.map(service => <ServiceItem key={service.id} {...service} summary={summary} />) }
                </div>
            </div>
        </section>
    )
}

export default React.memo(ServicesSection)