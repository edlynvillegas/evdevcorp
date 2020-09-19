import React from 'react'
// Components
import Banner from '../../components/shared/banner/banner.component'
import BannerSpan from '../../components/shared/banner-span/banner-span.component'
// Sections
import ServicesSection from '../../components/section/services/services.component'


const Services = () => {
    return(
        <>
            <Banner state='Services' />
            <BannerSpan/>
            <ServicesSection />
        </>
    )
}

export default React.memo(Services)