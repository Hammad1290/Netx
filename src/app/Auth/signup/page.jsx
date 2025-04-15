import React from 'react'
import style from './SignupPage.module.scss'
import InputBox from '@/app/components/AuthComponents/Input';
import Button from '@/app/components/AuthComponents/Button';
import SocialButtons from '@/app/components/AuthComponents/SocialButton';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const SignupPage = () => {
    return (
        <>
            <div className={`${style.formDiv}`}>
                <form >
                    <h2>Sign Up for an Account</h2>
                    <div className={`${style.inputDiv}`}>
                        <InputBox
                            placeholder="Username"
                            type="text"
                            icon={faUser}
                        />
                        <InputBox
                            placeholder="Email"
                            type="text"
                            icon={faEnvelope}
                        />
                        <InputBox
                            placeholder="Password"
                            type="password"
                            icon={faLock}
                        />
                    </div>
                    <p>Your password must have at least 8 characters</p>
                    <div className={`${style.checkedDiv}`}>
                        <div className={`${style.checkBox}`}>
                            <input type='checkbox' />
                        </div>
                        <p>By creating an account means you agree to the <b> Terms
                            & Conditions</b> and our <b> Privacy Policy</b></p>
                    </div>
                    <Button
                        content="Sign Up"
                    />
                </form>
            </div>
            <div className={`${style.divider}`}>
                Or sign up with
            </div>
            <div className={`${style.socialDiv}`}>
                <SocialButtons
                    content="Google"
                    icon="google"
                />
                <SocialButtons
                    content="Facebook"
                    icon="facebook"
                />
            </div>
            <div className={`${style.bottomDiv}`}>
                Already have an account?
                <Link href="/Auth/Login"> Log In</Link>
            </div>
        </>
    )
}

export default SignupPage