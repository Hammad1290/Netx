'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCaretSquareDown, faFileText, faLock, faSearch, faSuitcase, faTextHeight } from '@fortawesome/free-solid-svg-icons'
import Modal from '@/app/components/Modal'
import FilterSelectBox from '@/app/components/Filter/FilterSelectBox'

const AssetsCreate = () => {

    const assetfields = [
        { fieldtitle: 'Asset name', fieldtype: 'Text', icon: faTextHeight },
        { fieldtitle: 'Contact', fieldtype: 'Dropdown', icon: faCaretSquareDown },
        { fieldtitle: 'Customer', fieldtype: 'Dropdown', icon: faTextHeight },
        { fieldtitle: 'Description', fieldtype: 'Multi-line text', icon: faFileText },
        { fieldtitle: 'Folder', fieldtype: 'Dropdown', icon: faTextHeight },
        { fieldtitle: 'Purchase date', fieldtype: 'Date', icon: faSuitcase },
        { fieldtitle: 'Status', fieldtype: 'Dropdown', icon: faTextHeight },
        { fieldtitle: 'Warranty expiration', fieldtype: 'Date', icon: faTextHeight },
    ]


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [fieldType, setFieldType] = useState("select field type");

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-4'>
                        <Link href='/dashboard/admin/custom-asset-types/list'><FontAwesomeIcon icon={faArrowLeft} className='w-4 text-gray-500' /></Link>
                        <input type="text" placeholder="Enter asset type name here (e.g., Keyboard, Screen)" className="outline-none border border-gray-300 rounded w-150 px-2 py-1" />
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='bg-gray-200 border border-gray-300 px-4 py-1 rounded-full text-center cursor-pointer text-xs' >
                            Cancle
                        </button>
                        <button className='bg-red-600 px-4 py-1 rounded-full text-center text-white cursor-pointer text-xs'>
                            Create
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-3 gap-4 w-[60%]'>
                        <div className='bg-white rounded-md border border-gray-300 col-span-2 p-4'>
                            <h1 className='font-semibold text-sm mb-2'>Asset type template</h1>
                            <p className='text-gray-600 mb-4'>Include system fields and any custom fields. <Link href='#' className='text-blue-500'> Learn more</Link></p>

                            {
                                assetfields.map(
                                    (val, index) => {
                                        return (
                                            <div key={index} className='flex items-center justify-between border border-gray-300 py-2 px-4 rounded my-3'>
                                                <div className='flex items-center'>
                                                    <FontAwesomeIcon icon={val.icon} className='w-4 text-gray-500' />
                                                    <div className='text-gray-500 flex flex-col space-y-0 ml-4'>
                                                        <p className='font-semibold mb-0'>{val.fieldtitle}</p>
                                                        <span className='text-xs'>{val.fieldtype}</span>
                                                    </div>
                                                </div>
                                                <FontAwesomeIcon icon={faLock} className='w-3 text-gray-500' />
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className='bg-white rounded-md border border-gray-300 p-4 h-max'>
                            <h1 className='font-semibold text-sm mb-2'>Available asset fields</h1>
                            <p className='text-gray-600 mb-4'>Drag fields to build your template</p>
                            <div className="flex items-center bg-white px-3 py-1 border border-gray-300 rounded w-full">
                                <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                                <input type="text" placeholder="Search" className="ml-2 outline-none" />
                            </div>
                            <hr className='text-gray-300 my-4' />
                            <div className='flex items-center justify-center flex-col mb-4 gap-3 py-8'>
                                <p className='text-gray-600'>No available asset fields</p>
                                <button className='border rounded-full px-4 py-1 cursor-pointer text-xs' onClick={() => setIsModalOpen(true)} >New field</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create asset field">
                    <div className='w-full mb-4 '>
                        <label className="block mb-0 text-sm mb-1">Field title *</label>
                        <input type='text' className='outline-none w-full border border-gray-300 text-sm p-2 rounded' placeholder='Enter field title' />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-0 text-sm mb-1">Field title *</label>
                        <FilterSelectBox
                            options={['Text', 'Multi-line text', 'Dropdown', 'Number', 'Date', 'Checkbox']}
                            selected={fieldType}
                            onChange={setFieldType}
                        />
                    </div>
                    <div className="flex items-center mb-1 gap-2">
                        <input type='checkbox' id='required' />
                        <label htmlFor='required' className='text-sm'>Required</label>
                    </div>
                    <div className='flex items-center justify-end gap-4'>
                        <button className='bg-gray-200 border border-gray-300 px-4 py-2 rounded-full text-center cursor-pointer text-xs' onClick={() => setIsModalOpen(false)} >
                            Cancle
                        </button>
                        <button className='bg-red-600 px-4 py-2 rounded-full text-center text-white cursor-pointer text-xs'>
                            Create
                        </button>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default AssetsCreate