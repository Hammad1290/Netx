'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const InvoicesTab = () => {

    const [isChecked, setisChecked] = useState(false);
    const handleCheckboxChange = () => {
        setisChecked((prev) => !prev);
    };

    const buttonClick = () => {
        alert('This ticket is deleted')
    }

    return (
        <>
            <div>
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center bg-white px-3 py-1 border border-gray-300 rounded">
                        <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                        <input type="text" placeholder="Search" className="ml-2 outline-none" />
                    </div>
                    <Link href='/dashboard/billing' className='bg-red-600 text-white rounded-full px-4'>New Invoice</Link>
                </div>
                <hr className='text-gray-300' />
                <div className='flex items-center justify-between p-4'>
                    <div>
                        <button
                            className={`flex items-center text-sm gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                            disabled={!isChecked}
                            onClick={buttonClick}
                        >
                            <FontAwesomeIcon icon={faTrash} className={`w-4 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                            Delete
                        </button>
                    </div>
                </div>
                <hr className='text-gray-300' />
                <div>
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-300 h-[60px]">
                                <th className='w-15'>
                                    <div className='ml-4'>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            disabled={!isChecked}
                                            onChange={handleCheckboxChange}
                                            className='w-4 h-4' />
                                    </div>
                                </th>
                                <th>Invoice number</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Batch name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300 h-[100px] hover:bg-gray-50">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default InvoicesTab