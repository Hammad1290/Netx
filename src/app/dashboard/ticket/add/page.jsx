import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const addTicket = () => {
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
                            <select className="w-full p-2 border border-gray-300 rounded">
                                <option>Select customer</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Contact *</label>
                            <div className="flex items-center gap-2 bg-white px-3 py-1 w-full p-2 border border-gray-300 rounded">
                                <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                                <input type="text" placeholder="Search" className="outline-none w-full" />
                            </div>
                            <button className="mt-1 text-blue-600 text-sm">+ Add contact</button>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Ticket Title *</label>
                            <input className="w-full outline-none p-2 border border-gray-300 rounded" placeholder="Add brief ticket summary" />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Description</label>
                            <textarea className="w-full outline-none p-2 border border-gray-300 rounded h-40" placeholder="Enter ticket details here"></textarea>
                        </div>

                        <div className="text-sm text-blue-600 cursor-pointer">Attach files</div>
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