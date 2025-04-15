import React from 'react'
import style from './ForgotPassword.module.scss'
import InputBox from '@/app/components/AuthComponents/Input';
import Button from '@/app/components/AuthComponents/Button';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const ForgotPassword = () => {

    return (
        <>
            <div className={`${style.formDiv}`}>
                <form >
                    <h2>Reset your password</h2>
                    <p>Enter the email address associated with your account and we will send you a link to reset your password.</p>
                    <div className={`${style.inputDiv}`}>
                        <InputBox
                            placeholder="Email"
                            type="text"
                            icon={faEnvelope}
                        />
                    </div>
                    <Link href="/Auth/OTP">
                        <Button
                            content="Continue"
                        />
                    </Link>
                </form>
            </div>
            <div className={`${style.bottomDiv}`}>
                <Link href="/Auth/Login">Back to Sign In</Link>
            </div>
        </>
    )
}

export default ForgotPassword