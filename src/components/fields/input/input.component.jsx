import React from 'react'
import './input.styles.scss'
// Custom Hooks
import useStringFunction from '../../../utils/useStringFunction'

const Input = ({ type, name, label, placeholder, error, register }) => {
    const { uppercaseStr } = useStringFunction()
    
    return(
        <div className="input-group">
            { label ? <label htmlFor={name}>{label}</label> : null }
            <input className={error ? '--error' : ''} id={name} type={type} name={name} ref={register} placeholder={placeholder} autoComplete="off" />
            {
                error ? <span>{ uppercaseStr(error.message, 0) }</span> : null
            }
        </div>
    )
}

export default React.memo(Input)