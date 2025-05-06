'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import SelectPlan from './SelectPlan';
import Addons from './Addons';
import Checkout from './Checkout';

const Subscription = () => {

    const [activeTab, setActiveTab] = useState("Selectplan");

    return (
        <>
            <div className="bg-white pt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-center mb-4 gap-2">

                        <button
                            className={`text-sm font-medium cursor-pointer text-gray-500 ${activeTab === "Selectplan"
                                ? "text-gray-800"
                                : "hover:text-gray-400"
                                }`}
                            onClick={() => setActiveTab("Selectplan")}
                        >
                            Select a plan
                        </button>

                        <FontAwesomeIcon icon={faArrowRight} className='w-2 text-gray-500' />

                        <button
                            className={`text-sm font-medium cursor-pointer text-gray-500 ${activeTab === "Addons"
                                ? "text-gray-800 "
                                : "hover:text-gray-400"
                                }`}
                            onClick={() => setActiveTab("Addons")}
                        >
                            Add-ons
                        </button>

                        <FontAwesomeIcon icon={faArrowRight} className='w-2 text-gray-500' />

                        <button
                            className={`text-sm font-medium text-gray-500 ${activeTab === "checkout"
                                ? "text-gray-800"
                                : "text-gray-500"
                                }`}
                        // onClick={() => setActiveTab("checkout")}
                        >
                            Checkout
                        </button>

                    </div>

                    {activeTab === "Selectplan" &&
                        <SelectPlan />
                    }

                    {activeTab === "Addons" &&
                        <Addons
                            clickback={() => setActiveTab("Selectplan")}
                            clicknext={() => setActiveTab("checkout")}
                        />
                    }

                    {activeTab === "checkout" &&
                        <Checkout
                            clickback={() => setActiveTab("Addons")}
                        />
                    }

                </div>
            </div>
        </>
    )
}

export default Subscription