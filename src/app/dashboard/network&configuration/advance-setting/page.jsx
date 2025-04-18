'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import SelectBox from '@/app/components/DashboardComponents/SelectBox';
import DropdownBox from '@/app/components/DashboardComponents/DropdownBox';

const AdvanceSetting = () => {

    const [customers, setCustomers] = useState('All');
    const [customers1, setCustomers1] = useState('All');
    const [customers2, setCustomers2] = useState('All');
    const [customers3, setCustomers3] = useState('All');
    const [customers4, setCustomers4] = useState('All');
    const [customers5, setCustomers5] = useState('All');
    const [customers6, setCustomers6] = useState('All');

    const [severity, setSeverity] = useState('Warning');
    const [severity1, setSeverity1] = useState('Warning');
    const [severity2, setSeverity2] = useState('Warning');
    const [severity3, setSeverity3] = useState('Warning');
    const [severity4, setSeverity4] = useState('Warning');
    const [severity5, setSeverity5] = useState('Warning');
    const [severity6, setSeverity6] = useState('Warning');

    const [enabled, setEnabled] = useState(false);
    const [enabled1, setEnabled1] = useState(false);
    const [enabled2, setEnabled2] = useState(false);
    const [enabled3, setEnabled3] = useState(false);
    const [enabled4, setEnabled4] = useState(false);
    const [enabled5, setEnabled5] = useState(false);
    const [enabled6, setEnabled6] = useState(false);

    const advancesettingOptions = [
        { text: 'Unmonitored workstations/servers detected', Severity: severity, setSeverity: setSeverity, customers: customers, setCustomers: setCustomers, enabled: enabled, setEnabled: setEnabled },
        { text: 'Unmonitored SNMP devices detected', Severity: severity1, setSeverity: setSeverity1, customers: customers1, setCustomers: setCustomers1, enabled: enabled1, setEnabled: setEnabled1 },
        { text: 'Scanning agent IP change', Severity: severity2, setSeverity: setSeverity2, customers: customers2, setCustomers: setCustomers2, enabled: enabled2, setEnabled: setEnabled2 },
        { text: 'Scanning agent offline', Severity: severity3, setSeverity: setSeverity3, customers: customers3, setCustomers: setCustomers3, enabled: enabled3, setEnabled: setEnabled3 },
        { text: 'Potential CVE detected: low rating', Severity: severity4, setSeverity: setSeverity4, customers: customers4, setCustomers: setCustomers4, enabled: enabled4, setEnabled: setEnabled4 },
        { text: 'Potential CVE detected: medium rating', Severity: severity5, setSeverity: setSeverity5, customers: customers5, setCustomers: setCustomers5, enabled: enabled5, setEnabled: setEnabled5 },
        { text: 'Potential CVE detected: high rating', Severity: severity6, setSeverity: setSeverity6, customers: customers6, setCustomers: setCustomers6, enabled: enabled6, setEnabled: setEnabled6 },
    ]

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center justify-between mb-2'>
                    <h1 className="text-lg font-semibold">Network & Configuration Alerts</h1>
                    <p className='text-gray-500'>9 days to try Network Discovery</p>
                </div>

                <div className='bg-white rounded-md border border-gray-300'>
                    <div className="border-b border-gray-200">
                        <div className="p-4">
                            <p>Set alerts on your Network Discovery scans. For general alert settings, visit the <Link href='/dashboard/alert' className='text-blue-500'> Alerts </Link>page</p>
                        </div>

                        <hr className='text-gray-300' />
                        <div>
                            <table className="w-full text-left text-sm table-fixed">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-300 h-[50px]">
                                        <th className='pl-4'>Name</th>
                                        <th>Assigned Customers</th>
                                        <th>Severity</th>
                                        <th className='w-20'>Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        advancesettingOptions.map((val, index) => {
                                            return (
                                                <>
                                                    <tr key={index} className="border-b border-gray-300 h-[50px]">
                                                        <td className='pl-4'>
                                                            <p className='text-gray-500'>{val.text}</p>
                                                        </td>
                                                        <td>
                                                            <SelectBox
                                                                options={['Unassigned']}
                                                                selected={val.customers}
                                                                onChange={val.setCustomers}
                                                                searchplaceholder={['Search Customers']}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className={`w-max ${val.Severity === 'Information' ? 'bg-blue-100' : val.Severity === 'Warning' ? 'bg-yellow-100' : val.Severity === 'Critical' ? 'bg-red-100' : null} px-3 py-1 rounded-full`} >
                                                                <DropdownBox
                                                                    options={['Information', 'Warning', 'Critical']}
                                                                    selected={val.Severity}
                                                                    onChange={val.setSeverity}
                                                                    className={`${val.Severity === 'Information' ? 'text-blue-500' : val.Severity === 'Warning' ? 'text-yellow-500' : val.Severity === 'Critical' ? 'text-red-500' : null}`}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className='w-20'>
                                                            <div className="flex items-center space-x-4">
                                                                <button
                                                                    onClick={() => val.setEnabled(!val.enabled)}
                                                                    className={`relative w-12 h-6 cursor-pointer rounded-full transition-colors duration-300 ease-in-out ${val.enabled ? "bg-blue-500" : "bg-gray-300"
                                                                        }`}
                                                                >
                                                                    <span
                                                                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${val.enabled ? "translate-x-6" : ""
                                                                            }`}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AdvanceSetting