'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from '@/app/components/Modal'
import FilterSelectBox from '@/app/components/Filter/FilterSelectBox'

const PasswordsTab = () => {

    const [isChecked, setisChecked] = useState(false);
    const handleCheckboxChange = () => {
        setisChecked((prev) => !prev);
    };

    const buttonClick = () => {
        alert('This ticket is deleted')
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [category, setCategory] = useState('Please select');

    return (
        <>
            <div>
                <div className="flex items-center justify-between p-4">
                    <div>
                        <button
                            className={`flex items-center text-sm mb-2 gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                            disabled={!isChecked}
                            onClick={buttonClick}
                        >
                            <FontAwesomeIcon icon={faTrash} className={`w-4 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                            Delete
                        </button>
                        <p className='text-gray-400'>Displaying 1 of 0 passwords</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className="flex items-center bg-white px-3 py-1 border border-gray-300 rounded">
                            <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                            <input type="text" placeholder="Search" className="ml-2 outline-none" />
                        </div>
                        <div>
                            <button onClick={() => setIsModalOpen(true)} className='bg-red-600 text-white rounded-full px-4 cursor-pointer'>New Password</button>
                        </div>
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
                                <th>Name</th>
                                <th>Login URL</th>
                                <th>Username</th>
                                <th>Password</th>
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
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New Password">
                    <div className="mb-4">
                        <div className='flex mb-1'>
                            <label className="block mb-0 text-sm">Name</label>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-gary-500 ml-1' />
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Enter Password name" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-0 text-sm mb-1">Login URL</label>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Enter URL" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-0 text-sm mb-1">Username</label>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Enter username" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-0 text-sm mb-1">Password</label>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Enter password" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-0 text-sm mb-1">Domain</label>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Enter domain" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-0 text-sm mb-1">Category</label>
                        <FilterSelectBox
                            options={['Cloud Service', 'Credit Card', 'Database', 'Email', 'FTP', 'ISP', 'Other', 'Remote Access', 'Router/Firewall', 'Voip', 'VPN', 'Windows Login']}
                            selected={category}
                            onChange={setCategory}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-0 text-sm mb-1">Extra value</label>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Enter your input" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-0 text-sm mb-1">Notes</label>
                        <textarea className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='text' placeholder="Add a brief note" />
                    </div>

                    <div className='flex items-center justify-end gap-4'>
                        <button onClick={() => setIsModalOpen(false)} className='border border-black px-4 py-2 rounded-full text-center text-sm cursor-pointer'>
                            Cancle
                        </button>
                        <button className='bg-red-600 px-4 py-2 rounded-full text-center text-white text-sm cursor-pointer' onClick={buttonClick} >
                            Create
                        </button>
                    </div>

                </Modal>
            </div>
        </>
    )
}

export default PasswordsTab