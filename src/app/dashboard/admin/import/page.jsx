'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import SelectBox from '@/app/components/DashboardComponents/SelectBox'

const ImportData = () => {

    const TabsButton = [
        { tabTitle: 'Customers', activeTab: 'customers' },
        { tabTitle: 'Contacts', activeTab: 'contacts' },
        { tabTitle: 'Assets', activeTab: 'assets' },
    ]

    const [activeTab, setActiveTab] = useState("customers");

    const [assettype, setAssettype] = useState("Please select");

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='mb-4'>
                    <h1 className="text-lg font-semibold mb-2">Import data</h1>
                    <p>Import customers, contacts, and assets in bulk. <Link href='#' className='text-blue-500'> Learn more</Link></p>
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
                                {activeTab === "customers" &&
                                    <>
                                        <div className='p-6'>
                                            <div className='text-gray-500 my-4'>
                                                <h1 className='text-sm font-semibold'>1. Download CSV template</h1>
                                                <p>Fill in the CSV template, ensuring data aligns with the column headings, then save your file</p>
                                            </div>
                                            <button className='border rounded-full px-4'>Download Template</button>
                                        </div>
                                        <hr className='text-gray-300' />
                                        <div className='p-6'>
                                            <div className='text-gray-500 my-4'>
                                                <h1 className='text-sm font-semibold'>2. Upload</h1>
                                                <p>Upload your completed CSV file</p>
                                            </div>
                                            <div className='border rounded-full px-4 w-max'>
                                                <label htmlFor="image_uploads">Upload file</label>
                                                <input type='file' id='image_uploads' placeholder='Upload file' className='hidden' />
                                            </div>
                                        </div>
                                        <div className='flex justify-end p-6'>
                                            <button className='bg-red-600 text-white rounded-full px-4'>Import</button>
                                        </div>
                                    </>
                                }
                                {activeTab === "contacts" &&

                                    <>
                                        <div className='text-gray-500 p-6'>
                                            <div className=' my-4'>
                                                <h1 className='text-sm font-semibold'>1. Download CSV template</h1>
                                                <p>Fill in the CSV template, ensuring data aligns with the column headings, then save your file</p>
                                            </div>
                                            <button className='border rounded-full px-4 mb-4'>Download Template</button>
                                            <div className='bg-blue-100 rounded p-2'>
                                                <p><b className='font-semibold'>Note: </b>Ensure the corresponding customer exists in Atera before importing contacts.</p>
                                            </div>
                                        </div>
                                        <hr className='text-gray-300' />
                                        <div className='p-6'>
                                            <div className='text-gray-500 my-4'>
                                                <h1 className='text-sm font-semibold'>2. Upload</h1>
                                                <p>Upload your completed CSV file</p>
                                            </div>
                                            <div className='border rounded-full px-4 w-max'>
                                                <label htmlFor="image_uploads">Upload file</label>
                                                <input type='file' id='image_uploads' placeholder='Upload file' className='hidden' />
                                            </div>
                                        </div>
                                        <div className='flex justify-end p-6'>
                                            <button className='bg-red-600 text-white rounded-full px-4'>Import</button>
                                        </div>
                                    </>
                                }
                                {activeTab === "assets" &&

                                    <>
                                        <div className='p-6'>
                                            <div className='text-gray-500 my-4'>
                                                <label className='text-sm font-semibold mb-1'>1. Select asset type</label>
                                                <div className='w-80'>
                                                    <SelectBox
                                                        options={['']}
                                                        selected={assettype}
                                                        onChange={setAssettype}
                                                        className='border border-gray-300'
                                                    />
                                                </div>
                                            </div>
                                            <div className='bg-blue-100 text-gray-500 rounded p-2'>
                                                <p className='font-semibold'>Note: </p>
                                                <ul className='list-outside text-sm'>
                                                    <li>Ensure both the corresponding contact and customer exist in Atera before importing assets.</li>
                                                    <li>Asset types must first be created in Atera before importing assets. <Link href='#' className='text-blue-500'> Add asset type</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr className='text-gray-300' />
                                        <div className='p-6'>
                                            <div className='text-gray-500 my-4'>
                                                <h1 className='text-sm font-semibold'>2. Download CSV template</h1>
                                                <p>Fill in the CSV template, ensuring data aligns with the column headings, then save your file</p>
                                            </div>
                                            <button className='border rounded-full px-4'>Download Template</button>
                                        </div>
                                        <hr className='text-gray-300' />
                                        <div className='p-6'>
                                            <div className='text-gray-500 my-4'>
                                                <h1 className='text-sm font-semibold'>3. Upload</h1>
                                                <p>Upload your completed CSV file</p>
                                            </div>
                                            <div className='border rounded-full px-4 w-max'>
                                                <label htmlFor="image_uploads">Upload file</label>
                                                <input type='file' id='image_uploads' placeholder='Upload file' className='hidden' />
                                            </div>
                                        </div>
                                        <div className='flex justify-end p-6'>
                                            <button className='bg-red-600 text-white rounded-full px-4'>Import</button>
                                        </div>
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

export default ImportData