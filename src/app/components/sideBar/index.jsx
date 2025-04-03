'use client';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faTicketAlt, faUsers, faDesktop, faTriangleExclamation, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import Link from 'next/link';

const SideBar = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const sidebarLinks = [
        { link: '/dashboard/new', icon: faTachometerAlt, text: 'Dashboard' },
        { link: '/dashboard/ticket', icon: faTicketAlt, text: 'Tickets' },
        { link: '/dashboard/customers', icon: faUsers, text: 'Customers' },
        { link: '/dashboard/devices', icon: faDesktop, text: 'Devices', text2: '0/300' },
        { link: '/dashboard/alert', icon: faTriangleExclamation, text: 'Alert' },
    ]

    return (
        <>
            <div className={`bg-[#073c3f] text-white h-screen flex flex-col relative ${isCollapsed ? 'w-16' : 'w-64'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <div className={`flex items-center justify-center my-4 ${isCollapsed ? 'hidden' : 'block'}`}>
                    <Image
                        src='/logo.svg'
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </div>
                <nav className={`space-y-1 ${isCollapsed ? 'mt-10' : 'mt-0'}`}>
                    {
                        sidebarLinks.map((val, index) => {
                            return (

                                <Link key={index} href={val.link} className="flex items-center justify-between hover:text-gray-300 hover:bg-[#205050] p-3">
                                    <div className={`flex items-center ${isCollapsed ? null : 'space-x-3'}`}>
                                        <FontAwesomeIcon icon={val.icon} className='text-xl' />
                                        <span className={`${isCollapsed ? 'hidden' : 'block'}`}>{val.text}</span>
                                    </div>
                                    <span className={`text-gray-400 ${isCollapsed ? 'hidden' : 'block'}`}>{val.text2}</span>
                                </Link>

                            )
                        })
                    }
                </nav>
                {isHovered && (
                    <div className="absolute bg-white w-7 h-7 rounded-full flex items-center justify-center top-20 right-[-13px] pointer"
                        onClick={() => setIsCollapsed(!isCollapsed)}>
                        {
                            isCollapsed ?
                                <FontAwesomeIcon icon={faAngleRight} className='w-2 text-black' />
                                :
                                <FontAwesomeIcon icon={faAngleLeft} className='w-2 text-black' />
                        }
                    </div>
                )}
            </div>
        </>
    )
}

export default SideBar