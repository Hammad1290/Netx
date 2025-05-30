'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import SelectBox from '@/app/components/DashboardComponents/SelectBox'

const addContact = () => {

    const [selectCustomer, setSelectCustomer] = useState('');

    return (
        <>
            <div className='bg-white min-h-screen'>
                <div className="p-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">New Contact</h1>
                    <nav className="text-xs text-gray-500">
                        <Link href='/dashboard/new' className="mr-2">Home</Link>
                        <span className="mr-2">/</span>
                        <span>Contact</span>
                    </nav>
                </div>
                <hr className='text-gray-300' />
                <div className='p-4 w-[50%]'>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                            <label className="block mb-0">Select Customer</label>
                        </div>
                        <SelectBox
                            options={['Unassigned']}
                            selected={selectCustomer}
                            onChange={setSelectCustomer}
                            className='border border-gray-300'
                            searchplaceholder={['Search Customer']}
                        />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                            <label className="block mb-0 text-sm">First Name</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="First Name" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                            <label className="block mb-0 text-sm">Last Name</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="Last Name" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                            <label className="block mb-0 text-sm">Email</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='email' placeholder="Email" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                            <label className="block mb-0 text-sm">Phone</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                            <label className="block mb-0 text-sm">Mobile Number</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                            <label className="block mb-0 text-sm">Job title</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" />
                    </div>

                    <div className="mb-4">
                        <div className='flex items-center mb-1'>
                            <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                            <label className="block mb-0">Select Customer</label>
                        </div>
                        <SelectBox
                            options={['Unassigned']}
                            selected={selectCustomer}
                            onChange={setSelectCustomer}
                            className='border border-gray-300'
                            searchplaceholder={['Search Customer']}
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input className="w-4 h-4" type='checkbox' />
                        <p className='text-sm ml-3'>Main Contact</p>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input className="w-4 h-4" type='checkbox' />
                        <p className='text-sm ml-3'>Disable automatic ticket creation on emails from the contact</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <Link href='/dashboard/ticket/add' className='bg-gray-200 border border-gray-300 px-4 py-2 rounded text-center'>
                            Cancle
                        </Link>
                        <Link href='/dashboard/ticket/add' className='bg-red-600 px-4 py-2 rounded text-center text-white'>
                            Add
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default addContact