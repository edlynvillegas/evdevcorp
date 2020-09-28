import React, { useContext } from 'react'
import './home.styles.scss'
import { Helmet } from 'react-helmet';
// Components
import Banner from '../../components/section/banner/banner.component'
// Images
import BackgroundImage from '../../assets/images/shots/banner_main.jpg'
// Sections
import ServicesSection from '../../components/section/services/services.component'
import FutureProjectsSection from '../../components/section/future-projects/future-projects.component'
import TimelineSection from '../../components/section/timeline/timeline.component'
import TeamSection from '../../components/section/team/team.component'
import OngoingProjects from '../../components/section/ongoing-projects/ongoing-projects.component'
import Testomonials from '../../components/section/testimonials/testimonials.component'
// Providers
import { ContentContext } from '../../providers/ContentProvider'

const Home = () => {
    const { long_name, meta_desc } = useContext(ContentContext)

    return(
        <>
            <Helmet>
                <title>{long_name} - Home</title>
                <meta name="og:title" content={`${long_name} - Home`} />
                <meta name="description" content={meta_desc.home} />
                <meta name="og:description" content={meta_desc.home} />
            </Helmet>
            <Banner state='Main' bg={BackgroundImage} />
            <ServicesSection/>
            <FutureProjectsSection/>
            <TimelineSection/>
            <TeamSection/>
            <OngoingProjects limit={4} />
            <Testomonials/>
        </>
    )
}

export default React.memo(Home)