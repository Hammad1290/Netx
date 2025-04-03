"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import style from './layout.module.scss'
import Image from "next/image";


const AuthLayout = ({ children }) => {
    return (
        <>
            <div className={`${style.layoutContainer}`}>
                <div className={`${style.leftPane}`}>
                    <div className={`${style.logoDiv}`}>
                        <Image
                            className={`${style.logo}`}
                            src='/logo.svg'
                            alt="logo"
                            width={150}
                            height={150}
                        />
                    </div>
                    <Swiper pagination={true} modules={[Pagination]} className={`${style.mySwiper}`}>
                        <SwiperSlide>
                            <div className={`${style.imageDiv}`}>
                                <Image
                                    src="/imgMain.svg"
                                    alt="imgMain"
                                    width={350}
                                    height={350}
                                />
                            </div>
                            <div className={`${style.contentDiv}`}>
                                <h2>Customizable Multipurpose Dashboard</h2>
                                <p>Everything you need in an easily customizable dashboard.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${style.imageDiv}`}>
                                <Image
                                    src="/imgMain.svg"
                                    alt="imgMain"
                                    width={350}
                                    height={350}
                                />
                            </div>
                            <div className={`${style.contentDiv}`}>
                                <h2>Customizable Multipurpose Dashboard</h2>
                                <p>Everything you need in an easily customizable dashboard.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${style.imageDiv}`}>
                                <Image
                                    src="/imgMain.svg"
                                    alt="imgMain"
                                    width={350}
                                    height={350}
                                />
                            </div>
                            <div className={`${style.contentDiv}`}>
                                <h2>Customizable Multipurpose Dashboard</h2>
                                <p>Everything you need in an easily customizable dashboard.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={`${style.rightPane}`}>
                    <div className={`${style.rightContainer}`}>
                        <div className={`${style.rightWrapper}`}>
                            <div className={`${style.logoDiv}`}>
                                <Image
                                    className={`${style.logo}`}
                                    src='/logo2.svg'
                                    alt="logo"
                                    width={150}
                                    height={150}
                                />
                                {children}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout
