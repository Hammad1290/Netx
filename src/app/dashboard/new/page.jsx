
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const DashboardHome = () => {

    const ticketStatus = [
        { statusCount: '1', statusContent: 'Open' },
        { statusCount: '0', statusContent: 'Pending' },
        { statusCount: '0', statusContent: 'Due today' },
        { statusCount: '0', statusContent: 'Overdue' },
    ]
    const alertStatus = [
        { alertCount: '0', alertContent: 'Warning' },
        { alertCount: '0', alertContent: 'Critical' },
    ]

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center justify-between'>
                    <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
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

                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-white p-4 rounded-lg border border-gray-300 hover:border-black">
                        <h2 className="font-semibold">Ticket status</h2>
                        <div className="flex justify-between mt-2">
                            {
                                ticketStatus.map(
                                    (val, index) => {
                                        return (

                                            <div className='flex gap-3' key={index}>
                                                <span className="text-lg font-bold">{val.statusCount}</span>
                                                {
                                                    val.statusContent === 'Open' ?
                                                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{val.statusContent}</span>
                                                        :
                                                        val.statusContent === 'Pending' ?
                                                            <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">{val.statusContent}</span>
                                                            :
                                                            val.statusContent === 'Due today' ?
                                                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">{val.statusContent}</span>
                                                                :
                                                                val.statusContent === 'Overdue' ?
                                                                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">{val.statusContent}</span>
                                                                    :
                                                                    null

                                                }
                                            </div>

                                        )
                                    }
                                )
                            }
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-300 hover:border-black">
                        <h2 className="font-semibold">Alert status</h2>
                        <div className="flex gap-4 mt-2">
                            {
                                alertStatus.map(
                                    (val, index) => {
                                        return (

                                            <div className='flex gap-3' key={index}>
                                                <span className="text-lg font-bold">{val.alertCount}</span>
                                                {
                                                    val.alertContent === 'Warning' ?
                                                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">{val.alertContent}</span>
                                                        :
                                                        val.alertContent === 'Critical' ?
                                                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">{val.alertContent}</span>
                                                            :
                                                            null

                                                }
                                            </div>

                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-300 hover:border-black">
                        <h2 className="font-semibold">Unassigned tickets</h2>
                        <table className="w-full mt-2 text-left text-sm">
                            <thead>
                                <tr className="text-gray-500">
                                    <th>Details</th>
                                    <th>Technician</th>
                                    <th>Priority</th>
                                    <th>SLA</th>
                                </tr>
                            </thead>
                        </table>
                        <hr className='text-gray-300 my-3' />
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-300 hover:border-black">
                        <h2 className="font-semibold">Recent alerts</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHome