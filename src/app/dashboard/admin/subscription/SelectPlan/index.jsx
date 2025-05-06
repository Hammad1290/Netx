'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SelectPlan = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const handleBillingCycleChange = (cycle) => {
        setBillingCycle(cycle);
    };

    const getPrice = (monthlyPrice, yearlyPrice) => {
        return billingCycle === 'monthly' ? monthlyPrice : (yearlyPrice * 0.84).toFixed(2); // Apply 16% discount
    };

    const billingText = billingCycle === 'monthly' ? '/mo' : '/yr';

    const plans = [
        {
            name: 'Pro',
            monthlyPrice: 129,
            yearlyPrice: 129,
            buttonName: 'Select',
            featuresHeading: 'Includes',
            features: [
                'Remote management, automation and scripting',
                'Windows support',
                'Remote monitoring and alerts',
                'Patch management',
                'Remote access using Splashtop (up to 2 concurrent sessions)',
                'API access',
                'Reports',
                'Helpdesk & ticket automation',
            ],
        },
        {
            name: 'Growth',
            monthlyPrice: 179,
            yearlyPrice: 179,
            buttonName: 'Select',
            featuresHeading: 'All the magnitude of Pro, and:',
            recommendation: 'Your trial',
            features: [
                'Mac and Linux support',
                'Remote access using AnyDesk',
                'Splashtop concurrent sessions (unlimited)',
                'Custom support addresses (up to 10)',
                'Advanced analytics',
                'Custom asset types (up to 5)',
                'File transfer (up to 15GB per month)',
                'Extended retention audit log',
                'Integrations with QuickBooks Online & Xero'
            ],
        },
        {
            name: 'Power',
            monthlyPrice: 209,
            yearlyPrice: 209,
            buttonName: 'Select',
            featuresHeading: 'All the power of Growth, and:',
            recommendation: 'Most recommended',
            features: [
                'Custom analytics',
                'Custom support addresses (unlimited)',
                'Custom asset types (up to 20)',
                'File transfer (up to 50GB per month)',
                'Audit log - 1 year retention',
                'Data recovery',
                'Eligible for Copilot (paid add-on)',
            ]
        },
        {
            name: 'Superpower',
            planheading: 'Let\'s talk',
            plandesc: 'Enterprise-grade services that accelerate response time',
            buttonName: 'Contact sales',
            featuresHeading: 'All the vastness of Power, and:',
            features: [
                'Single sign-on (SSO)',
                'Azure AD continuous sync',
                'Private software repository',
                'Custom domain SSL for Service Portal',
                'Tailored Atera onboarding',
                'Atera premium customer support',
                'Dedicated account manager',
                'Audit log - 7 year retention',
                'Unlimited custom analytics'
            ]
        },
    ];

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className='text-center font-bold text-2xl mb-2'>Launch your IT universe</h1>
                    <h1 className='text-center text-gray-500'>Enjoy your remaining 27 trial days and continue to boost your IT efficiency</h1>
                </div>
                <div className="mt-6 sm:mt-8 flex justify-center rounded-full bg-gray-100 p-1 sm:p-1 mx-auto w-64">
                    <button
                        onClick={() => handleBillingCycleChange('monthly')}
                        className={`relative w-1/2 rounded-full py-2 text-sm font-medium text-gray-700 focus:outline-none  ${billingCycle === 'monthly' ? 'bg-white shadow-sm' : 'cursor-pointer'
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => handleBillingCycleChange('annually')}
                        className={`relative ml-0.5 w-1/2 rounded-full py-2 text-sm font-medium text-gray-700 focus:outline-none  ${billingCycle === 'annually' ? 'bg-white shadow-sm' : 'cursor-pointer'
                            }`}
                    >
                        Annually
                    </button>
                </div>

                {billingCycle === 'annually' && (
                    <p className="mt-4 text-center text-xs"> <b className='text-pink-500'>Save up to 16% </b>on an annual subscription</p>
                )}

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {
                        plans.map(
                            (val, index) => {
                                return (
                                    <div key={index} className="bg-white rounded-lg border border-gray-300">
                                        {
                                            val.recommendation ?
                                                <div className={`text-xs font-medium ${val.recommendation === 'Most recommended' ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-800'} text-center py-1 rounded-tl rounded-tr`}>
                                                    {val.recommendation}
                                                </div>
                                                : null
                                        }
                                        <div className="p-6">
                                            <div className='flex items-center justify-center flex-col'>
                                                <h3 className="text-lg font-medium text-gray-900">{val.name}</h3>
                                                {
                                                    val.name === 'Superpower'
                                                        ?
                                                        <>
                                                            <div className="mt-4">
                                                                <span className="text-2xl font-extrabold text-gray-900">{val.planheading}</span>
                                                            </div>
                                                            <p className="mt-3 text-sm text-center text-gray-500">{val.plandesc}</p>
                                                        </>
                                                        :
                                                        <>
                                                            <div className="mt-2 flex items-center">
                                                                <span className="text-2xl font-extrabold text-gray-900"> <sub>$</sub>{getPrice(val.monthlyPrice, val.yearlyPrice)}</span>
                                                                <span className="ml-1 text-base font-medium text-gray-500">{billingText}</span>
                                                            </div>
                                                            <p className="mt-3 text-sm text-gray-500">per user / {billingCycle === 'monthly' ? 'mo' : 'yr'}</p>
                                                            {billingCycle === 'annually' ? <p className="mt-1 text-sm text-gray-500">when billed {billingCycle}</p> : null}
                                                        </>
                                                }
                                                <div className="mt-4">
                                                    <button className="block w-full py-1 px-6 rounded-full text-center font-medium border border-gray-300 hover:bg-gray-100 cursor-pointer">
                                                        {val.buttonName}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-8">
                                                <h4 className="text-sm font-semibold text-gray-900">{val.featuresHeading}</h4>
                                                <ul role="list" className="mt-2 space-y-4 text-gray-500 text-xs">
                                                    {
                                                        val.features.map(
                                                            (feature, index) => {
                                                                return (
                                                                    <li key={index} className="flex items-center ">
                                                                        <FontAwesomeIcon icon={faCheck} className='w-2 text-gray-800 mr-3' />
                                                                        {feature}
                                                                    </li>
                                                                )
                                                            }
                                                        )
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectPlan;
