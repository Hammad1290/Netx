"use client"
import React from 'react'
import style from './OTP.module.scss'
import InputBox from '@/app/components/Input';
import Button from '@/app/components/Button';
import OTPInput from '@/app/components/OTPInput';
import Link from 'next/link';

const OTP = () => {

    const handleOTPComplete = (otpValue) => {
        console.log("Entered OTP:", otpValue);
    };

    return (
        <>
            <div className={`${style.formDiv}`}>
                <form>
                    <h2>Enter OTP</h2>
                    <p>Sent OTP on <b>robertDProctor@jourrapide.com</b></p>
                    <div className={`${style.inputDiv}`}>
                        <OTPInput length={4} onComplete={handleOTPComplete} />
                    </div>
                    <Link href="/Auth/VerifyEmail">
                        <Button
                            content="Submit"
                        />
                    </Link>
                </form>
            </div>
            <div className={`${style.bottomDiv}`}>
                <Link href="/Auth/OTP">Resent OTP</Link>
            </div>
        </>
    )
}

export default OTP