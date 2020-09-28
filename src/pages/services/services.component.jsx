import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
// Components
import Banner from '../../components/section/banner/banner.component'
// Sections
import ServicesSection from '../../components/section/services/services.component'
// Providers
import { ContentContext } from '../../providers/ContentProvider'


const Services = () => {
    const { long_name, meta_desc } = useContext(ContentContext)

    return(
        <>
            <Helmet>
                <title>{long_name} - Our Services</title>
                <meta name="description" content={meta_desc.services} />
            </Helmet>
            <Banner state='Services' />
            <ServicesSection />
        </>
    )
}

export default React.memo(Services)