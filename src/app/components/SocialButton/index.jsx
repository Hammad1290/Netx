"use client"
import React from 'react'
import style from './Social.module.scss'
import Image from "next/image";

const SocialButtons = (props) => {
    return (
        <>
            <div className={`${style.SocialButton}`}>
                <Image
                    className={`${style.icon}`}
                    src={`/${props.icon}.svg`}
                    // src='/google.svg'
                    alt={props.icon}
                    width={20}
                    height={20}
                />
                {props.content}
            </div>
        </>
    )
}

export default SocialButtons