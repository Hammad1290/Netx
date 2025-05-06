import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faFaceSmile, faFile, faHeart, faMoneyBill1Wave, faSearch, faTableCells, faUser, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const Reports = () => {

    const sections = [
        {
            icon: faChartSimple,
            title: "General",
            items: [
                { label: "General", desc: "General ticketing metrics", link: '/dashboard/reports/template/general' },
                { label: "Load analysis", desc: "Ticket load by status and arrival time", link: '/dashboard/reports/template/load-analysis' },
                { label: "Top load", desc: "Support-heavy customer analysis", link: '/dashboard/reports/template/general' },
                { label: "Service Level Agreement (SLA)", desc: "Ticketing metrics in relation to SLAs", link: '/dashboard/reports/template/general' },
                { label: "Recent Processes", desc: "Real-time outcomes of recent processes", link: '/dashboard/reports/template/general' },
            ],
        },
        {
            icon: faWaveSquare,
            title: "Monitoring",
            items: [
                { label: "System at-a-glance", desc: "General alerts metrics", link: '/dashboard/reports/template/general' },
                { label: "Customer health", desc: "Customer health based on alerts", link: '/dashboard/reports/template/general' },
                { label: "Agent health", desc: "Agent health scores", link: '/dashboard/reports/template/general' },
                { label: "Auditor", desc: "Customer inventory summary", link: '/dashboard/reports/template/general' },
                { label: "Microsoft licensing", desc: "Microsoft licensing information", link: '/dashboard/reports/template/general' },
                { label: "Patch search & deploy", desc: "Devices with specified patches installed", link: '/dashboard/reports/template/general' },
                { label: "Patch status summary", desc: "Devices with missing patches", link: '/dashboard/reports/template/general' },
                { label: "Patch & automation feedback", desc: "Patch and IT automation activity", link: '/dashboard/reports/template/general' },
                { label: "Software inventory", desc: "Installed software on devices", link: '/dashboard/reports/template/general' },
            ],
        },
        {
            icon: faUser,
            title: "Technicians",
            items: [
                { label: "Technician comparison", desc: "Ticket-handling performance comparison", link: '/dashboard/reports/template/general' },
                { label: "Technician performance", desc: "Technician ticket-handling performance", link: '/dashboard/reports/template/general' },
            ],
        },
        {
            icon: faMoneyBill1Wave,
            title: "Profitability",
            items: [
                { label: "Customer profitability", desc: "Profit breakdown by customer", link: '/dashboard/reports/template/general' },
                { label: "Top retainer customers", desc: "Top profitable retainer contracts", link: '/dashboard/reports/template/general' },
                { label: "Bottom retainer customers", desc: "Least profitable retainer contracts", link: '/dashboard/reports/template/general' },
                { label: "Timesheet", desc: "Timesheet of billable hours", link: '/dashboard/reports/template/general' },
                { label: "Customer periodic", desc: "Customer information, health, and activity", link: '/dashboard/reports/template/general' },
                { label: "Products and expenses", desc: "Customer products and expenses", link: '/dashboard/reports/template/general' },
                { label: "Block contracts balance", desc: "Customer block contract usage", link: '/dashboard/reports/template/general' },
            ],
        },
        {
            icon: faFaceSmile,
            title: "Satisfaction",
            items: [
                { label: "Satisfied customers", desc: "Customer satisfaction overview", link: '/dashboard/reports/template/general' },
                { label: "Dissatisfied customers", desc: "Customer dissatisfaction overview", link: '/dashboard/reports/template/general' },
            ],
        },
    ];

    const sections2 = [
        {
            icon: faTableCells,
            title: "Presets",
            items: [
                { label: "Customer tickets overview", desc: "Tickets by customer, count, duration, and SLA categories" },
                { label: "Ticketing summary", desc: "Peak hours, SLA information, ticket statuses, and more" },
                { label: "Ticket alerts", desc: "Alerts triggered by threshold profiles assigned to devices" },
                { label: "Hardware inventory", desc: "Device type, CPU info, disk capacity, memory, SNMPs, and more" },
                { label: "Technician overview", desc: "Ticket assignments and technician performance comparison" },
                { label: "Assets", desc: "Asset overview by type, customer, contact, and custom fields" },
                { label: "Agents HW info", desc: "Agent hardware, software, and device overview" },
            ],
        },
        {
            icon: faHeart,
            title: "Favorites",
            items: [
            ],
        },
        {
            colsize: 'col-span-2',
            items: [
            ],
        },
    ];

    return (
        <>
            <div className="p-4 min-h-screen">
                <h1 className="text-2xl font-semibold">Reports</h1>
                <div className="flex flex-col justify-center items-center my-4">
                    <div className="flex items-center bg-white px-3 py-2 w-[40%] border border-gray-300 rounded">
                        <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                        <input type="text" placeholder="Search Reports" className="ml-2 outline-none" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <div className="bg-purple-200 text-purple-600 p-2 rounded-md">
                            <FontAwesomeIcon icon={faFile} className="w-4 h-4" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-base">Operational reports</h2>
                            <p className="text-sm text-gray-500">
                                Gain insights into ticket handling, system health, and end user satisfaction. <Link href="#" className="text-blue-600">Learn more</Link>
                            </p>
                        </div>
                    </div>

                    <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {sections.map((section, idx) => (
                            <div key={idx} className="rounded-xl border border-gray-200 bg-white">
                                <div className="flex flex-col items-center justify-center p-4">
                                    <FontAwesomeIcon icon={section.icon} className="text-gray-500 w-4 h-4 mb-2" />
                                    <h3 className="font-semibold text-gray-700">{section.title}</h3>
                                </div>
                                <div className="h-64 overflow-auto">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="px-4 hover:bg-gray-100 ">
                                            <Link href={item.link} >
                                                <div className="border-b border-gray-300 py-2">
                                                    <p className="text-xs font-medium text-gray-800">{item.label}</p>
                                                    {item.desc && <p className="text-xs text-gray-400">{item.desc}</p>}
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <div className="bg-red-200 text-red-600 p-2 rounded-md">
                            <FontAwesomeIcon icon={faWaveSquare} className="w-4 h-4" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-base">Analytical reports</h2>
                            <p className="text-sm text-gray-500">
                                Build customizable dashboards for deeper data understanding. <a href="#" className="text-blue-600">Learn more</a>
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {sections2.map((section, idx) => (
                            <div key={idx} className={`rounded-xl border border-gray-200 bg-white ${section.colsize} `}>
                                <div className="flex flex-col items-center justify-center p-4">
                                    <FontAwesomeIcon icon={section.icon} className="text-gray-500 w-4 h-4 mb-2" />
                                    <h3 className="font-semibold text-gray-700">{section.title}</h3>
                                </div>
                                <div className="h-64 overflow-auto">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="px-4 hover:bg-gray-100 ">
                                            <Link href='/dashboard/reports' >
                                                <div className="border-b border-gray-300 py-2">
                                                    <p className="text-xs font-medium text-gray-800">{item.label}</p>
                                                    {item.desc && <p className="text-xs text-gray-400">{item.desc}</p>}
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Reports