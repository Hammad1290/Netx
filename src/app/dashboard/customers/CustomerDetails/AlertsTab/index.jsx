'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import SelectBoxLinks from '@/app/components/DashboardComponents/SelectBoxLinks'
import Modal from '@/app/components/Modal'
import Link from 'next/link'

const AlertsTab = () => {

    const [isChecked, setisChecked] = useState(false);
    const handleCheckboxChange = () => {
        setisChecked((prev) => !prev);
    };

    const buttonClick = () => {
        alert('This ticket is deleted')
    }

    const [alertselected, setAlertselected] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const alertsoptions = [
        { label: 'Manage customer', isModal: true },
        { label: 'Manage folder', isModal: true }
    ];

    const [enabled, setEnabled] = useState(false);

    const [sortOrder, setSortOrder] = useState('24/7');

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

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
                            options={alertsoptions}
                            selected={alertselected}
                            setSelected={setAlertselected}
                            buttonName='Alert setting'
                            className='border border-black'
                            iconColor='text-black'
                            onModalTrigger={() => setIsModalOpen(true)}
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
                            <FontAwesomeIcon icon={faTrash} className={`w-4 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                            Delete
                        </button>
                        <button
                            className={`flex items-center text-sm gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                            disabled={!isChecked}
                            onClick={buttonClick}
                        >
                            <FontAwesomeIcon icon={faClock} className={`w-4 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                            Snooze
                        </button>
                        <button
                            className={`flex items-center text-sm gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                            disabled={!isChecked}
                            onClick={buttonClick}
                        >
                            <FontAwesomeIcon icon={faCheckCircle} className={`w-4 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                            Resolve
                        </button>
                    </div>
                    <p className='text-gray-400'>Displaying 1 of 0 alerts</p>
                </div>
                <hr className='text-gray-300' />
                <div>
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-300 h-[60px]">
                                <th>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="w-4 h-4 ml-4" />
                                </th>
                                <th>Details</th>
                                <th>Created</th>
                                <th>Severity</th>
                                <th>Category</th>
                                <th>Ticket</th>
                                <th>Status</th>
                                <th>Manage devices</th>
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
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Customer alert settings">
                    <div>
                        <div className='flex gap-3 mb-6'>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setEnabled(!enabled)}
                                    className={`relative w-12 h-6 cursor-pointer rounded-full transition-colors duration-300 ease-in-out ${enabled ? "bg-blue-500" : "bg-gray-300"
                                        }`}
                                >
                                    <span
                                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${enabled ? "translate-x-6" : ""
                                            }`}
                                    />
                                </button>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold mb-2'>Enable alert settings</h2>
                                <p className='text-xs'>Enable to supersede global configurations. <Link href='#' className='text-blue-500'> Learn more</Link></p>
                            </div>
                        </div>
                        <hr className='text-gray-300' />
                        <div className="my-4">
                            <label className="block mb-0 text-sm font-semibold mb-1">Recipients</label>
                            <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="admin@yourcompany.com" disabled={!enabled} />
                        </div>
                        <div className='mb-4'>
                            <label className="block mb-0 text-sm font-semibold mb-4">Triggers</label>
                            <div className='flex gap-10'>
                                <div>
                                    <p className='mb-4 text-gray-500 font-semibold'>Severity</p>
                                    <div className="flex items-center gap-2 mb-4">
                                        <input type='checkbox' id='critical' disabled={!enabled} />
                                        <label htmlFor='critical' className='text-sm'>Critical</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type='checkbox' id='warning' disabled={!enabled} />
                                        <label htmlFor='warning' className='text-sm'>Warning</label>
                                    </div>
                                </div>
                                <div>
                                    <p className='mb-4 text-gray-500 font-semibold'>Status</p>
                                    <div className="flex items-center gap-2">
                                        <input type='checkbox' id='resolved' disabled={!enabled} />
                                        <label htmlFor='resolved' className='text-sm'>Resolved</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className="block mb-0 text-sm font-semibold mb-4">Timeframe</label>
                            <div >
                                <div className="flex items-center mb-4">
                                    <input
                                        id="24/7"
                                        type="radio"
                                        value="24/7"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        checked={sortOrder === '24/7'}
                                        onChange={handleSortOrderChange}
                                        disabled={!enabled}
                                    />
                                    <label htmlFor="24/7" className="ml-2 text-sm text-gray-600">
                                        24/7
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="Specifichours"
                                        type="radio"
                                        value="Specifichours"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        checked={sortOrder === 'Specifichours'}
                                        onChange={handleSortOrderChange}
                                        disabled={!enabled}
                                    />
                                    <label htmlFor="Specifichours" className="ml-2 text-sm text-gray-600">
                                        Specific hours
                                    </label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p>Send email between</p>
                                    <input type='time' className='w-24 outline-none p-2 border border-gray-300 rounded text-xs' disabled={sortOrder === '24/7'} />
                                    <p>and</p>
                                    <input type='time' className='w-24 outline-none p-2 border border-gray-300 rounded text-xs' disabled={sortOrder === '24/7'} />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-end gap-4'>
                            <button onClick={() => setIsModalOpen(false)} className='border border-black px-4 py-2 rounded-full text-center text-sm cursor-pointer'>
                                Cancle
                            </button>
                            <button className='bg-red-600 px-4 py-2 rounded-full text-center text-white text-sm cursor-pointer' onClick={buttonClick} disabled={!enabled}>
                                Apply
                            </button>
                        </div>
                    </div>
                </Modal>

                <Modal isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)} title="Customer alert settings">
                    <div>
                        <div className='flex gap-3 mb-6'>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setEnabled(!enabled)}
                                    className={`relative w-12 h-6 cursor-pointer rounded-full transition-colors duration-300 ease-in-out ${enabled ? "bg-blue-500" : "bg-gray-300"
                                        }`}
                                >
                                    <span
                                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${enabled ? "translate-x-6" : ""
                                            }`}
                                    />
                                </button>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold mb-2'>Enable alert settings</h2>
                                <p className='text-xs'>Enable to supersede global configurations. <Link href='#' className='text-blue-500'> Learn more</Link></p>
                            </div>
                        </div>
                        <hr className='text-gray-300' />
                        <div className="my-4">
                            <label className="block mb-0 text-sm font-semibold mb-1">Recipients</label>
                            <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="admin@yourcompany.com" disabled={!enabled} />
                        </div>
                        <div className='flex items-center justify-end gap-4'>
                            <button onClick={() => setIsModalOpen(false)} className='border border-black px-4 py-2 rounded-full text-center text-sm cursor-pointer'>
                                Cancle
                            </button>
                            <button className='bg-red-600 px-4 py-2 rounded-full text-center text-white text-sm cursor-pointer' onClick={buttonClick} disabled={!enabled}>
                                Apply
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default AlertsTab