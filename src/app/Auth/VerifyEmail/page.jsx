import React from 'react'
import style from './VerifyEmail.module.scss'
import Button from '@/app/components/AuthComponents/Button';
import Link from 'next/link';

const VerifyEmail = () => {
    return (
        <>
            <div className={`${style.formDiv}`}>
                <form >
                    <h2>Verify your Email</h2>
                    <p>Thank you, check your email for instructions to reset your password</p>
                    <Button
                        content="Skip Now"
                    />
                </form>
            </div>
            <div className={`${style.bottomDiv}`}>
                Don’t receive an email?
                <Link href="/Auth/ForgotPassword">Resent</Link>
            </div>
        </>
    )
}

export default VerifyEmail

