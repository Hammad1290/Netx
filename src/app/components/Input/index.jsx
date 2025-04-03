"use client"
import React from 'react'
import style from './Input.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputBox = ({ icon, value, onChange, placeholder, type, register, name, error }) => {
    return (
        <>
            <div className={`${style.inputContainer}`}>
                <FontAwesomeIcon icon={icon} />
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...(register && register(name))}
                />
                {error && <p className="error">{error.message}</p>}
            </div>
        </>
    )
}

export default InputBox
