import React from 'react'
import Link from 'next/link';

const Accounting = () => {
    return (
        <>
            <div className="bg-white min-h-screen">
                <div className="p-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Accounting</h1>
                    <nav className="text-xs text-gray-500">
                        <Link href='/dashboard/new' className="mr-2">Home</Link>
                        <span className="mr-2">/</span>
                        <Link href='/dashboard/billing' className="mr-2">Billing</Link>
                        <span className="mr-2">/</span>
                        <span>Accounting</span>
                    </nav>
                </div>

                <hr className='text-gray-300' />

                <div className='p-4'>
                    <p className='mb-4'>Get Atera synced with your accounting software for seriously simple billing</p>
                    <div className="grid grid-cols-4 gap-4">
                        <div className='flex justify-center items-center gap-4 flex-col h-64 border border-gray-300 rounded'>
                            <img src='https://app.atera.com/app/views/accounting/src/quickboos-logo.svg' className='w-48' />
                            <span>Online</span>
                            <button
                                type="button"
                                className="px-12 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 text-sm font-medium"
                            >
                                Connect
                            </button>
                        </div>
                        <div className='flex justify-center items-center gap-4 flex-col h-64 border border-gray-300 rounded'>
                            <img src='https://app.atera.com/app/views/accounting/src/logo_blue.png' className='w-24' />
                            <button
                                type="button"
                                className="px-12 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 text-sm font-medium"
                            >
                                Connect
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Accounting