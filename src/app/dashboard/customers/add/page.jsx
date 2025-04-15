'use client';
import React, { useState } from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircle } from '@fortawesome/free-solid-svg-icons'

const addCustomer = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        customerName: "",
        contractName: "Default contract",
        contractType: "Retainer/Flat Fee",
        quantity: 1,
        billingPeriod: "Monthly",
        rate: "Default Rate - Rs100.00",
        thresholdProfile: "Default Profile"
    });

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handlePrevious = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div className="p-6 bg-white min-h-screen">
                <div className='flex items-center justify-between mb-4'>
                    <h1 className="text-xl font-semibold ">New Customer</h1>
                    <div className='flex items-center gap-4'>
                        <Link href='/dashboard/customers' className='bg-gray-200 border border-gray-300 px-4 py-2 rounded-full text-center'>
                            Cancle
                        </Link>
                        <Link href='/dashboard/customers/add' className='bg-red-600 px-4 py-2 rounded-full text-center text-white'>
                            Create
                        </Link>
                    </div>
                </div>
                <div className="flex bg-white rounded border border-gray-300">
                    <div className="w-1/4 bg-gray-50 p-6">
                        <ol className="space-y-4">
                            <li className={`text-sm ${step >= 1 ? "text-sky-300" : "text-gray-500"}`}>
                                <FontAwesomeIcon icon={step >= 1 ? faCircleCheck : faCircle} className={`w-3 ${step >= 1 ? "text-sky-300" : "text-gray-300"} mr-3`} />
                                Create new customer
                            </li>
                            <li className={`text-sm ${step >= 2 ? "text-sky-300" : "text-gray-500"}`}>
                                <FontAwesomeIcon icon={step >= 2 ? faCircleCheck : faCircle} className={`w-3 ${step >= 2 ? "text-sky-300" : "text-gray-300"} mr-3`} />
                                Create contract for customer
                            </li>
                            <li className={`text-sm ${step >= 3 ? "text-sky-300" : "text-gray-500"}`}>
                                <FontAwesomeIcon icon={step >= 3 ? faCircleCheck : faCircle} className={`w-3 ${step >= 3 ? "text-sky-300" : "text-gray-300"} mr-3`} />
                                Select threshold profile
                            </li>
                            <li className={`text-sm ${step >= 4 ? "text-sky-300" : "text-gray-500"}`}>
                                <FontAwesomeIcon icon={step >= 4 ? faCircleCheck : faCircle} className={`w-3 ${step >= 4 ? "text-sky-300" : "text-gray-300"} mr-3`} />
                                Add contact
                            </li>
                        </ol>
                    </div>
                    <div className="w-3/4 px-10 py-5">

                        {
                            step === 1
                                ?
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">Create New Customer</h2>
                                    <p className="mb-4 text-gray-600">Create a customer for quick Atera monitoring</p>
                                    <label className="block mb-1">Customer Name *</label>
                                    <input
                                        type="text"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                        className="border border-gray-300 p-2 w-full mb-4 outline-none"
                                        placeholder="Customer Name..."
                                    />
                                </div>
                                :
                                step === 2
                                    ?
                                    <div>
                                        <h2 className="text-xl font-semibold mb-4">Create Contract for Customer (Optional)</h2>
                                        <label className="block mb-2">Contract Name *</label>
                                        <input
                                            type="text"
                                            name="contractName"
                                            value={formData.contractName}
                                            onChange={handleChange}
                                            className="border p-2 w-full mb-4"
                                        />
                                        <label className="block mb-2">Contract Type</label>
                                        <select
                                            name="contractType"
                                            value={formData.contractType}
                                            onChange={handleChange}
                                            className="border p-2 w-full mb-4"
                                        >
                                            <option>Retainer/Flat Fee</option>
                                        </select>
                                        <label className="block mb-2">Quantity</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className="border p-2 w-full mb-4"
                                        />
                                        <label className="block mb-2">Billing Period</label>
                                        <select
                                            name="billingPeriod"
                                            value={formData.billingPeriod}
                                            onChange={handleChange}
                                            className="border p-2 w-full mb-4"
                                        >
                                            <option>Monthly</option>
                                        </select>
                                        <label className="block mb-2">Rate *</label>
                                        <input
                                            type="text"
                                            name="rate"
                                            value={formData.rate}
                                            onChange={handleChange}
                                            className="border p-2 w-full mb-4"
                                        />
                                    </div>
                                    :
                                    step === 3
                                        ?
                                        <div>
                                            <h2 className="text-xl font-semibold mb-4">Select Threshold Profile (Optional)</h2>
                                            <label className="block mb-2">Select an Alert Threshold Profile</label>
                                            <select
                                                name="thresholdProfile"
                                                value={formData.thresholdProfile}
                                                onChange={handleChange}
                                                className="border p-2 w-full mb-4"
                                            >
                                                <option>Default Profile</option>
                                            </select>
                                        </div>
                                        :
                                        step === 4
                                            ?
                                            <div>
                                                <h2 className="text-xl font-semibold mb-4">Add Contact</h2>
                                                <p className="text-gray-600">Contact form goes here...</p>
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
                            {step < 4 ? (
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
            </div>
        </>
    );
};

export default addCustomer;
