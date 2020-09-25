import React from 'react'
// Components
import Banner from '../../components/section/banner/banner.component'
// Sections
import AboutSection from '../../components/section/about/about.component'
import TeamSection from '../../components/section/team/team.component'


const About = () => {
    return(
        <>
            <Banner state='About' />
            <AboutSection/>
            <TeamSection/>
        </>
    )
}

export default React.memo(About)