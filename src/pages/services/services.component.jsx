import React from 'react'
// Components
import Banner from '../../components/section/banner/banner.component'
// Sections
import ServicesSection from '../../components/section/services/services.component'


const Services = () => {
    return(
        <>
            <Banner state='Services' />
            <ServicesSection />
        </>
    )
}

export default React.memo(Services)