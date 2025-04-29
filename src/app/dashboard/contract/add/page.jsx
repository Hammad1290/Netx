'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import SelectBox from '@/app/components/DashboardComponents/SelectBox'
import FilterSelectBox from '@/app/components/Filter/FilterSelectBox'
import Modal from '@/app/components/Modal'

const addContract = () => {

    const [addRateModal, setAddRateModal] = useState(false);
    const [importContractModal, setImportContractModal] = useState(false);

    const [selectCustomer, setSelectCustomer] = useState('');
    const [contractType, setContractType] = useState('');
    const [billingPeriod, setBillingPeriod] = useState('Monthly');
    const [rate, setRate] = useState('Nothing selected');

    return (
        <>
            <div className='bg-white min-h-screen'>
                <div className="p-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">New Contract</h1>
                    <nav className="text-xs text-gray-500">
                        <Link href='/dashboard/new' className="mr-2">Home</Link>
                        <span className="mr-2">/</span>
                        <span>Contract</span>
                    </nav>
                </div>

                <hr className='text-gray-300' />

                <div className='p-4 w-[60%]'>
                    <p className='mb-4'>Create a new contract for your customer</p>
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
                            <label className="block mb-0 text-sm">Contract Name</label>
                        </div>
                        <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="Contract Name" />
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-4 w-full">
                        <div className='w-full mb-4 '>
                            <div className='flex items-center mb-1'>
                                <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                                <label className="block mb-0 text-sm">Start Date</label>
                            </div>
                            <input type='date' className='outline-none w-full border border-gray-300 text-sm p-2 rounded' />
                        </div>

                        <div className='w-full mb-4 '>
                            <div className='flex items-center mb-1'>
                                <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                                <label className="block mb-0 text-sm">End Date</label>
                            </div>
                            <input type='date' className='outline-none w-full border border-gray-300 text-sm p-2 rounded' />
                        </div>

                        <div>
                            <div className="flex items-center mb-4 gap-4">
                                <div className="flex items-center mb-1 gap-2">
                                    <input type='checkbox' id='active' />
                                    <label htmlFor='active' className='text-sm'>Active</label>
                                </div>
                                <div className="flex items-center mb-1 gap-2">
                                    <input type='checkbox' id='default' />
                                    <label htmlFor='default' className='text-sm'>Default</label>
                                </div>
                            </div>
                            <div className="flex items-center mb-1 gap-2">
                                <input type='checkbox' id='taxable' />
                                <label htmlFor='taxable' className='text-sm'>Taxable</label>
                            </div>
                            <SelectBox
                                options={['Unassigned']}
                                selected={selectCustomer}
                                onChange={setSelectCustomer}
                                className='border border-gray-300'
                                searchplaceholder={['Search Customer']}
                            />
                        </div>
                    </div>

                    <hr className='text-gray-300' />

                    <div className="my-4 grid grid-cols-2 gap-4 w-full">
                        <div>
                            <div className="mb-4">
                                <div className='flex items-center mb-1'>
                                    <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                                    <label className="block mb-0">Contract Type</label>
                                </div>
                                <FilterSelectBox
                                    options={['Retainer/Flat fee', 'Hourly']}
                                    selected={contractType}
                                    onChange={setContractType}
                                />
                            </div>
                            <div className="mb-4">
                                <div className='flex items-center mb-1'>
                                    <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                                    <label className="block mb-0 text-sm">Quantity</label>
                                </div>
                                <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" type='number' placeholder="Quantity" />
                            </div>
                            <div className="mb-4">
                                <div className='flex items-center mb-1'>
                                    <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                                    <label className="block mb-0">Billing Period</label>
                                </div>
                                <FilterSelectBox
                                    options={['End of contract duration', 'Weekly', 'Bi-Monthly', 'Monthly', 'Quarterly', 'Twice a Year', 'Yearly']}
                                    selected={billingPeriod}
                                    onChange={setBillingPeriod}
                                />
                            </div>
                            <div className="mb-4">
                                <div className='flex items-center mb-1'>
                                    <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                                    <label className="block mb-0">Rate</label>
                                </div>
                                <SelectBox
                                    options={['Defualt Rate - Rs100.00']}
                                    selected={rate}
                                    onChange={setRate}
                                    className='border border-gray-300'
                                />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='border border-gray-100 rounded border-l-4 border-l-gray-500 p-4'>
                                <div className='flex items-center justify-between gap-6 my-4 '>
                                    <p className='font-semibold'>Contract Type: Retainer/Flat Fee</p>
                                </div>
                                <p className='mb-4'>This is the most popular contract type. <br />
                                    It’s used to charge customers a flat periodic rate that includes a predefined set of support services.</p>
                                <hr className='text-gray-100' />
                                <div className='flex items-center gap-4 py-4'>
                                    <button
                                        className='border border-gray-400 px-2 py-1 rounded text-sm cursor-pointer'
                                        onClick={() => setAddRateModal(true)}
                                    >
                                        Add Rate
                                    </button>
                                    <button
                                        className='border border-gray-400 px-2 py-1 rounded text-sm cursor-pointer'
                                        onClick={() => setImportContractModal(true)}
                                    >
                                        Import Contract
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='text-gray-300' />

                    <div className='w-full my-4 '>
                        <label className="block mb-0 text-sm mb-1">Note</label>
                        <textarea type='date' className='outline-none w-full border border-gray-300 text-sm p-2 rounded' />
                    </div>


                    <div className='flex items-center gap-4'>
                        <Link href='/dashboard/customers/new' className='bg-gray-200 border border-gray-300 px-4 py-2 rounded text-center'>
                            Cancle
                        </Link>
                        <Link href='/dashboard/contract/add' className='bg-red-600 px-4 py-2 rounded text-center text-white'>
                            Save
                        </Link>
                    </div>

                </div>

                <Modal isOpen={addRateModal} onClose={() => setAddRateModal(false)} title="Add Rate">
                    <div >
                        <hr className='text-gray-300' />
                        <div className="my-4">
                            <div className='flex items-center mb-1'>
                                <FontAwesomeIcon icon={faStar} className='w-2 text-red-500 mr-1' />
                                <label className="block mb-0 text-sm">Description</label>
                            </div>
                            <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="e.g. hourly rate, off hours etc" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm">Product SKU # (optional)</label>
                            <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" placeholder="Enter SKU Number" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm">Amount</label>
                            <div className='flex items-center border border-gray-300 rounded'>
                                <div className='p-2 bg-gray-200 text-sm border-r border-gray-300'>
                                    Rs
                                </div>
                                <input className="w-full outline-none p-2 text-sm" placeholder="0" />
                            </div>
                        </div>
                        <div className="flex items-center mb-4 gap-2">
                            <input type='checkbox' id='chosenRate' />
                            <label htmlFor='chosenRate' className='text-sm'>Select as chosen Rate</label>
                        </div>
                        <hr className='text-gray-300' />
                        <div className='flex items-center justify-end mt-4 gap-4'>
                            <button onClick={() => setIsModalOpen(false)} className='bg-gray-200 border border-gray-300 px-4 py-2 rounded text-center cursor-pointer'>
                                Cancle
                            </button>
                            <button onClick={() => setIsModalOpen(false)} className='bg-red-600 px-4 py-2 rounded text-center text-white cursor-pointer'>
                                Add
                            </button>
                        </div>
                    </div>
                </Modal>

                <Modal isOpen={importContractModal} onClose={() => setImportContractModal(false)} title="Import Contract">
                    <div >
                        <hr className='text-gray-300' />
                        <p className='my-4'>Save time by importing the details from an existing contract</p>
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
                                <label className="block mb-0">Contract Name</label>
                            </div>
                            <input className="w-full outline-none p-2 border border-gray-300 rounded text-sm" />
                        </div>
                        <hr className='text-gray-300' />
                        <div className='flex items-center justify-end mt-4 gap-4'>
                            <button onClick={() => setIsModalOpen(false)} className='bg-gray-200 border border-gray-300 px-4 py-2 rounded text-center cursor-pointer'>
                                Cancle
                            </button>
                            <button onClick={() => setIsModalOpen(false)} className='bg-red-600 px-4 py-2 rounded text-center text-white cursor-pointer'>
                                Import
                            </button>
                        </div>
                    </div>
                </Modal>

            </div>
        </>
    )
}

export default addContract