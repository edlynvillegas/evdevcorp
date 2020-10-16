import React from 'react'
import './button.styles.scss'

const Button = ({ type = 'button', name, role, value, spec = { color: 'default', type: 'null' }, handleClick}) => {
    let classes = 'btn'
    if (spec && spec.color) {
        classes += ` btn-${spec.color}`
        if (spec && spec.type) classes += `-${spec.type}`
    }
    const buttonEl = <button className={classes}
                        type={type} role={role} name={name}
                        onClick={() => handleClick && handleClick()}
                    >{value}</button>

    if (type === 'button') {
        return buttonEl
    } else {
        return <div className="input-group">{buttonEl}</div>
    }
}

export default React.memo(Button)