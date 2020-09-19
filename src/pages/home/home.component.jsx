import React from 'react'
import './home.styles.scss'
// Components
import Banner from '../../components/shared/banner/banner.component'
import BannerSpan from '../../components/shared/banner-span/banner-span.component'
// Images
import BackgroundImage from '../../assets/images/shots/banner_main.jpg'
// Sections
import ServicesSection from '../../components/section/services/services.component'
import FutureProjectsSection from '../../components/section/future-projects/future-projects.component'
import AboutSection from '../../components/section/about/about.component'
import TeamSection from '../../components/section/team/team.component'
import OngoingProjects from '../../components/section/ongoing-projects/ongoing-projects.component'

const Home = () => {
    return(
        <>
            <Banner state='Main' bg={BackgroundImage} />
            <BannerSpan/>
            <ServicesSection/>
            <FutureProjectsSection/>
            <AboutSection/>
            <TeamSection/>
            <OngoingProjects/>
        </>
    )
}

export default React.memo(Home)