'use client';
import { useState } from 'react';
import FilterSelectBox from '@/app/components/Filter/FilterSelectBox';
import SelectBox from '@/app/components/DashboardComponents/SelectBox';
import Link from 'next/link';

const InvoiceBatch = () => {

    const [customers, setCustomers] = useState('All Customers');
    const [contractType, setContractType] = useState('All');
    const [taxableContracts, setTaxableContracts] = useState('All');


    const handleReset = () => {
        setCustomers('All Customers');
        setContractType('All');
        setTaxableContracts('All');
    };

    return (
        <>
            <div className="bg-white min-h-screen">
                <div className="p-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Create Invoice Batch</h1>
                    <nav className="text-xs text-gray-500">
                        <Link href='/dashboard/new' className="mr-2">Home</Link>
                        <span className="mr-2">/</span>
                        <Link href='/dashboard/billing' className="mr-2">Billing</Link>
                        <span className="mr-2">/</span>
                        <span>Create Invoice Batch</span>
                    </nav>
                </div>

                <hr className='text-gray-300' />

                <div className="mx-auto p-4">
                    <div className='flex gap-4'>
                        <div className="w-3/4">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="text-gray-500 border border-gray-300 h-[40px]">
                                        <th className='flex justify-center items-center p-3'><input
                                            type="checkbox"
                                            className="w-4 h-4 " />
                                        </th>
                                        <th>Customer Name</th>
                                        <th>Contract Name</th>
                                        <th>Contract Type</th>
                                        <th>Total Balance</th>
                                        <th>Selected Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
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

                        <div className="w-1/4">
                            <div className='bg-gray-50 rounded p-4 border border-gray-300'>
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Batch Details</h2>
                                <hr className='my-4' />
                                <div className="text-sm text-gray-600">
                                    <div className="flex justify-between py-2 border-b border-gray-300">
                                        <span>Bills To Create</span>
                                        <span>0</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-300">
                                        <span>Unbilled Tickets</span>
                                        <span>0</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-300">
                                        <span>Hours Worked</span>
                                        <span>0.00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-300">
                                        <span>Billable Amount</span>
                                        <span>Rs 0.00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-300">
                                        <span>Tax</span>
                                        <span>Rs 0.00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-300">
                                        <span>Total</span>
                                        <span className="font-semibold">Rs 0.00</span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="batchName" className="block text-sm font-medium text-gray-700 mb-1">Save As</label>
                                    <div className="flex border border-gray-300">
                                        <input
                                            type="text"
                                            id="batchName"
                                            className="ml-2 block w-full text-sm outline-none"
                                            placeholder="Enter batch name"
                                        />
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 text-sm font-medium"
                                        >
                                            Run
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-gray-50 rounded p-4 border border-gray-300 mt-4'>
                                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                                <hr className='my-4' />
                                <div className="w-full">

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Contract Type
                                        </label>
                                        <FilterSelectBox
                                            options={['']}
                                            selected={contractType}
                                            onChange={setContractType}
                                        />
                                    </div>

                                    <hr className='text-gray-300 my-4' />

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Taxable Contracts
                                        </label>
                                        <FilterSelectBox
                                            options={['Yes', 'No']}
                                            selected={taxableContracts}
                                            onChange={setTaxableContracts}
                                        />
                                    </div>

                                    <hr className='text-gray-300 my-4' />

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Customers
                                        </label>
                                        <SelectBox
                                            options={['Unassigned']}
                                            selected={customers}
                                            onChange={setCustomers}
                                            searchplaceholder={['Search Customer']}
                                            className='border border-gray-300'
                                        />
                                    </div>

                                    <hr className='text-gray-300 my-4' />

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                                            Periods
                                        </label>
                                        <div className="flex items-center gap-1">
                                            <input
                                                id='monitored'
                                                type='checkbox'
                                                className="w-4 h-4"
                                            />
                                            <label htmlFor='monitored' className="block text-sm font-medium text-gray-700">
                                                Do not display contracts in mid Period
                                            </label>
                                        </div>
                                    </div>

                                    <hr className='text-gray-300 my-4' />

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                                            Balance
                                        </label>
                                        <div className="flex items-center gap-1">
                                            <input
                                                id='favorite'
                                                type='checkbox'
                                                className="w-4 h-4"
                                            />
                                            <label htmlFor='favorite' className="block text-sm font-medium text-gray-700">
                                                Do not display records with a zero balance
                                            </label>
                                        </div>
                                    </div>

                                    <hr className='text-gray-300 my-4' />

                                    <div className="flex items-center">
                                        <div className='flex items-center gap-2 w-full' >
                                            <button
                                                type="button"
                                                className="w-full py-2 bg-red-600 text-white hover:bg-red-700 text-sm font-medium"
                                            >
                                                Go
                                            </button>
                                            <button
                                                type="button"
                                                className="w-full py-2 border border-gray-300 text-sm font-medium"
                                                onClick={handleReset}
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default InvoiceBatch