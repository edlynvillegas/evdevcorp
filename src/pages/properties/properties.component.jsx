import React from 'react'
import './properties.styles.scss'
// Components
import Banner from '../../components/section/banner/banner.component'
// Images
import BackgroundImage from '../../assets/images/shots/banner_main.jpg'
// Components
import FutureProjects from '../../components/section/future-projects/future-projects.component'
import OngoingProjects from '../../components/section/ongoing-projects/ongoing-projects.component'

const Properties = () => {
    return(
        <>
            <Banner state='Properties' bg={BackgroundImage} />
            <FutureProjects/>
            <OngoingProjects/>
        </>
    )
}

export default React.memo(Properties)