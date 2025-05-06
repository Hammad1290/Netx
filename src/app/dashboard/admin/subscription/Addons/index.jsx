import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons'

const Addons = ({ clickback, clicknext }) => {
    return (
        <>
            <div className="bg-white py-8">
                <div className="mx-auto w-[60%] px-4 sm:px-6 lg:px-8">
                    <div className='mb-12'>
                        <div className='flex items-center gap-2 cursor-pointer w-max' onClick={clickback} >
                            <FontAwesomeIcon icon={faArrowLeft} className='w-4 text-gray-800' />
                            Back
                        </div>
                        <h1 className='text-center font-bold text-2xl mb-2'>Atera enhanced features</h1>
                        <h1 className='text-center text-gray-500'>Leap beyond the stars with our enhanced features</h1>
                    </div>
                    <div className='border border-gray-300 p-6 rounded-lg flex items-center'>
                        <div className='border-r border-gray-300 w-[60%]'>
                            <div className='flex items-center gap-4'>
                                <input type='checkbox' id='networkdiscovery' />
                                <label htmlFor='networkdiscovery'>Network Discovery</label>
                            </div>
                            <div className='ml-6'>
                                <ul role="list" className="mt-2 space-y-2 text-gray-500 text-xs">
                                    <li className="flex items-center ">
                                        <FontAwesomeIcon icon={faCheck} className='w-2 text-gray-800 mr-3' />
                                        Network monitoring and scanning
                                    </li>
                                    <li className="flex items-center ">
                                        <FontAwesomeIcon icon={faCheck} className='w-2 text-gray-800 mr-3' />
                                        Scan Workgroup & DC networks
                                    </li>
                                    <li className="flex items-center ">
                                        <FontAwesomeIcon icon={faCheck} className='w-2 text-gray-800 mr-3' />
                                        Discover opportunities for proactive support & upgrades
                                    </li>
                                    <li className="flex items-center ">
                                        <FontAwesomeIcon icon={faCheck} className='w-2 text-gray-800 mr-3' />
                                        Detect open ports
                                    </li>
                                    <li className="flex items-center ">
                                        <FontAwesomeIcon icon={faCheck} className='w-2 text-gray-800 mr-3' />
                                        Schedule scans for your networks
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex justify-center items-center flex-col w-[40%]'>
                            <span className="text-2xl font-extrabold text-gray-900"> <sub>$</sub>39</span>
                            <span className="ml-1 text-base font-medium text-gray-500">per user / mo</span>
                        </div>
                    </div>
                    <div className='flex justify-end mt-4'>
                        <button className='rounded-full px-8 bg-pink-500 text-white text-sm cursor-pointer' onClick={clicknext} >Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addons