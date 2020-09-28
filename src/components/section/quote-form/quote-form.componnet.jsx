import React, { useRef } from 'react'
import './quote-form.styles.scss'
// Custom Hooks
import useElementScroll from '../../../utils/useElementScroll'

import CharmIMG from '../../../assets/images/shots/pexels-adrian-cuj-2457096.jpg';

const QuoteForm = () => {
    const qfRef = useRef(null);
    const { isPassed } = useElementScroll(qfRef.current)

    return(
        <section id="quote_form" aria-labelledby="quote_form_section" ref={qfRef}>
            <div className={`section-content grid --right${isPassed ? ` --up` : ''}`}>
                <figure className="grid__col-6">
                    <img src={CharmIMG} alt="Teams"/>
                </figure>
                <div className="grid__col-6">
                    
                </div>
            </div>
        </section>
    )
}

export default React.memo(QuoteForm)