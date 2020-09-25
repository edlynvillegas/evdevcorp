import React from 'react'
import './footer.styles.scss'
// Components
import FooterSpan from '../shared/footer-span/footer-span.component'

const Footer = () => {
    return(
        <footer>
            <FooterSpan/>
            <div className="footer-content grid">
                <div className="grid__col-4">
                    EVDevCorp
                </div>
                <div className="grid__col-4">
                    EVDevCorp
                </div>
                <div className="grid__col-4">
                    EVDevCorp
                </div>
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

                {/* <p>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p> */}
            </div>
        </footer>
    )
}

export default React.memo(Footer)