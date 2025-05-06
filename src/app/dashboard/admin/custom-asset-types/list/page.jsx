'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import Modal from '@/app/components/Modal'
import FilterSelectBox from '@/app/components/Filter/FilterSelectBox'

const AssetsList = () => {

    const TabsButton = [
        { tabTitle: 'Asset types', activeTab: 'assettypes' },
        { tabTitle: 'Asset fields', activeTab: 'assetfields' },
    ]

    const [activeTab, setActiveTab] = useState("assettypes");

    const assetfields = [
        { fieldtitle: 'Asset name', fieldtype: 'Text' },
        { fieldtitle: 'Contact', fieldtype: 'Dropdown' },
        { fieldtitle: 'Customer', fieldtype: 'Dropdown' },
        { fieldtitle: 'Description', fieldtype: 'Multi-line text' },
        { fieldtitle: 'Folder', fieldtype: 'Dropdown' },
        { fieldtitle: 'Purchase date', fieldtype: 'Date' },
        { fieldtitle: 'Status', fieldtype: 'Dropdown' },
        { fieldtitle: 'Warranty expiration', fieldtype: 'Date' },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [fieldType, setFieldType] = useState("select field type");

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='mb-4'>
                    <h1 className="text-lg font-semibold mb-2">Custom Assets</h1>

                </div>

                <div className='flex items-center justify-center'>
                    <div className='bg-white rounded-md border border-gray-300 w-[60%]'>
                        <div className="border-b border-gray-200">
                            <div className="flex border-b border-gray-200">
                                {
                                    TabsButton.map(
                                        (val, index) => {
                                            return (

                                                <button
                                                    key={index}
                                                    className={`px-6 py-4 cursor-pointer ${activeTab === val.activeTab
                                                        ? "text-black border-b-3 border-pink-500"
                                                        : "text-gray-500"
                                                        }`}
                                                    onClick={() => setActiveTab(val.activeTab)}
                                                >
                                                    {val.tabTitle}
                                                </button>

                                            )
                                        }
                                    )
                                }
                            </div>
                            <div className="">
                                {activeTab === "assettypes" &&
                                    <>
                                        <div className='px-6 py-4'>
                                            <p className='text-gray-600'>Create and store additional information about your assets. <Link href='#' className='text-blue-500'> Learn more</Link></p>
                                            <span className='text-xs text-gray-500'>You can add up to 0 asset types</span>
                                        </div>
                                        <div>
                                            <table className="w-full text-left text-sm">
                                                <thead>
                                                    <tr className="text-gray-500 border-y border-gray-300 h-[40px] ml-6">
                                                        <th className='pl-6'>Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="h-[50px] hover:bg-gray-50">
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='flex items-center justify-center w-full mb-8 mt-12'>
                                            <button className='bg-pink-500 text-white rounded-full px-4 py-1'>New Asset type</button>
                                        </div>

                                    </>
                                }
                                {activeTab === "assetfields" &&

                                    <>
                                        <div className='px-6 py-4 '>
                                            <div className='flex items-center justify-between mb-4'>
                                                <p className='text-gray-600'>Add fields to get more details about assets. <Link href='#' className='text-blue-500'> Learn more</Link></p>
                                                <button className='bg-pink-500 text-white rounded-full px-4 py-1 cursor-pointer text-xs' onClick={() => setIsModalOpen(true)} >New field</button>
                                            </div>
                                            <div className="flex items-center bg-white px-3 py-1 border border-gray-300 rounded w-94">
                                                <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                                                <input type="text" placeholder="Search" className="ml-2 outline-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <table className="w-full text-left text-sm">
                                                <thead>
                                                    <tr className="text-gray-500 border-y border-gray-300 h-[40px] ml-6">
                                                        <th></th>
                                                        <th>Field title</th>
                                                        <th>Field type</th>
                                                        <th className='text-center'>Required</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        assetfields.map(
                                                            (val, index) => {
                                                                return (
                                                                    <tr key={index} className="border-b border-gray-300 h-[40px] hover:bg-gray-50">
                                                                        <td className='px-4 w-10'><FontAwesomeIcon icon={faLock} className='w-3 text-gray-500' /></td>
                                                                        <td>{val.fieldtitle}</td>
                                                                        <td className='w-30'>{val.fieldtype}</td>
                                                                        <td className='text-center w-30'><input type='checkbox' /></td>
                                                                        <td className='w-30'></td>
                                                                    </tr>
                                                                )
                                                            }
                                                        )
                                                    }

                                                </tbody>
                                            </table>
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
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AssetsList