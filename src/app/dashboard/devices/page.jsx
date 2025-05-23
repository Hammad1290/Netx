'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircle, faDownload } from '@fortawesome/free-solid-svg-icons'
import SelectBox from '@/app/components/DashboardComponents/SelectBox'
import FilterSelectBox from '@/app/components/Filter/FilterSelectBox'
import SelectBoxLinks from '@/app/components/DashboardComponents/SelectBoxLinks'
import Link from 'next/link';

import Modal from '@/app/components/Modal'
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons'
import DevicesComponent from './DevicesComponent'

const Devices = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // modal content
    const [step, setStep] = useState(1);
    const [sortOrder, setSortOrder] = useState('windows');
    const [customers, setCustomers] = useState('All Customers');
    const [folder, setFolder] = useState('All');

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handlePrevious = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const [selected, setSelected] = useState('');

    const options = [
        { label: 'Agent installer', isModal: true },
        { label: 'SNMP', value: '/dashboard/devices/add/snmp' },
        { label: 'TCP', value: '/dashboard/devices/add/tcp' },
        { label: 'HTTP', value: '/dashboard/devices/add/http' },
        { label: 'Generic', value: '/dashboard/devices/add/generic' },
    ];

    const [ShowSelectBoxLinks, setshowSelectBoxLinks] = useState(false);

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center justify-between mb-2'>
                    <h1 className="text-lg font-semibold">Devices</h1>
                    <div className='flex items-center justify-between gap-4'>
                        <SelectBoxLinks
                            options={options}
                            selected={selected}
                            setSelected={setSelected}
                            buttonName='New Devices'
                            className='bg-red-600 text-white'
                            iconColor='text-white-500'
                            onModalTrigger={() => setIsModalOpen(true)}
                        />
                        <FontAwesomeIcon icon={faDownload} className='w-4 text-black-300 cursor-pointer hover:text-blue-500 ' />
                    </div>
                </div>

                <div className='bg-white rounded-md border border-gray-300'>

                    <DevicesComponent
                        ShowSelectBoxLinks={!ShowSelectBoxLinks}
                    />

                </div>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Install the Atera Agent">
                    <>
                        <div className="flex bg-white">
                            <div className="w-1/4 border-r border-gray-300 p-6">
                                <ol className="space-y-4">
                                    <li className={`text-sm ${step >= 1 ? "text-sky-300" : "text-gray-500"}`}>
                                        <FontAwesomeIcon icon={step >= 1 ? faCircleCheck : faCircle} className={`w-3 ${step >= 1 ? "text-sky-300" : "text-gray-300"} mr-3`} />
                                        Select OS
                                    </li>
                                    <li className={`text-sm ${step >= 2 ? "text-sky-300" : "text-gray-500"}`}>
                                        <FontAwesomeIcon icon={step >= 2 ? faCircleCheck : faCircle} className={`w-3 ${step >= 2 ? "text-sky-300" : "text-gray-300"} mr-3`} />
                                        Assign agent
                                    </li>
                                    <li className={`text-sm ${step >= 3 ? "text-sky-300" : "text-gray-500"}`}>
                                        <FontAwesomeIcon icon={step >= 3 ? faCircleCheck : faCircle} className={`w-3 ${step >= 3 ? "text-sky-300" : "text-gray-300"} mr-3`} />
                                        Install agent
                                    </li>
                                </ol>
                            </div>
                            <div className="w-3/4 px-10 py-5">

                                {
                                    step === 1
                                        ?
                                        <div>
                                            <div className="flex items-center space-x-4 mb-8">
                                                <div className="flex items-center">
                                                    <input
                                                        id="windows"
                                                        type="radio"
                                                        value="windows"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        checked={sortOrder === 'windows'}
                                                        onChange={handleSortOrderChange}
                                                    />
                                                    <label htmlFor="windows" className="ml-2 text-sm text-gray-600">
                                                        <FontAwesomeIcon icon={faWindows} className='w-3 mr-2 text-gray-600' />
                                                        Windows (.msi)
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="mac"
                                                        type="radio"
                                                        value="mac"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        checked={sortOrder === 'mac'}
                                                        onChange={handleSortOrderChange}
                                                    />
                                                    <label htmlFor="mac" className="ml-2 text-sm text-gray-600">
                                                        <FontAwesomeIcon icon={faApple} className='w-3 mr-2 text-gray-600' />
                                                        Mac (.pkg)
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="linux"
                                                        type="radio"
                                                        value="linux"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        checked={sortOrder === 'linux'}
                                                        onChange={handleSortOrderChange}
                                                    />
                                                    <label htmlFor="linux" className="ml-2 text-sm text-gray-600">
                                                        <FontAwesomeIcon icon={faLinux} className='w-3 mr-2 text-gray-600' />
                                                        Linux (.bash)
                                                    </label>
                                                </div>
                                            </div>
                                            <hr className='text-gray-300' />
                                            <p className='mt-4'>Download and install the agent on all devices you wish to monitor
                                                <Link href='#' className='text-blue-500'> Learn More</Link>
                                            </p>
                                        </div>
                                        :
                                        step === 2
                                            ?
                                            <div>
                                                <p className='font-semibold mb-6'>Assign the agent to a customer, or leave unassigned</p>
                                                <div className="mb-3">
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Customers
                                                    </label>
                                                    <SelectBox
                                                        options={['Unassigned']}
                                                        selected={customers}
                                                        onChange={setCustomers}
                                                        className='border border-gray-300'
                                                        searchplaceholder={['Search Customer']}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Folders
                                                    </label>
                                                    <FilterSelectBox
                                                        options={['']}
                                                        selected={folder}
                                                        onChange={setFolder}
                                                    />
                                                </div>
                                            </div>
                                            :
                                            step === 3
                                                ?
                                                <div>
                                                    <p className='font-semibold mb-4'>Install the agent</p>
                                                    <p className='font-semibold text-gray-400 mb-4'>Select installation method</p>
                                                </div>
                                                :
                                                null


                                }

                                <div className="mt-8 flex justify-between">
                                    {step > 1 ? (
                                        <button
                                            onClick={handlePrevious}
                                            className="bg-white border px-6 py-2 rounded hover:bg-gray-100"
                                        >
                                            Previous
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}
                                    {step < 3 ? (
                                        <button
                                            onClick={handleNext}
                                            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                                            Finish
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                </Modal>

            </div>

        </>
    )
}

export default Devices