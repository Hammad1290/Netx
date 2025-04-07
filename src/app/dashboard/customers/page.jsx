'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash, faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Customers = () => {

    const [activeTab, setActiveTab] = useState("tickets");

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center justify-between'>
                    <h1 className="text-2xl font-semibold mb-4">Customers</h1>
                    <button className='bg-red-600 px-4 py-1 rounded-full text-center text-white'>
                        New Customers
                    </button>
                </div>

                <div className='bg-white rounded-md border border-gray-300'>
                    <div className="border-b border-gray-200">
                        <div className='flex items-center justify-between p-4'>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" className="w-4 h-4" />
                                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                                    <FontAwesomeIcon icon={faTrash} className='w-3 text-gray-500' />
                                    Delete
                                </button>
                            </div>
                            <div className="flex items-center bg-white px-3 py-1 border border-gray-300 rounded-2">
                                <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                                <input type="text" placeholder="Search" className="ml-2 outline-none" />
                            </div>
                        </div>
                        <p className='ml-4 mb-4 text-gray-500'>Displaying 1 customers</p>
                        <hr className='text-gray-300' />
                        <div className="p-4">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="text-gray-500">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Unmonitored devices	</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Contact</th>
                                        <th>Rank</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr className="">
                                        <td>
                                            <input type="checkbox" className="w-4 h-4" />
                                        </td>
                                        <td>
                                            <span className="text-gray-700">Unassigned</span>
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <div className='hover:text-blue-600'>
                                                <FontAwesomeIcon icon={faPhone} className='w-3 text-gray-500 mr-2' />
                                                <span className="text-gray-700">Add phone</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-gray-700">Unknown</span>
                                        </td>
                                        <td>
                                            <div className='flex flex-col'>
                                                <span className="text-gray-700">Jhon Smith</span>
                                                <span className="text-gray-700">050-0000001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-gray-700">set rank</span>
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