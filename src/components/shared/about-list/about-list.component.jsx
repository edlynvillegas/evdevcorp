import React, { useContext } from 'react'
// Components
import AboutItem from '../about-item/about-item.component'
// Providers
import { ContentContext } from '../../../providers/ContentProvider'

const AboutList = () => {
    const { timeline } = useContext(ContentContext)

    return(
        <div className="about-list grid grid--gap-20">
            {
                timeline.map((tl, index) => <AboutItem key={index} {...tl} />)
            }
        </div>
    )
}

export default React.memo(AboutList)