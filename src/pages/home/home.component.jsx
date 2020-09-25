import React from 'react'
import './home.styles.scss'
// Components
import Banner from '../../components/section/banner/banner.component'
// Images
import BackgroundImage from '../../assets/images/shots/banner_main.jpg'
// Sections
import ServicesSection from '../../components/section/services/services.component'
import FutureProjectsSection from '../../components/section/future-projects/future-projects.component'
import AboutSection from '../../components/section/about/about.component'
import TeamSection from '../../components/section/team/team.component'
import OngoingProjects from '../../components/section/ongoing-projects/ongoing-projects.component'
import Testomonials from '../../components/section/testimonials/testimonials.component'

const Home = () => {
    return(
        <>
            <Banner state='Main' bg={BackgroundImage} />
            <ServicesSection/>
            <FutureProjectsSection/>
            <AboutSection/>
            <TeamSection/>
            <OngoingProjects/>
            <Testomonials/>
        </>
    )
}

export default React.memo(Home)