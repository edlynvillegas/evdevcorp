import React from 'react'
import './footer.styles.scss'
import { Link } from 'react-router-dom'
// Components
import FooterSpan from '../shared/footer-span/footer-span.component'
import SocialWidget from '../shared/social-widget/social-widget.component'
import Input from '../fields/input/input.component'
import Button from '../fields/button/button.component'

const Footer = () => {
    return(
        <footer>
            <FooterSpan/>
            <div className="footer-content grid">
                <div className="footer-content__footer-grid grid__col-4 grid__col-mb-12">
                    <Link className="logo font_anton" to="/" title="Home">EV<span>DevCorp.</span></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam fugit quisquam</p>
                </div>
                <div className="footer-content__footer-grid grid__col-4 grid__col-mb-12">
                    <p>Let's Connect!</p>
                    <SocialWidget/>
                </div>
                <div className="footer-content__footer-grid grid__col-4 grid__col-mb-12">
                    <p>Mailing List</p>
                    <p>Subscribe to our mailing list to get the latest news & offers</p>
                    <form>
                        <Input type="email" name="email" placeholder="name@domain.com" />
                        <Button spec={{color:'secondary'}} value="Subscribe" />
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer)