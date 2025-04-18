'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faTrash, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import SelectBox from '@/app/components/DashboardComponents/SelectBox'
import DropdownBox from '@/app/components/DashboardComponents/DropdownBox'
import Link from 'next/link';
import Image from "next/image";
import FilterBox from '@/app/components/Filter'

const Tickets = () => {

    const [activeTab, setActiveTab] = useState("tickets");

    const [view, setView] = useState('Default view');

    const [priority, setPriority] = useState('Low');
    const [activitystatus, setActivitystatus] = useState('Read');
    const [status, setStatus] = useState('Open');
    const [assignedUser, setAssignedUser] = useState('artisanalgifttailor');

    const [isChecked, setisChecked] = useState(false);
    const handleCheckboxChange = () => {
        setisChecked((prev) => !prev);
    };

    const buttonClick = () => {
        alert('This ticket is deleted')
    }



    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center justify-between mb-2'>
                    <h1 className="text-lg font-semibold">Tickets</h1>
                    <Link href='/dashboard/ticket/add' className='bg-red-600 px-4 py-1 rounded-full text-center text-white'>
                        New Ticket
                    </Link>
                </div>

                <div className='bg-white rounded-md border border-gray-300'>
                    <div className="border-b border-gray-200">
                        <div className="flex border-b border-gray-200">
                            <button
                                className={`px-4 py-2 cursor-pointer ${activeTab === "tickets"
                                    ? "text-black border-b-3 border-pink-500"
                                    : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab("tickets")}
                            >
                                Tickets
                            </button>
                            <button
                                className={`px-4 py-2 cursor-pointer ${activeTab === "scheduled"
                                    ? "text-black border-b-3 border-pink-500"
                                    : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab("scheduled")}
                            >
                                Scheduled Tickets
                            </button>
                        </div>

                        <div className="">
                            {activeTab === "tickets" &&
                                <>
                                    <div className="flex items-center justify-between p-4">
                                        <div>
                                            <div className='flex items-center gap-4'>
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}
                                                    className="w-4 h-4" />
                                                <button
                                                    className={`flex items-center gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                                                    disabled={!isChecked}
                                                    onClick={buttonClick}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} className={`w-3 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                                                    Delete
                                                </button>
                                                <button
                                                    className={`flex items-center gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                                                    disabled={!isChecked}
                                                    onClick={buttonClick}
                                                >
                                                    <FontAwesomeIcon icon={faUserCheck} className={`w-3 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                                                    Assign ticket
                                                </button>
                                                <button
                                                    className={`flex items-center gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                                                    disabled={!isChecked}
                                                    onClick={buttonClick}
                                                >
                                                    <FontAwesomeIcon icon={faUserCheck} className={`w-3 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                                                    Set status
                                                </button>
                                            </div>
                                            <p className='mt-2 text-gray-400'>Displaying 1 of 1 tickets</p>
                                        </div>
                                        <div className='flex items-center w-80 gap-4'>
                                            <SelectBox
                                                options={['Default view', 'Spam tickets']}
                                                selected={view}
                                                onChange={setView}
                                                className='border border-gray-300'
                                                searchplaceholder={['Search view']}
                                            />
                                            <FilterBox />
                                        </div>
                                    </div>
                                    <hr className='text-gray-300' />
                                    <div>
                                        <table className="w-full text-left text-sm">
                                            <thead>
                                                <tr className="text-gray-500 border-b border-gray-300 h-[60px]">
                                                    <th></th>
                                                    <th></th>
                                                    <th>Details</th>
                                                    <th>SLA</th>
                                                    <th>Sentiment</th>
                                                    <th>Assigned technician</th>
                                                    <th>Priority</th>
                                                    <th>Activity status</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-gray-300 h-[100px] hover:bg-gray-50">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            checked={isChecked}
                                                            onChange={handleCheckboxChange}
                                                            className="w-4 h-4 ml-4" />
                                                    </td>
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
                                                        <div className="flex flex-col">
                                                            <span className="font-semibold">#1 SAMPLE TICKET</span>
                                                            <span className="text-blue-600">Unassigned</span>
                                                            <span className="text-gray-500 text-xs">Created 4 days ago | Modified 3 days ago</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">No SLA</span>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td >
                                                        <div className='flex items-center gap-1'>
                                                            <div className="bg-gray-100 w-7 h-7 rounded-full flex items-center border border-gray-300 justify-center">
                                                                <span className="text-xs">AA</span>
                                                            </div>
                                                            <DropdownBox
                                                                options={['artisanalgifttailor', 'newuser1', 'newuser2', 'newuser3']}
                                                                selected={assignedUser}
                                                                onChange={setAssignedUser}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <DropdownBox
                                                            options={['Low', 'Medium', 'High', 'Critical']}
                                                            selected={priority}
                                                            onChange={setPriority}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className='flex items-center justify-center gap-1' >
                                                            <div className={`rounded-full w-2 h-2 ${activitystatus === 'Unread' ? ' bg-black' : activitystatus === 'Read' ? 'bg-green-600' : 'bg-red-600'} `}></div>
                                                            <DropdownBox
                                                                options={['Unread', 'Read', 'Awaiting customer response', 'Awaiting technician response']}
                                                                selected={activitystatus}
                                                                onChange={setActivitystatus}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className={`w-max ${status === 'Open' ? 'bg-blue-100' : status === 'Pending' ? 'bg-yellow-100' : status === 'Resolved' ? 'bg-green-100' : status === 'Closed' ? 'bg-purple-100' : status === 'Deleted' ? 'bg-red-100' : null} px-3 py-1 rounded-full`} >
                                                            <DropdownBox
                                                                options={['Open', 'Pending', 'Resolved', 'Closed', 'Deleted']}
                                                                selected={status}
                                                                onChange={setStatus}
                                                                className={`${status === 'Open' ? 'text-blue-500' : status === 'Pending' ? 'text-yellow-500' : status === 'Resolved' ? 'text-green-500' : status === 'Closed' ? 'text-purple-500' : status === 'Deleted' ? 'text-red-500' : null}`}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            }
                            {activeTab === "scheduled" &&
                                <>
                                    <div className='p-4'>
                                        You can schedule tickets to pop up at a later date. Scheduled tickets will remain in draft and won't go live, or count towards your SLA, until their scheduled times.
                                        <Link href="#" className='text-blue-600'> Learn more</Link>
                                    </div>
                                    <div className='flex items-center gap-4 p-4'>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            className="w-4 h-4" />
                                        <button
                                            className={`flex items-center gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                                            disabled={!isChecked}
                                            onClick={buttonClick}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className={`w-3 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                                            Delete
                                        </button>
                                        <button
                                            className={`flex items-center gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                                            disabled={!isChecked}
                                            onClick={buttonClick}
                                        >
                                            <FontAwesomeIcon icon={faUserCheck} className={`w-3 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                                            Assign ticket
                                        </button>
                                        <button
                                            className={`flex items-center gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                                            disabled={!isChecked}
                                            onClick={buttonClick}
                                        >
                                            <FontAwesomeIcon icon={faUserCheck} className={`w-3 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                                            Set status
                                        </button>
                                    </div>
                                    <hr className='text-gray-300' />
                                    <div className="p-4">
                                        <table className="w-full text-left text-sm">
                                            <thead>
                                                <tr className="text-gray-500">
                                                    <th></th>
                                                    <th>Details</th>
                                                    <th>Assigned technician</th>
                                                    <th>Priority</th>
                                                    <th>Frequency</th>
                                                </tr>
                                            </thead>

                                        </table>
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

export default Tickets