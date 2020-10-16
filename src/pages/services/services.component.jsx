import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
// Components
import Banner from '../../components/section/banner/banner.component'
// Images
import BackgroundImage from '../../assets/images/shots/pexels-kateryna-babaieva-2747017.jpg'
// Sections
import ServicesSection from '../../components/section/services/services.component'
import Testimonials from '../../components/section/testimonials/testimonials.component'
import QuoteForm from '../../components/section/quote-form/quote-form.componnet'
// Providers
import { ContentContext } from '../../providers/ContentProvider'

const Services = () => {
    const { long_name, meta_desc } = useContext(ContentContext)

    return(
        <>
            <Helmet>
                <title>{long_name} - Our Services</title>
                <meta name="description" content={meta_desc.services} />
                <meta name="og:title" content={`${long_name} - Our Services`} />
                <meta name="og:description" content={meta_desc.services} />
                <meta name="twitter:title" content={`${long_name} - Our Services`} />
                <meta name="twitter:description" content={meta_desc.services} />
            </Helmet>
            <Banner state='Services' bg={BackgroundImage} />
            <ServicesSection />
            <Testimonials/>
            <QuoteForm/>
        </>
    )
}

export default React.memo(Services)