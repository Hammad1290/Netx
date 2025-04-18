'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Image from "next/image";
import DropdownBox from '@/app/components/DashboardComponents/DropdownBox';
import NetworkFilter from '@/app/components/Filter/NetworkFilter';

const Customers = () => {

    const [scanStatus, setScanStatus] = useState('Intall Agent');

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center justify-between mb-2'>
                    <h1 className="text-lg font-semibold">Network & Configuration</h1>
                    <Link href='/dashboard/network&configuration/advance-setting' className='border px-4 py-1 rounded-full text-center'>
                        Manage Alerts
                    </Link>
                </div>

                <div className='bg-white rounded-md border border-gray-300'>
                    <div className="border-b border-gray-200">
                        <div className='flex items-center justify-between p-4'>
                            <div className="">
                                <p className='mb-2'>Discover your customer’s networks with ongoing, continuous scans that show you everything on the network.<Link href='#' className='text-blue-500'> Learn more</Link></p>
                                <p className='text-gray-500'>Displaying 1 customers</p>
                            </div>
                            <div className='flex items-center gap-8'>
                                <div className="flex items-center bg-white px-3 py-1 border border-gray-300 rounded">
                                    <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                                    <input type="text" placeholder="Search cutomer name" className="ml-2 outline-none" />
                                </div>
                                <NetworkFilter />
                            </div>
                        </div>

                        <hr className='text-gray-300' />
                        <div>
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-300 h-[60px]">
                                        <th></th>
                                        <th>Customer Name</th>
                                        <th>Public IP</th>
                                        <th>Network</th>
                                        <th>Workstations/Servers</th>
                                        <th>SNMP</th>
                                        <th>Scan Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-300 h-[100px] hover:bg-gray-50">
                                        <td className='flex items-center justify-center' style={{ height: 'inherit' }}>
                                            <div className='border border-gray-200 p-2 rounded w-fit'>
                                                <Image
                                                    src='/suitcase.svg'
                                                    alt="logo"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-gray-700">Unassigned</span>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            <div className='border px-4 py-1 rounded-full w-max'>
                                                <DropdownBox
                                                    options={['Download Windows Agent', 'Copy CLI Script', 'Copy Windows Installer Link']}
                                                    selected={scanStatus}
                                                    onChange={setScanStatus}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Customers