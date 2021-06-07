import React from 'react'
import './InputComponent.css'
const InputComponent = (props) => {
    const {label,side} = props
    return (
        <div className="input-form-control">
            <label className="input-label">{label}</label>
            <div className="flex-row">
                <input placeholder={label} className="input"></input>
                <div className="input-extra-side">{side}</div>
            </div>
            
        </div>
    )
}

export default InputComponent
