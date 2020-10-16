import React from 'react'
import './quote-form.styles.scss'
// Components
import FormContainer from '../../shared/form-container/form-container.component'

// import CharmIMG from '../../../assets/images/shots/pexels-kateryna-babaieva-2747017.jpg';

const QuoteForm = () => {

    return(
        <section id="quote_form" aria-labelledby="quote_form_section">
            <div className="section-content">
                <p className="section-title">Contact us</p>
                <FormContainer/>
            </div>
        </section>
    )
}

export default React.memo(QuoteForm)