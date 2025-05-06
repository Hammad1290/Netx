'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import SelectBoxLinks from '@/app/components/DashboardComponents/SelectBoxLinks'

const ContactsTab = ({ }) => {

    const [manageContacts, setManageContacts] = useState('');

    const manageContactsoptions = [
        { label: 'New Contact', value: '/dashboard/contact/add' },
        { label: 'Import contacts (.csv)', value: '/dashboard/admin/import' },
        { label: 'sync with Azure AD', value: '/dashboard/contact/add' },
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
                            options={manageContactsoptions}
                            selected={manageContacts}
                            setSelected={setManageContacts}
                            buttonName='Manage Contacts'
                            className='bg-red-600 text-white'
                            iconColor='text-white-500'
                        />
                    </div>
                </div>
                <hr className='text-gray-300' />
                <div className='flex items-center justify-between p-4'>
                    <div></div>
                    <p className='text-gray-400'>Displaying 1 of 0 devices</p>
                </div>
                <hr className='text-gray-300' />
                <div>
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-300 h-[60px]">
                                <th>
                                    <h1 className='ml-4'>Contact Name</h1>
                                </th>
                                <th>Job Title</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Mobile</th>
                                <th>Associated agent</th>
                                <th>Status</th>
                                <th>Last modified</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300 h-[100px] hover:bg-gray-50">
                                <td className='max-w-40'>
                                    <div className='ml-4 flex items-center gap-2'>
                                        <h1 className='truncate'>John Smith</h1>
                                        <div className='bg-gray-500 rounded flex items-center justify-center mr-4 p-1 w-max' >
                                            <span className='font-semibold text-white text-xs'>Main contact</span>
                                        </div>
                                    </div>
                                </td>
                                <td>Atera Helper Contact</td>
                                <td> <Link href='mailto:john.smith@unassigned.atera.com' className='text-blue-500'>john.smith@unassigned.atera.com</Link></td>
                                <td>
                                    <div className='flex items-center gap-2 group'>
                                        <p>050-0000001</p>
                                        <Link href='tel:050-0000001' className='opacity-0 group-hover:opacity-100'><FontAwesomeIcon icon={faPhone} className='w-2 text-gray-500' /></Link>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className='bg-yellow-100 rounded-full flex items-center justify-center mr-4 py-1' >
                                        <span className='font-semibold text-yellow-500'>active</span>
                                    </div>
                                </td>
                                <td>Mar 12, 2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ContactsTab