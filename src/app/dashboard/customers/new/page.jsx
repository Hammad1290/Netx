'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLeftLong, faLocation, faLocationPin, faLocationPinLock, faMapLocation, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import DropdownBox from '@/app/components/DashboardComponents/DropdownBox'
import { faThreads } from '@fortawesome/free-brands-svg-icons'

const CustomerDetail = () => {

    const [activeTab, setActiveTab] = useState("overview");

    const [rank, setRank] = useState('Silver');

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center gap-6 mb-4'>
                    <FontAwesomeIcon icon={faLeftLong} className='w-3 text-gray-500' />
                    <div className='border border-gray-400 px-4 py-2 rounded'>
                        <h1 className='text-xl text-gray-400'>U</h1>
                    </div>
                    <div className='text-gray-500'>
                        <div className='flex items-center gap-2'>
                            <h1 className="text-lg font-semibold">Unassigned</h1>
                            <div className={`w-max ${rank === 'Silver' ? 'bg-gray-400' : rank === 'Gold' ? 'bg-yellow-400' : rank === 'Blocked' ? 'bg-red-400' : rank === 'None' ? 'border border-gray-400' : null} px-3 py-1 rounded-full`} >
                                <DropdownBox
                                    options={['Silver', 'Gold', 'Blocked', 'None']}
                                    selected={rank}
                                    onChange={setRank}
                                    className={`${rank === 'None' ? 'text-gray-400' : 'text-white'}`}
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faSearch} className='w-3' />
                                <p>No business ID #</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faPhone} className='w-3' />
                                <p>325245435</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faLocationPinLock} className='w-3' />
                                <p>USA</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faGlobe} className='w-3' />
                                <p>No Website</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faThreads} className='w-3' />
                                <p>No Domain</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white border border-gray-100'>
                    <div className="border-b border-gray-200">
                        <div className="flex border-b border-gray-200">
                            <button
                                className={`px-8 py-4 cursor-pointer ${activeTab === "overview"
                                    ? "text-black border-b-3 border-pink-500"
                                    : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab("overview")}
                            >
                                Overview
                            </button>
                            <button
                                className={`px-8 py-4 cursor-pointer ${activeTab === "contacts"
                                    ? "text-black border-b-3 border-pink-500"
                                    : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab("contacts")}
                            >
                                Contacts
                            </button>
                            <button
                                className={`px-8 py-4 cursor-pointer ${activeTab === "devices"
                                    ? "text-black border-b-3 border-pink-500"
                                    : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab("devices")}
                            >
                                Devices
                            </button>
                            <button
                                className={`px-8 py-4 cursor-pointer ${activeTab === "contracts"
                                    ? "text-black border-b-3 border-pink-500"
                                    : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab("contracts")}
                            >
                                Contracts
                            </button>
                        </div>

                        <div className="">
                            {activeTab === "overview" &&
                                <>
                                    <div className='px-8 py-2'>
                                        <div className="grid grid-cols-3 gap-4 mt-2">
                                            <div className='border-r border-gray-300'>
                                                <h1 className='mb-2'>System fields</h1>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div>
                                                        <p className='my-2 text-gray-500 font-semibold'>Phone</p>
                                                        <p className='my-2 text-gray-500 font-semibold'>Address</p>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <p className='my-2 text-gray-600 '>325245435</p>
                                                        <p className='my-2 text-gray-600 '>325245435</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='border-r border-gray-300'>
                                                <h1>Custom fields</h1>
                                                <p>Nothing here yet...</p>
                                            </div>
                                            <div>
                                                <h1>Notes</h1>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            }
                            {activeTab === "contacts" &&

                                <>
                                    <div>
                                        new 2
                                    </div>
                                </>
                            }
                            {activeTab === "devices" &&
                                <>
                                    <div>
                                        new 3
                                    </div>
                                </>
                            }
                            {activeTab === "contracts" &&

                                <>
                                    <div>
                                        new 4
                                    </div>
                                </>
                            }
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default CustomerDetail