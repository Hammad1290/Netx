'use client'
import React, { useState } from 'react'
import SideBar from '../components/sideBar'
import DropdownBox from '../components/DropdownBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faExclamationTriangle, faQuestion, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Dashboard = ({ children }) => {

    const [addNew, setAddNew] = useState('New');

    return (
        <>
            <div className='flex'>
                <div>
                    <SideBar />
                </div>
                <div className='w-full bg-gray-100'>
                    <div className="flex">
                        <div className="flex-1 flex flex-col">
                            <div className="flex items-center justify-between py-2 px-4">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gray-200 px-3 py-1 rounded-full">
                                        <DropdownBox
                                            options={['Ticket', 'Contact', 'Customer', 'Invoice']}
                                            selected={addNew}
                                            onChange={setAddNew}
                                        />
                                    </div>
                                    <div className="flex items-center bg-white px-3 py-1 rounded-full">
                                        <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                                        <input type="text" placeholder="Search" className="ml-2 outline-none" />
                                        <FontAwesomeIcon icon={faAngleDown} className='w-3 text-gray-500' />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button className="bg-gray-200 px-3 py-1 rounded-full">Install agent</button>
                                    <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBell} className='w-3' />
                                    </div>
                                    <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faExclamationTriangle} className='w-3' />
                                    </div>
                                    <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faQuestion} className='w-2 text-white' />
                                    </div>
                                    <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center border border-gray-300 justify-center">
                                        <span className="">AA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-500 text-white text-center py-2">
                                <span>You’ve got 27 day(s) and 300 more agent installation(s) left in your trial </span>
                                <button className="border border-white px-4 py-1 rounded-full">Subscribe now</button>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Dashboard