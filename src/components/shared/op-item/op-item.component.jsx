import React, { useState } from 'react'
import './op-item.styles.scss'
// Components
import Dialog from '../dialog/dialog.component'
import PropertyDetail from '../property-detail/property-detail.component'

const OPItem = (props) => {
    const { title, description, image } = props;
    const [isDialog, setDialog] = useState(false)

    return(
        <>
            <div className="op-item grid__col-6 grid__col-mb-12">
                <div className="op-content">
                    <figure>
                        <img src={image} alt={title}/>
                    </figure>
                    <div className="op-info">
                        <p>{title}</p>
                        <p>{ description.length > 120 ? `${description.substr(0, 120)}...` : description}</p>
                        <button className="btn-light-outline" onClick={() => setDialog(true)}>View project</button>
                    </div>
                </div>
            </div>
            <Dialog open={isDialog} handleClose={() => setDialog(false)}>
                <PropertyDetail  {...props} handleClose={() => setDialog(false)} />
                {/* <button onClick={() => setDialog(false)}>Close dialog</button> */}
            </Dialog>
        </>
    )
}

export default React.memo(OPItem)