
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faTrash, faUserCheck, faSuitcase } from '@fortawesome/free-solid-svg-icons'

const Tickets = () => {
    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center justify-between'>
                    <h1 className="text-2xl font-semibold mb-4">Tickets</h1>
                    <div className='flex gap-3'>
                        <div className="bg-white px-3 py-1 rounded-full flex gap-2 border border-gray-300">
                            New
                            <FontAwesomeIcon icon={faAngleDown} className='w-3 text-gray-500' />
                        </div>
                        <div className="bg-white px-3 py-1 rounded-full flex gap-2 border border-gray-300">
                            New
                            <FontAwesomeIcon icon={faAngleDown} className='w-3 text-gray-500' />
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-md border border-gray-300'>
                    <div className="flex items-center gap-4 p-4">
                        <input type="checkbox" className="w-4 h-4" />
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <FontAwesomeIcon icon={faTrash} className='w-3 text-gray-500' />
                            Delete
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <FontAwesomeIcon icon={faUserCheck} className='w-3 text-gray-500' />
                            Assign ticket
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <FontAwesomeIcon icon={faUserCheck} className='w-3 text-gray-500' />
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
                                    <th>SLA</th>
                                    <th>Sentiment</th>
                                    <th>Assigned technician</th>
                                    <th>Priority</th>
                                    <th>Activity status</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="mt-4">
                                    <td>
                                        <input type="checkbox" className="w-4 h-4" />
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
                                        <span className="text-blue-500">😊</span>
                                    </td>
                                    <td>
                                        <span className="text-gray-700">artisanalgifttailor</span>
                                    </td>
                                    <td>
                                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">Low</span>
                                    </td>
                                    <td>
                                        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">Awaiting technician response</span>
                                    </td>
                                    <td>
                                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Open</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Tickets