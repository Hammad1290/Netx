'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Image from 'next/image';
import Selectcountries from '@/app/components/DashboardComponents/SelectCountries/Selectcountry';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const Checkout = ({ clickback }) => {

    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [technicians, setTechnicians] = useState(1);

    return (
        <>
            <div className="bg-white py-8">
                <div className="mx-auto w-[70%] px-4 sm:px-6 lg:px-8">
                    <div className='mb-12'>
                        <div className='flex items-center gap-2 cursor-pointer w-max' onClick={clickback} >
                            <FontAwesomeIcon icon={faArrowLeft} className='w-4 text-gray-800' />
                            Back
                        </div>
                        <h1 className='text-center font-bold text-2xl mb-2'>Checkout</h1>
                        <h1 className='text-center text-gray-500'>Complete your payment to launch your IT universe</h1>
                    </div>
                    <div className="flex gap-4">
                        {/* Payment Form */}
                        <div className="w-full">
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Payment method</h2>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            checked={paymentMethod === 'credit'}
                                            onChange={() => setPaymentMethod('credit')}
                                        />
                                        Credit Card
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            checked={paymentMethod === 'paypal'}
                                            onChange={() => setPaymentMethod('paypal')}
                                        />
                                        PayPal
                                    </label>
                                </div>
                                <div className="my-4 flex gap-2">
                                    {
                                        paymentMethod === 'credit' ?
                                            <>
                                                <Image src="/visa.svg" alt="Visa" width={40} height={40} />
                                                <Image src="/mastercard.svg" alt="MasterCard" width={40} height={40} />
                                                <Image src="/discover.svg" alt="Discover" width={40} height={40} />
                                                <Image src="/americanexpress.svg" alt="AmericanExpress" width={40} height={40} />
                                                <Image src="/chinaunion.svg" alt="ChinaUnion" width={40} height={40} />
                                            </>
                                            :
                                            <Image src="/paypal.svg" alt="Visa" width={40} height={40} />
                                    }
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="First name *" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                                <input type="text" placeholder="Last name *" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                                {
                                    paymentMethod === 'credit' ?
                                        <>
                                            <input type="text" placeholder="Card number *" className="border border-gray-300 rounded px-3 py-2 w-full outline-none col-span-2 text-sm text-gray-500" />
                                            <input type="text" placeholder="MM / YY" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                                            <input type="text" placeholder="CVV *" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                                        </>
                                        : null
                                }
                            </div>

                            <h2 className="text-lg font-semibold my-4">Billing address</h2>

                            <div className="grid grid-cols-2 gap-4">
                                <div className='border border-gray-300 rounded px-3 py-2 w-full'>
                                    <Selectcountries
                                        placeholder="Country *"
                                    />
                                </div>
                                <input type="text" placeholder="State / Province" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                                <input type="text" placeholder="Address *" className="border border-gray-300 rounded px-3 py-2 w-full outline-none col-span-2 text-sm text-gray-500" />
                                <input type="text" placeholder="City *" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                                <input type="text" placeholder="Postal code *" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                                <input type="text" placeholder="Phone number *" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                                <input type="text" placeholder="Vat code" className="border border-gray-300 rounded px-3 py-2 w-full outline-none text-sm text-gray-500" />
                            </div>
                        </div>

                        {/* Summary Panel */}
                        <div className="space-y-4 w-full">
                            <div className="bg-gray-50 flex justify-between items-center rounded px-3 py-2">
                                <span>Number of technicians</span>
                                <input
                                    type="number"
                                    min={1}
                                    value={technicians}
                                    onChange={(e) => setTechnicians(e.target.value)}
                                    className="w-16 border border-gray-300 outline-none rounded px-2 py-1"
                                />
                            </div>

                            <div className='bg-gray-50 rounded px-3 py-2 '>
                                <div className="text-xs mt-3 text-gray-500">
                                    <div className='flex justify-between'>
                                        <h3 className="font-semibold">Network Discovery</h3>
                                        <p className="font-semibold">$39</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Monthly subscription</p>
                                        <p>1 users x $39 x 1 mo.</p>
                                    </div>
                                </div>
                                <hr className='text-gray-300 my-4' />
                                <div className='flex justify-between'>
                                    <h3 className="font-semibold">Total</h3>
                                    <p className="font-semibold">$39</p>
                                </div>
                                <div className='flex justify-between'>
                                    <span></span>
                                    <p>Price does not include tax</p>
                                </div>

                                <div className='flex items-center gap-2 my-4'>
                                    <hr className='text-gray-300 w-full' />
                                    <p className='w-full text-nowrap'>Enjoy 27 extra trial days!</p>
                                    <hr className='text-gray-300 w-full' />
                                </div>

                                {
                                    paymentMethod === 'credit' ?
                                        <>
                                            <button className="bg-pink-500 w-full text-white py-2 rounded-full hover:bg-pink-600 mb-4">
                                                Subscribe
                                            </button>
                                        </>
                                        :
                                        <button className="bg-pink-500 w-full text-white py-2 rounded-full hover:bg-pink-600 mb-4 flex items-center justify-center gap-2">
                                            <FontAwesomeIcon icon={faPaypal} className='w-4 text-white' />
                                            Continue with PayPal
                                        </button>
                                }

                                <p className="text-xs text-gray-500">
                                    By clicking Subscribe, you agree to the
                                    <Link href="#" className="text-blue-500 underline"> Atera Terms of Use</Link>
                                    , and acknowledge reading the
                                    <Link href="#" className="text-blue-500 underline"> Atera Privacy Policy</Link>. Products renew automatically until canceled and the payment method is saved for future purchases and subscription renewal.
                                </p>

                                <div className="grid grid-cols-5 gap-y-6 place-items-center mt-4">
                                    <Image src="/g_2_users_love_us.svg" alt="Visa" width={40} height={40} />
                                    <Image src="/g_2_users_love_us.svg" alt="Visa" width={40} height={40} />
                                    <Image src="/g_2_users_love_us.svg" alt="Visa" width={40} height={40} />
                                    <Image src="/g_2_users_love_us.svg" alt="Visa" width={40} height={40} />
                                    <Image src="/g_2_users_love_us.svg" alt="Visa" width={40} height={40} />
                                    <Image src="/g_2_users_love_us.svg" alt="Visa" width={40} height={40} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout