import React, { useState, useCallback } from 'react'
import './fp-item.styles.scss'
// Components
import Dialog from '../dialog/dialog.component'
import PropertyDetail from '../property-detail/property-detail.component'
import Button from '../../fields/button/button.component'

const FPItem = (props) => {
    const { title, description, image } = props;
    const split_title = title.split(' ')
    const [isDialog, setDialog] = useState(false)

    const viewProject = useCallback(() => {
        setDialog(true)
        // eslint-disable-next-line
    }, [])
    
    return(
        <>
            <div className="fp-item">
                <div className="fp-content">
                    <figure>
                        <img src={image} alt={title} />
                    </figure>
                    <div className="fp-info">
                        <div>
                            <p>{split_title[0]} <span>{split_title[1]}</span></p>
                            <p>{description}</p>
                        </div>
                        <div>
                            <Button spec={{color: 'secondary'}} handleClick={() => viewProject()} value="View project"/>
                        </div>
                        {/* <span><p>{split_title[0]}</p></span> */}
                    </div>
                </div>
            </div>
            <Dialog open={isDialog} handleClose={() => setDialog(false)}>
                <PropertyDetail  {...props} handleClose={() => setDialog(false)} />
            </Dialog>
        </>
    )
}

export default React.memo(FPItem)