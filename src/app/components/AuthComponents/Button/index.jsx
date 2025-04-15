"use client"
import React from 'react'
import style from './button.module.scss'

const Button = (props) => {
    return (
        <>
            <button onClick={props.onclick} className={`${style.Button}`}>{props.content}</button>
        </>
    )
}

export default Button