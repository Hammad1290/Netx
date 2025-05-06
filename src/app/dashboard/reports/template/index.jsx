'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const ReportsTemplate = ({ title, desc, children }) => {


    const [activeTab, setActiveTab] = useState("GenerateReport");

    return (
        <>
            <div className="bg-white min-h-screen">
                <div className="p-4 flex items-center justify-between">
                    <div className='flex items-center gap-3'>
                        <Link href='/dashboard/reports' >
                            <FontAwesomeIcon icon={faArrowLeft} className='w-4 text-gray-500' />
                        </Link>
                        <h1 className="text-xl font-semibold text-gray-800">Operational reports</h1>
                    </div>
                    <nav className="text-xs text-gray-500">
                        <Link href='/dashboard/new' className="mr-2">Home</Link>
                        <span className="mr-2">/</span>
                        <Link href='/dashboard/billing' className="mr-2">Reports</Link>
                        <span className="mr-2">/</span>
                        <span>Operational reports</span>
                    </nav>
                </div>

                <hr className='text-gray-300' />

                <div className="flex border-b border-gray-200 w-1/4 mt-4 ml-4">
                    <button
                        className={`w-full py-2 cursor-pointer ${activeTab === 'GenerateReport'
                            ? "text-black border-t-3 border-t-pink-500 border-x border-x-gray-200"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab('GenerateReport')}
                    >
                        Generate Report
                    </button>
                    <button
                        className={`w-full py-2 cursor-pointer ${activeTab === 'ScheduleReport'
                            ? "text-black border-t-3 border-t-pink-500 border-x border-x-gray-200"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab('ScheduleReport')}
                    >
                        Schedule Report
                    </button>
                </div>

                <div className="mx-auto p-4">

                    <div className='flex gap-4'>
                        <div className="w-1/4">
                            <div className='bg-gray-50 rounded p-4 border border-gray-300'>
                                <h1 className="text-lg text-gray-800 my-2">{title}</h1>
                                <p className='mb-2'>{desc}</p>
                                <div className="mb-4">
                                    <div className='flex items-center mb-1'>
                                        <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                                        <label className="block mb-0 text-sm font-semibold">Time Period</label>
                                    </div>
                                    {
                                        activeTab === "GenerateReport" ?
                                            <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Apr 7, 2025 - May 6, 2025" />
                                            :
                                            <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Last 30 Days" />
                                    }
                                </div>
                                <div className="my-4">{children}</div>
                                {
                                    activeTab === "GenerateReport" ?
                                        <button className='bg-pink-500 text-white px-4 py-2 rounded text-center cursor-pointer text-xs mt-4'>
                                            Generate
                                        </button>
                                        :
                                        <button className='bg-pink-500 text-white px-4 py-2 rounded text-center cursor-pointer text-xs mt-4'>
                                            Schedule
                                        </button>
                                }
                            </div>
                        </div>
                        {
                            activeTab === "GenerateReport" ?
                                <div className="w-3/4">
                                </div>
                                :
                                <div className="w-3/4">
                                    <div>
                                        <h1 className="text-lg text-gray-800 my-2">Schedule Report</h1>
                                        <hr className='text-gray-300' />
                                    </div>
                                    <table className="w-full text-left text-sm mt-4">
                                        <thead>
                                            <tr className="text-gray-800 border-y border-gray-300 h-[40px]">
                                                <th className='pl-2'>Description</th>
                                                <th>Weekly Scheduled Items</th>
                                                <th>Monthly Scheduled Items</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-gray-800 border-y border-gray-300 hover:bg-gray-50 h-[40px]">
                                                <td className='pl-2'>There are no scheduled reports.</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default ReportsTemplate