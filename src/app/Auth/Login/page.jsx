'use client'
import React from 'react'
import style from './LoginPage.module.scss'
import InputBox from '@/app/components/Input';
import Button from '@/app/components/Button';
import SocialButtons from '@/app/components/SocialButton';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
    const router = useRouter()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        if (!data.email) return toast.error('Email is not empty');
        if (!data.password) return toast.error('password is not empty');

        if (data.email === "abc@gmail.com" && data.password == "123") {
            router.push('/dashboard/new');
            toast.success('Login Successfully!');
            reset()
        }
        else {
            toast.error('Incorrect Email or Password');
            reset()
        }
    };

    return (
        <>
            <Toaster />
            <div className={`${style.formDiv}`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login In to your Account</h2>
                    <p>Welcome back! please enter your details</p>
                    <div className={`${style.inputDiv}`}>
                        <InputBox
                            placeholder="Email"
                            type="text"
                            icon={faEnvelope}
                            name="email"
                            register={register}
                            error={errors.email}

                        />
                        <InputBox
                            placeholder="Password"
                            type="password"
                            icon={faLock}
                            name="password"
                            register={register}
                            error={errors.password}
                        />
                    </div>
                    <div className={`${style.checkedDiv}`}>
                        <div className={`${style.checkBox}`}>
                            <input type='checkbox' />
                            <p>Remember me</p>
                        </div>
                        <Link href="/Auth/ForgotPassword">Forgot Password?</Link>
                    </div>
                    <Button
                        content="Sign In"
                    />
                </form>
            </div>
            <div className={`${style.divider}`}>
                Or sign in with
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
                Don’t have an account?
                <Link href="/Auth/signup"> Sign Up</Link>
            </div>
        </>
    )
}

export default LoginPage;
