import React from 'react'
import './about-item.styles.scss'

const AboutItem = ({ year, description }) => (
    <div className="about-item grid__col-4 grid__col-tb-6 grid__col-mb-12">
        <p>{year}</p>
        <p>{description}</p>
    </div>
)

export default React.memo(AboutItem)