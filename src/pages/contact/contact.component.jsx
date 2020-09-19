import React from 'react'
import './properties.styles.scss'
// Components
import Banner from '../../components/shared/banner/banner.component'

const Contact = () => {
    return(
        <Banner state='Contact' />
    )
}

export default React.memo(Contact)