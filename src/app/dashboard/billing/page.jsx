'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Modal from '@/app/components/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Billing = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [rows, setRows] = useState([{ id: 1 }, { id: 2 }]);

    const addRow = () => {
        setRows([...rows, { id: Date.now() }]);
    };

    const removeRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    return (
        <>
            <div className='bg-white min-h-screen'>
                <div className="p-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Billing</h1>
                    <nav className="text-xs text-gray-500">
                        <Link href='/dashboard/new' className="mr-2">Home</Link>
                        <span className="mr-2">/</span>
                        <span>Billing</span>
                    </nav>
                </div>
                <hr className='text-gray-300' />
                <div className='p-4'>
                    <div className='flex items-center justify-between mb-4'>
                        <p>Create invoices and collect payment from customers.<Link href='#' className='text-blue-500'> Learn more</Link></p>
                        <Link href='/dashboard/billing/accounting' className='border px-4 py-1 rounded-full text-center hover:bg-gray-100'>
                            Accounting Integration
                        </Link>
                    </div>
                    <div className='flex gap-10'>
                        <div className='border border-gray-100 w-[40%] rounded border-t-4 border-t-gray-300'>
                            <div className='flex items-center justify-between gap-6 my-4 px-2 '>
                                <p>Invoice Batches</p>
                                <Link href='/dashboard/billing/create' className='border px-4 py-1 rounded-full text-center text-white bg-red-500'>
                                    New invoice batch
                                </Link>
                            </div>
                            <p className='px-2 mb-4'>An Invoice Batch is an itemized listing of services rendered and payment owed by customers within a specified billing period. Once a batch is created, invoices can be generated</p>
                            <div className='p-2 bg-gray-200 border border-gray-300 rounded'>No records to display</div>
                        </div>
                        <div className='border border-gray-100 w-[60%] h-max rounded border-t-4 border-t-gray-300'>
                            <div className='flex items-center justify-between gap-6 my-4 px-2 '>
                                <p>Invoices</p>
                                <button className='border px-4 py-1 rounded-full text-center text-white bg-red-500 cursor-pointer' onClick={() => setIsModalOpen(true)}>
                                    New invoice
                                </button>
                            </div>
                            <p className='px-2 mb-4'>An invoice details all products and services provided to your customer, and is based on the associated contract</p>
                            <div className='p-2 bg-gray-200 border border-gray-300 rounded'>No records to display</div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New invoice">
                    <>
                        <div className="text-sm">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <p className="font-semibold">My Company</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Date: Apr 18, 2025 4:30:57 AM</p>
                                </div>
                            </div>

                            <hr className='text-gray-300' />

                            <div className="flex gap-12 py-4">
                                <div >
                                    <p className='text-lg font-semibold text-gray-400'>From:</p>
                                    <p>My Company</p>
                                    <p>n/a</p>
                                    <p>Phone: n/a</p>
                                    <p>Email: <a href="mailto:artisanalgifttailor@gmail.com" className="text-blue-600">artisanalgifttailor@gmail.com</a></p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-lg font-semibold text-gray-400'>To:</p>
                                    <div className='grid grid-cols-3 gap-2'>
                                        <label>Customer:</label>
                                        <input type="text" placeholder="Select customer" className="border border-gray-300 p-2 col-span-2 outline-none" />
                                    </div>
                                    <div className='grid grid-cols-3 gap-2'>
                                        <label>Address:</label>
                                        <input type="text" placeholder="Address" className="border border-gray-300 p-2 col-span-2 outline-none" />
                                    </div>
                                    <div className='grid grid-cols-3 gap-2'>
                                        <label>Phone:</label>
                                        <input type="text" placeholder="Phone" className="border border-gray-300 p-2 col-span-2 outline-none" />
                                    </div>
                                    <div className='grid grid-cols-3 gap-2'>
                                        <label>Email:</label>
                                        <input type="text" placeholder="Email" className="border border-gray-300 p-2 col-span-2 outline-none" />
                                    </div>

                                </div>
                                <div>
                                    <p className='text-lg font-semibold text-gray-400'>Invoice #</p>
                                </div>
                            </div>

                            <table className="w-full text-sm border-y border-gray-300">
                                <thead>
                                    <tr className="text-left">
                                        <th className="p-2">#</th>
                                        <th className="p-2">Category</th>
                                        <th className="p-2">Product/Rate name</th>
                                        <th className="p-2">Qty</th>
                                        <th className="p-2">Rate</th>
                                        <th className="p-2">Subtotal</th>
                                        <th className="p-2">Tax name</th>
                                        <th className="p-2">Tax rate</th>
                                        <th className="p-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={row.id} className="bg-gray-50 border-b border-gray-100">
                                            <td className="p-2">{index + 1}</td>
                                            <td className="p-2"><input type="text" placeholder="Category" className="border border-gray-300 outline-none p-1 w-full" /></td>
                                            <td className="p-2"><input type="text" placeholder="Product/service" className="border border-gray-300 outline-none p-1 w-full" /></td>
                                            <td className="p-2"><input type="number" placeholder="Qty" className="border border-gray-300 outline-none p-1 w-full" /></td>
                                            <td className="p-2"><input type="number" placeholder="Rate" className="border border-gray-300 outline-none p-1 w-full" /></td>
                                            <td className="p-2">-</td>
                                            <td className="p-2"><input type="text" placeholder="Tax" className="border border-gray-300 outline-none p-1 w-full" /></td>
                                            <td className="p-2"><input type="number" placeholder="Rate" className="border border-gray-300 outline-none p-1 w-full" /></td>
                                            <td className="p-2">
                                                <button onClick={() => removeRow(row.id)} className="text-gray-400">
                                                    <FontAwesomeIcon icon={faTrash} className='w-10 cursor-pointer hover:text-gray-500' />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <button onClick={addRow} className="text-blue-600 mt-2 cursor-pointer">
                                + Add row
                            </button>

                            <div className="flex justify-end mt-6">
                                <div className="w-full max-w-xs space-y-2">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Subtotal:</span>
                                        <span>-</span>
                                    </div>
                                    <hr className='text-gray-300' />
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Tax:</span>
                                        <span>-</span>
                                    </div>
                                    <hr className='text-gray-300' />
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Total:</span>
                                        <span>-</span>
                                    </div>
                                    <hr className='text-gray-300' />
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <button className="border px-4 py-2 rounded-full cursor-pointer" onClick={() => setIsModalOpen(false)} >Cancel</button>

                                <div className="flex gap-2">

                                    <button className="border px-6 py-2 rounded-full">Email invoice</button>
                                    <button className="bg-red-600 text-white px-6 py-2 rounded-full">Save</button>
                                </div>
                            </div>
                        </div>
                    </>
                </Modal>
            </div>
        </>

    )
}

export default Billing