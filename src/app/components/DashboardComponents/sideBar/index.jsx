'use client';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTachometerAlt, faTicketAlt, faUsers, faDesktop, faTriangleExclamation,
    faAngleLeft, faAngleRight, faNetworkWired, faFile, faChartSimple, faArrowLeft,
    faSliders, faDatabase, faAngleDown, faAngleUp, faWaveSquare, faUser,
    faMoneyBill1Wave, faFaceSmile
} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import Link from 'next/link';

const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [openReportDropdowns, setOpenReportDropdowns] = useState({});

    const toggleDropdown = (heading) => {
        setOpenReportDropdowns(prev => ({
            ...prev,
            [heading]: !prev[heading]
        }));
    };

    const sidebarLinks = [
        { link: '/dashboard/new', icon: faTachometerAlt, text: 'Dashboard' },
        { link: '/dashboard/ticket', icon: faTicketAlt, text: 'Tickets' },
        { link: '/dashboard/customers', icon: faUsers, text: 'Customers' },
        { link: '/dashboard/devices', icon: faDesktop, text: 'Devices', text2: '0/300' },
        { link: '/dashboard/alert', icon: faTriangleExclamation, text: 'Alert' },
        { link: '/dashboard/network&configuration', icon: faNetworkWired, text: 'Network & Configuration' },
        { link: '/dashboard/billing', icon: faFile, text: 'Billing' },
        { link: '/dashboard/reports', icon: faChartSimple, text: 'Reports', extendicon: faAngleRight, isReport: true },
        { link: '', icon: faSliders, text: 'Admin', extendicon: faAngleRight, isAdmin: true },
    ];

    const adminLinks = [
        { link: '/dashboard/admin/users', icon: faUsers, text: 'User Management' },
        { link: '/dashboard/admin/roles', icon: faDesktop, text: 'Roles & Permissions' },
        { link: '/dashboard/admin/logs', icon: faFile, text: 'System Logs' },
        { link: '/dashboard/admin/import', icon: faDatabase, text: 'Import Data' },
        { link: '/dashboard/admin/subscription', icon: faDatabase, text: 'Subscription' },
        { link: '/dashboard/admin/custom-asset-types/list', icon: faDatabase, text: 'Custom Assets' },
    ];

    const reportLinks = [
        {
            icon: faChartSimple,
            text: 'General',
            extendicon: faAngleDown,
            submenu: [
                { text: "General", link: '/dashboard/reports/template/general' },
                { text: "Load analysis", link: '/dashboard/reports/template/load-analysis' },
                { text: "Top load", link: '/dashboard/reports/template/general' },
                { text: "Service Level Agreement (SLA)", link: '/dashboard/reports/template/general' },
                { text: "Recent Processes", link: '/dashboard/reports/template/general' },
            ]
        },
        {
            icon: faWaveSquare,
            text: 'Monitoring',
            extendicon: faAngleDown,
            submenu: [
                { link: '/dashboard/reports/monitoring/system', text: 'System' },
                { link: '/dashboard/reports/monitoring/performance', text: 'Performance' },
            ]
        },
        {
            icon: faUser,
            text: 'Technicians',
            extendicon: faAngleDown,
            submenu: [
                { link: '/dashboard/reports/technicians/availability', text: 'Availability' },
                { link: '/dashboard/reports/technicians/performance', text: 'Performance' },
            ]
        },
        {
            icon: faMoneyBill1Wave,
            text: 'Profitability',
            extendicon: faAngleDown,
            submenu: [
                { link: '/dashboard/reports/profitability/cost', text: 'Cost Analysis' },
                { link: '/dashboard/reports/profitability/revenue', text: 'Revenue' },
            ]
        },
        {
            icon: faFaceSmile,
            text: 'Satisfaction',
            extendicon: faAngleDown,
            submenu: [
                { link: '/dashboard/reports/satisfaction/feedback', text: 'Feedback' },
                { link: '/dashboard/reports/satisfaction/ratings', text: 'Ratings' },
            ]
        },
    ];

    const renderLinks = (links) => (
        links.map((val, index) => (
            <div
                key={index}
                onClick={() => {
                    if (val.isAdmin) {
                        setIsAdminOpen(true);
                    } else if (val.isReport) {
                        setIsReportOpen(true);
                    }
                }}
            >
                <Link href={val.link} className="flex items-center justify-between hover:text-gray-300 hover:bg-[#205050] p-3">
                    <div className={`flex items-center text-sm ${isCollapsed ? null : 'space-x-3'}`}>
                        <FontAwesomeIcon icon={val.icon} className='w-4 h-4' />
                        <span className={`${isCollapsed ? 'hidden' : 'block'}`}>{val.text}</span>
                    </div>
                    <span className={`text-gray-400 ${isCollapsed ? 'hidden' : 'block'}`}>{val.text2}</span>
                    {
                        val.extendicon && !isCollapsed
                            ? <FontAwesomeIcon icon={val.extendicon} className='w-4 h-4 text-sm' />
                            : null
                    }
                </Link>
            </div>
        ))
    );

    const renderReportDropdown = () => (
        reportLinks.map((item, idx) => (
            <div key={idx}>
                <div
                    onClick={() => toggleDropdown(item.text)}
                    className="flex items-center justify-between cursor-pointer hover:bg-[#205050] p-3"
                >
                    <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                        {!isCollapsed && <span>{item.text}</span>}
                    </div>
                    {!isCollapsed && (
                        <FontAwesomeIcon
                            icon={openReportDropdowns[item.text] ? faAngleUp : faAngleDown}
                            className="w-4 h-4"
                        />
                    )}
                </div>
                <div
                    className={`overflow-hidden bg-[#08474b] transition-all duration-300 ease-in-out ${openReportDropdowns[item.text] ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'
                        } space-y-1`}
                >
                    {item.submenu.map((sub, subIndex) => (
                        <Link key={subIndex} href={sub.link} className="block pl-8 text-sm hover:bg-[#1e5b5d] p-2">
                            {sub.text}
                        </Link>
                    ))}
                </div>
            </div>
        ))
    );

    return (
        <>
            <div
                className={`bg-[#073c3f] text-white h-full flex flex-col relative transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-60'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`flex items-center justify-center my-4 ${isCollapsed ? 'hidden' : 'block'}`}>
                    <Image src='/logo.svg' alt="logo" width={100} height={100} />
                </div>

                <nav className={`relative space-y-1 flex-1 overflow-hidden ${isCollapsed ? 'mt-15' : 'block'}`}>
                    <div className="relative h-full w-full">
                        <div className={`absolute w-full top-0 left-0 transition-all duration-300 ease-in-out ${isAdminOpen || isReportOpen ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
                            {renderLinks(sidebarLinks)}
                        </div>

                        <div className={`absolute w-full top-0 left-0 transition-all duration-300 ease-in-out ${isAdminOpen || isReportOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                            {
                                isAdminOpen &&
                                <div onClick={() => setIsAdminOpen(false)} className="flex items-center space-x-3 p-3 hover:bg-[#205050] cursor-pointer mb-4">
                                    <FontAwesomeIcon icon={faArrowLeft} className='w-4 h-4' />
                                    {!isCollapsed && <span>Back</span>}
                                </div>
                            }

                            {
                                isReportOpen &&
                                <div onClick={() => setIsReportOpen(false)} className="flex items-center space-x-3 p-3 hover:bg-[#205050] cursor-pointer mb-4">
                                    <FontAwesomeIcon icon={faArrowLeft} className='w-4 h-4' />
                                    {!isCollapsed && <span>Back</span>}
                                </div>
                            }

                            {
                                isAdminOpen
                                    ? renderLinks(adminLinks)
                                    : isReportOpen
                                        ? renderReportDropdown()
                                        : null
                            }
                        </div>
                    </div>
                </nav>

                {isHovered && (
                    <div
                        className="absolute bg-white w-7 h-7 rounded-full flex items-center justify-center top-20 right-[-13px] cursor-pointer"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {
                            isCollapsed
                                ? <FontAwesomeIcon icon={faAngleRight} className='w-2 text-black' />
                                : <FontAwesomeIcon icon={faAngleLeft} className='w-2 text-black' />
                        }
                    </div>
                )}
            </div>
        </>
    )
}

export default SideBar;
