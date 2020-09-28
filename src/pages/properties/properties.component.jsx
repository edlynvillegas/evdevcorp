import React, { useContext } from 'react'
import './properties.styles.scss'
import { Helmet } from 'react-helmet';
// Components
import Banner from '../../components/section/banner/banner.component'
// Images
import BackgroundImage from '../../assets/images/shots/banner_main.jpg'
// Components
import FutureProjects from '../../components/section/future-projects/future-projects.component'
import OngoingProjects from '../../components/section/ongoing-projects/ongoing-projects.component'
// Providers
import { ContentContext } from '../../providers/ContentProvider'

const Properties = () => {
    const { long_name, meta_desc } = useContext(ContentContext)

    return(
        <>
            <Helmet>
                <title>{long_name} - Our Properties</title>
                <meta name="description" content={meta_desc.properties} />
                <meta name="og:title" content={`${long_name} - Our Properties`} />
                <meta name="og:description" content={meta_desc.properties} />
                <meta name="twitter:title" content={`${long_name} - Our Properties`} />
                <meta name="twitter:description" content={meta_desc.properties} />
            </Helmet>
            <Banner state='Properties' bg={BackgroundImage} />
            <FutureProjects/>
            <OngoingProjects/>
        </>
    )
}

export default React.memo(Properties)