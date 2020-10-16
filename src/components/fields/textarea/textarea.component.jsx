import React from 'react'
import './textarea.styles.scss'
// Custom Hooks
import useStringFunction from '../../../utils/useStringFunction'

const Textarea = ({ name, label, placeholder, error, register }) => {
    const { uppercaseStr } = useStringFunction()
    
    return(
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <textarea className={error ? '--error' : ''} id={name} name={name} placeholder={placeholder} ref={register}></textarea>
            {
                error ? <span>{ uppercaseStr(error.message, 0) }</span> : null
            }
        </div>
    )
}

export default React.memo(Textarea)