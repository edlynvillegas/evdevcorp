import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
// Components
import Banner from '../../components/section/banner/banner.component'
// Images
import BackgroundImage from '../../assets/images/shots/pexels-freestocksorg-410730.jpg'
// Sections
import AboutSection from '../../components/section/about/about.component'
import TimelineSection from '../../components/section/timeline/timeline.component'
import TeamSection from '../../components/section/team/team.component'
import QuoteForm from '../../components/section/quote-form/quote-form.componnet'
import Testimonials from '../../components/section/testimonials/testimonials.component'
// Providers
import { ContentContext } from '../../providers/ContentProvider'

const About = () => {
    const { long_name, meta_desc } = useContext(ContentContext)

    return(
        <>
            <Helmet>
                <title>{long_name} - About Us</title>
                <meta name="description" content={meta_desc.about} />
                <meta name="og:title" content={`${long_name} - About Us`}  />
                <meta name="og:description" content={meta_desc.about} />
                <meta name="twitter:title" content={`${long_name} - About Us`}  />
                <meta name="twitter:description" content={meta_desc.about} />
            </Helmet>
            <Banner state='About' bg={BackgroundImage} />
            <AboutSection/>
            <TimelineSection title="Company timeline" />
            <TeamSection/>
            <Testimonials/>
            <QuoteForm/>
        </>
    )
}

export default React.memo(About)