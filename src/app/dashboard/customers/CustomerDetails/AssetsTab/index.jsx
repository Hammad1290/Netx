'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import SelectBoxLinks from '@/app/components/DashboardComponents/SelectBoxLinks'

const AssetsTab = () => {

    const [isChecked, setisChecked] = useState(false);
    const handleCheckboxChange = () => {
        setisChecked((prev) => !prev);
    };

    const buttonClick = () => {
        alert('This ticket is deleted')
    }

    const [assetselected, setAssetselected] = useState('');

    const assetsoptions = [
        { label: 'New Assets', value: '/dashboard' },
        { label: 'Import Assets', value: '/dashboard' },
    ];

    return (
        <>
            <div>
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center bg-white px-3 py-1 border border-gray-300 rounded">
                        <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                        <input type="text" placeholder="Search" className="ml-2 outline-none" />
                    </div>
                    <div>
                        <SelectBoxLinks
                            options={assetsoptions}
                            selected={assetselected}
                            setSelected={setAssetselected}
                            buttonName='Manage Assets'
                            className='bg-red-600 text-white'
                            iconColor='text-white-500'
                        />
                    </div>
                </div>
                <hr className='text-gray-300' />
                <div className='flex items-center justify-between p-4'>
                    <div className='flex items-center gap-4'>
                        <button
                            className={`flex items-center text-sm gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                            disabled={!isChecked}
                            onClick={buttonClick}
                        >
                            <FontAwesomeIcon icon={faEdit} className={`w-4 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                            Edit
                        </button>
                        <button
                            className={`flex items-center text-sm gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                            disabled={!isChecked}
                            onClick={buttonClick}
                        >
                            <FontAwesomeIcon icon={faTrash} className={`w-4 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                            Delete
                        </button>
                    </div>
                    <p className='text-gray-400'>Displaying 1 of 0 devices</p>
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
                                <th>Name</th>
                                <th>Asset type</th>
                                <th>Status</th>
                                <th>Purchased date</th>
                                <th>Warranty expiration date</th>
                                <th>Folder</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300 h-[100px] hover:bg-gray-50">
                                <td></td>
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

export default AssetsTab