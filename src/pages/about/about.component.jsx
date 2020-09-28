import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
// Components
import Banner from '../../components/section/banner/banner.component'
// Sections
import AboutSection from '../../components/section/about/about.component'
import TimelineSection from '../../components/section/timeline/timeline.component'
import TeamSection from '../../components/section/team/team.component'
// Providers
import { ContentContext } from '../../providers/ContentProvider'


const About = () => {
    const { long_name, meta_desc } = useContext(ContentContext)

    return(
        <>
            <Helmet>
                <title>{long_name} - About Us</title>
                <meta name="og:title" content={`${long_name} - About Us`} />
                <meta name="description" content={meta_desc.about} />
                <meta name="og:description" content={meta_desc.about} />
            </Helmet>
            <Banner state='About' />
            <AboutSection/>
            <TimelineSection title="Company timeline" />
            <TeamSection/>
        </>
    )
}

export default React.memo(About)