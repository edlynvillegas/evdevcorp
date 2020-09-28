import React, { useState, useEffect } from 'react'
import './dialog.styles.scss'
import ReactDOM from 'react-dom';

const Dialog = ({ handleClose, open, children }) => {
    const [isOpen, setOpen] = useState(false)
    const [isTransition, setTransition] = useState(false)

    const transitionDialog = (val) => {
        let timeout;
        if (val) {
            timeout = setTimeout(() => {
                if (val) setTransition(true)
                timeout && clearTimeout(timeout)
            }, 100);
        } else {
            setTransition(false)
        }
    }

    const showDialog = (show) => {
        let timeout;
        if (show) {
            setOpen(true)
            transitionDialog(true)
        } else {
            transitionDialog(false)
            timeout = setTimeout(() => {
                setOpen(false)
                timeout && clearTimeout(timeout)
            }, 300);
        }
    }

    useEffect(() => {
        if (open) showDialog(true)
        else showDialog(false)
        // eslint-disable-next-line
    }, [open])

    return ReactDOM.createPortal(
        isOpen ?
        <div className={`dialog-backdrop ${isTransition ? '--open' : ''}`}>
            <div className="dialog-container">
                {children ? children : <p>Dialog here!</p>}
            </div>
        </div> :
        null,
        document.body)
}

export default React.memo(Dialog)