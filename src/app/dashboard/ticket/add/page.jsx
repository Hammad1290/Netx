'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import SelectBox from '@/app/components/DashboardComponents/SelectBox'

const addTicket = () => {

    const [selectCustomer, setSelectCustomer] = useState('');
    const [selectContact, setSelectContact] = useState('');

    const [isChecked, setisChecked] = useState(false);
    const handleCheckboxChange = () => {
        setisChecked((prev) => !prev);
    };

    const [isOpen, setIsOpen] = useState(false);

    const [sortOrder, setSortOrder] = useState('GeneratewithAI');

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <>
            <div className="p-6 min-h-screen">
                <div className='flex items-center justify-between mb-4'>
                    <h1 className="text-xl font-semibold ">New Ticket</h1>
                    <div className='flex items-center gap-4'>
                        <Link href='/dashboard/ticket' className='bg-gray-200 border border-gray-300 px-4 py-2 rounded-full text-center'>
                            Cancle
                        </Link>
                        <Link href='/dashboard/ticket/add' className='bg-red-600 px-4 py-2 rounded-full text-center text-white'>
                            Create
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6 bg-gray-100 '>
                    <div className="w-full lg:w-2/3 bg-white p-6 rounded-md border border-gray-300">
                        <h2 className="text-xl font-semibold mb-4">Ticket creation and scheduling</h2>

                        <div className="mb-4">
                            <label className="block mb-1">Customer</label>
                            <SelectBox
                                options={['Unassigned']}
                                selected={selectCustomer}
                                onChange={setSelectCustomer}
                                searchplaceholder={['Search Customer']}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Contact *</label>
                            <SelectBox
                                options={['John Smith']}
                                selected={selectContact}
                                onChange={setSelectContact}
                                searchplaceholder={['Search Contact']}
                            />
                            <Link href='/dashboard/contact/add' className="mt-1 text-blue-600 text-sm">+ Add contact</Link>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Ticket Title *</label>
                            <input className="w-full outline-none p-2 border border-gray-300 rounded" placeholder="Add brief ticket summary" />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Description</label>
                            <textarea className="w-full outline-none p-2 border border-gray-300 rounded h-40" placeholder="Enter ticket details here"></textarea>
                        </div>
                        <div className="text-sm text-blue-600 cursor-pointer mb-4">Attach files</div>

                        <div className="mb-4 flex items-center">
                            <input
                                id='timeShow'
                                className="w-4 h-4"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                type='checkbox' />
                            <label htmlFor="timeShow" className='text-sm ml-3'>Include ticket creation in work time</label>
                        </div>

                        {
                            isChecked ?
                                <div className='bg-sky-200 w-full h-20 rounded mb-4'></div>
                                : null
                        }

                        <div className="flex items-center mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
                            {
                                isOpen ? <FontAwesomeIcon icon={faAngleUp} className='w-3' /> : <FontAwesomeIcon icon={faAngleDown} className='w-3' />
                            }
                            <p className='text-nowrap  mx-2'>Schedule ticket</p>
                            <hr className='w-full text-gray-300' />
                        </div>

                        {
                            isOpen && (
                                <>
                                    <p className='text-sm mb-4'>
                                        Schedule the ticket for a later date or on a recurring schedule.
                                        <Link href="#" className='text-blue-600'> Learn more</Link>
                                    </p>

                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex items-center">
                                            <input
                                                id="GeneratewithAI"
                                                type="radio"
                                                value="GeneratewithAI"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                checked={sortOrder === 'GeneratewithAI'}
                                                onChange={handleSortOrderChange}
                                            />
                                            <label htmlFor="GeneratewithAI" className="ml-2 text-sm text-gray-600">
                                                Generate with AI
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="EnterManually"
                                                type="radio"
                                                value="EnterManually"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                checked={sortOrder === 'EnterManually'}
                                                onChange={handleSortOrderChange}
                                            />
                                            <label htmlFor="EnterManually" className="ml-2 text-sm text-gray-600">
                                                Enter manually
                                            </label>
                                        </div>
                                    </div>

                                    {
                                        sortOrder === 'EnterManually' ?
                                            <div className='flex items-center justify-between gap-4 mb-4'>
                                                <p className="block mb-1 text-sm text-nowrap">Create ticket</p>
                                                <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="" />
                                                <p className="block mb-1 text-sm">On</p>
                                                <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='date' />
                                                <p className="block mb-1 text-sm">At</p>
                                                <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='time' />
                                            </div>
                                            :
                                            <>

                                                <div className="mb-4">
                                                    <label className="block mb-1 text-sm">Enter scheduling instructions</label>
                                                    <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="E.g., ‘Create a ticket every Monday and Tuesday at 9:00AM’" />
                                                </div>
                                                <div className="flex items-center" >
                                                    <p className='text-nowrap mr-2'>Examples</p>
                                                    <FontAwesomeIcon icon={faAngleDown} className='w-3' />
                                                </div>
                                            </>
                                    }

                                </>
                            )
                        }

                    </div>

                    <div className="w-full lg:w-1/3 bg-white p-6 rounded-md border border-gray-300">
                        <h2 className="text-xl font-semibold mb-4">Ticket assignment and type</h2>

                        <div className="mb-4">
                            <label className="block mb-1">Group</label>
                            <select className="w-full outline-none p-2 border border-gray-300 rounded">
                                <option>Unassigned</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Assign technician</label>
                            <select className="w-full outline-none p-2 border border-gray-300 rounded">
                                <option>artisanalgifttailor artisanalgifttailor</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Type</label>
                            <select className="w-full outline-none p-2 border border-gray-300 rounded">
                                <option>Incident</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Contract</label>
                            <select className="w-full outline-none p-2 border border-gray-300 rounded">
                                <option>Select contract</option>
                            </select>
                        </div>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Ticket properties</h2>

                        <div className="mb-4">
                            <label className="block mb-1">Form template</label>
                            <select className="w-full outline-none p-2 border border-gray-300 rounded">
                                <option>Please select</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Priority</label>
                            <select className="w-full outline-none p-2 border border-gray-300 rounded">
                                <option>Low</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Impact</label>
                            <select className="w-full outline-none p-2 border border-gray-300 rounded">
                                <option>No Impact</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Product Family</label>
                            <select className="w-full outline-none p-2 border border-gray-300 rounded">
                                <option>Please select</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default addTicket