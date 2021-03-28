import React from 'react'
import {useState} from 'react'
import './input.css'

const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.htmlFor} className="labelInput">{props.children}</label>
            <input type={props.tipo} name={props.name} onChange={props.noChange} className="inputInput"></input>
        </div>
    )
}

export default Input
