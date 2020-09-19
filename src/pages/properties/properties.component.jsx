import React from 'react'
import './properties.styles.scss'
// Components
import Banner from '../../components/shared/banner/banner.component'
import BannerSpan from '../../components/shared/banner-span/banner-span.component'
// Images
import BackgroundImage from '../../assets/images/shots/banner_main.jpg'
// Components
import FutureProjects from '../../components/section/future-projects/future-projects.component'
import OngoingProjects from '../../components/section/ongoing-projects/ongoing-projects.component'

const Properties = () => {
    return(
        <>
            <Banner state='Properties' bg={BackgroundImage} />
            <BannerSpan/>
            <FutureProjects/>
            <OngoingProjects/>
        </>
    )
}

export default React.memo(Properties)