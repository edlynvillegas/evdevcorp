import React, { useState, useCallback } from 'react'
import './op-item.styles.scss'
// Components
import Dialog from '../dialog/dialog.component'
import PropertyDetail from '../property-detail/property-detail.component'
import Button from '../../fields/button/button.component'
// Custom Hooks
import useStringFunction from '../../../utils/useStringFunction'

const OPItem = (props) => {
    const { title, description, image } = props;
    const [isDialog, setDialog] = useState(false)
    const { trimStr } = useStringFunction()

    const viewProject = useCallback(() => {
        setDialog(true)
        // eslint-disable-next-line
    }, [])

    return(
        <>
            <div className="op-item grid__col-6 grid__col-mb-12">
                <div className="op-content">
                    <figure>
                        <img src={image} alt={title}/>
                    </figure>
                    <div className="op-info">
                        <p>{title}</p>
                        <p>{ description.length > 120 ? `${trimStr(description, 120)}...` : description}</p>
                        <Button spec={{color: 'light', type: 'outline'}} handleClick={() => viewProject()} value="View project"/>
                    </div>
                </div>
            </div>
            <Dialog open={isDialog} handleClose={() => setDialog(false)}>
                <PropertyDetail  {...props} handleClose={() => setDialog(false)} />
            </Dialog>
        </>
    )
}

export default React.memo(OPItem)