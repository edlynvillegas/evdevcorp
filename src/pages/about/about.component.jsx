import React from 'react'
// Components
import Banner from '../../components/shared/banner/banner.component'
import BannerSpan from '../../components/shared/banner-span/banner-span.component'
// Sections
import AboutSection from '../../components/section/about/about.component'
import TeamSection from '../../components/section/team/team.component'


const About = () => {
    return(
        <>
            <Banner state='About' />
            <BannerSpan/>
            <AboutSection/>
            <TeamSection/>
        </>
    )
}

export default React.memo(About)