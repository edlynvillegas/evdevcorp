import React from 'react'
import './banner-span.styles.scss'
// SVGs
import { ReactComponent as StrategySVG } from '../../../assets/images/icons/strategy.svg'
import { ReactComponent as ToolsSVG } from '../../../assets/images/icons/tools.svg'
import { ReactComponent as SpeechSVG } from '../../../assets/images/icons/speech.svg'

const BannerSpan = () => {
    return(
        <div className="banner-span">
            <div className="span-content grid">
                <div className="span-item grid__col-4">
                    <StrategySVG />
                    <div>
                        <p>How We Work</p>
                        <p>Find your next dream home</p>
                    </div>
                </div>
                <div className="span-item grid__col-4">
                    <ToolsSVG />
                    <div>
                        <p>What We Do</p>
                        <p>Visit the properties</p>
                    </div>
                </div>
                <div className="span-item grid__col-4">
                    <SpeechSVG />
                    <div>
                        <p>Get a Quote</p>
                        <p>Seeking a Good Life?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BannerSpan)