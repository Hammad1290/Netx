'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import SelectBox from '@/app/components/DashboardComponents/SelectBox'
import FilterSelectBox from '@/app/components/Filter/FilterSelectBox'

const SNMP = () => {

    const [selectCustomer, setSelectCustomer] = useState('');
    const [folder, setFolder] = useState('');
    const [monitoringAgent, setMonitoringAgent] = useState('');
    const [type, setType] = useState('');
    const [version, setVersion] = useState('V1');

    return (
        <>
            <div className="p-6 min-h-screen">
                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <h1 className="text-xl font-semibold mb-4">New Device - SNMP</h1>
                        <p>Monitor SNMP devices with your installed Windows agents. Once added, you can view connectivity status and manage OIDs, alert thresholds and more.<Link href='#' className='text-blue-500'> Learn more</Link></p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link href='/dashboard/devices' className='bg-gray-200 border border-gray-300 px-4 py-2 rounded-full text-center'>
                            Cancle
                        </Link>
                        <Link href='/dashboard/devices/add/snmp' className='bg-red-600 px-4 py-2 rounded-full text-center text-white'>
                            Add
                        </Link>
                    </div>
                </div>
                <div className="w-full bg-white p-6 rounded-md border border-gray-300">

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0 text-sm">Device Name</label>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-black-300 ml-1 mb-1' />
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="Device Name" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0 text-sm">Description</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="Description" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0">Customer</label>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-black-300 ml-1 mb-1' />
                        </div>
                        <SelectBox
                            options={['Unassigned']}
                            selected={selectCustomer}
                            onChange={setSelectCustomer}
                            className='border border-gray-300'
                            searchplaceholder={['Search Customer']}
                        />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0">Folder</label>
                        </div>
                        <FilterSelectBox
                            options={['']}
                            selected={folder}
                            onChange={setFolder}
                        />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0">Monitoring Agent</label>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-black-300 ml-1 mb-1' />
                        </div>
                        <FilterSelectBox
                            options={['']}
                            selected={monitoringAgent}
                            onChange={setMonitoringAgent}
                        />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0">Type</label>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-black-300 ml-1 mb-1' />
                        </div>
                        <FilterSelectBox
                            options={['Access Server', 'Access Point', 'Checkpoint', 'Find Server', 'Firewal', 'Gateway', 'Hub']}
                            selected={type}
                            onChange={setType}
                        />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0 text-sm">Port</label>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-black-300 ml-1 mb-1' />
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="161" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0">Version</label>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-black-300 ml-1 mb-1' />
                        </div>
                        <FilterSelectBox
                            options={['V1', 'V2', 'V3']}
                            selected={version}
                            onChange={setVersion}
                        />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0 text-sm">Community String</label>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-black-300 ml-1 mb-1' />
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder='public' />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <label className="block mb-0 text-sm">Notes</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default SNMP