'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faIdCardAlt, faLeftLong, faLocationPinLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import DropdownBox from '@/app/components/DashboardComponents/DropdownBox'
import { faThreads } from '@fortawesome/free-brands-svg-icons'

import AddEdditFields from '@/app/components/DashboardComponents/AddEdditFields'

import ContactsTab from '../CustomerDetails/ContactsTab'
import DevicesTab from '../CustomerDetails/DevicesTab'
import ContractsTab from '../CustomerDetails/ContractsTab'
import AssetsTab from '../CustomerDetails/AssetsTab'
import TicketsTab from '../CustomerDetails/TicketsTab'
import AlertsTab from '../CustomerDetails/AlertsTab'
import PasswordsTab from '../CustomerDetails/PasswordsTab'
import AttachmentsTab from '../CustomerDetails/AttachmentsTab'
import WorkfromhomeTab from '../CustomerDetails/WorkfromhomeTab'
import InvoicesTab from '../CustomerDetails/InvoicesTab'

const CustomerDetail = () => {

    const TabsButton = [
        { tabTitle: 'Overview', activeTab: 'overview' },
        { tabTitle: 'Contacts', activeTab: 'contacts' },
        { tabTitle: 'Devices', activeTab: 'devices' },
        { tabTitle: 'Contracts', activeTab: 'contracts' },
        { tabTitle: 'Assets', activeTab: 'assets' },
        { tabTitle: 'Tickets', activeTab: 'tickets' },
        { tabTitle: 'Alerts', activeTab: 'alerts' },
        { tabTitle: 'Passwords', activeTab: 'passwords' },
        { tabTitle: 'Attachments', activeTab: 'attachments' },
        { tabTitle: 'Work from home', activeTab: 'Workfromhome' },
        { tabTitle: 'Invoices', activeTab: 'invoices' },
    ]

    const [activeTab, setActiveTab] = useState("overview");
    const [rank, setRank] = useState('Silver');

    // overview tab
    const [inputPhonevalue, setInputPhonevalue] = useState("")
    const [submittedPhonevalue, setSubmittedPhonevalue] = useState("")
    const [inputPostalvalue, setInputPostalvalue] = useState("")
    const [submittedPostalvalue, setSubmittedPostalvalue] = useState("")
    const [inputFaxvalue, setInputFaxvalue] = useState("")
    const [submittedFaxvalue, setSubmittedFaxvalue] = useState("")
    const [inputDomainsvalue, setInputDomainsvalue] = useState("")
    const [submittedDomainsvalue, setSubmittedDomainsvalue] = useState("")
    const [inputWebsitevalue, setInputWebsitevalue] = useState("")
    const [submittedWebsitevalue, setSubmittedWebsitevalue] = useState("")
    const [inputBusinessIDvalue, setInputBusinessIDvalue] = useState("")
    const [submittedBusinessIDvalue, setSubmittedBusinessIDvalue] = useState("")

    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filtered, setFiltered] = useState([])
    const [selectedCountry, setSelectedCountry] = useState("")

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all')
                const data = await res.json()
                setCountries(data.map(c => c.name.common).sort())
            } catch (error) {
                console.error("Failed to fetch countries", error)
            }
        }
        fetchCountries()
    }, [])

    useEffect(() => {
        if (searchTerm === "") {
            setFiltered([])
        } else {
            const results = countries.filter(country =>
                country.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFiltered(results)
        }
    }, [searchTerm, countries])

    const handleSelect = (country) => {
        setSearchTerm(country)
        setSelectedCountry(country)
        setFiltered([])
    }

    const resetSelection = () => {
        setSearchTerm("")
        setSelectedCountry("")
    }


    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className='flex items-center gap-6 mb-4'>
                    <Link href='/dashboard/customers'>
                        <FontAwesomeIcon icon={faLeftLong} className='w-6 text-gray-500 hover:text-blue-500 cursor-pointer' />
                    </Link>
                    <div className='border border-gray-400 px-4 py-2 rounded'>
                        <h1 className='text-xl text-gray-400'>U</h1>
                    </div>
                    <div className='text-gray-500'>
                        <div className='flex items-center gap-2'>
                            <h1 className="text-lg font-semibold">Unassigned</h1>
                            <div className={`w-max ${rank === 'Silver' ? 'bg-gray-400' : rank === 'Gold' ? 'bg-yellow-400' : rank === 'Blocked' ? 'bg-red-400' : rank === 'None' ? 'border border-gray-400' : null} px-3 py-1 rounded-full`} >
                                <DropdownBox
                                    options={['Silver', 'Gold', 'Blocked', 'None']}
                                    selected={rank}
                                    onChange={setRank}
                                    className={`${rank === 'None' ? 'text-gray-400' : 'text-white'}`}
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faIdCardAlt} className='w-3' />
                                <p>{submittedBusinessIDvalue ? submittedBusinessIDvalue : inputBusinessIDvalue ? inputBusinessIDvalue : 'No Business ID #'}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faPhone} className='w-3' />
                                <p>{submittedPhonevalue ? submittedPhonevalue : inputPhonevalue ? inputPhonevalue : 'No Phone'}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faLocationPinLock} className='w-3' />
                                <p>{selectedCountry ? selectedCountry : 'No Location'}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faGlobe} className='w-3' />
                                <p>{submittedWebsitevalue ? submittedWebsitevalue : inputWebsitevalue ? inputWebsitevalue : 'No Website'}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faThreads} className='w-3' />
                                <p>{submittedDomainsvalue ? submittedDomainsvalue : inputDomainsvalue ? inputDomainsvalue : 'No Domain'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white border border-gray-100'>
                    <div className="border-b border-gray-200">
                        <div className="flex border-b border-gray-200">
                            {
                                TabsButton.map(
                                    (val, index) => {
                                        return (

                                            <button
                                                key={index}
                                                className={`px-6 py-4 cursor-pointer ${activeTab === val.activeTab
                                                    ? "text-black border-b-3 border-pink-500"
                                                    : "text-gray-500"
                                                    }`}
                                                onClick={() => setActiveTab(val.activeTab)}
                                            >
                                                {val.tabTitle}
                                            </button>

                                        )
                                    }
                                )
                            }
                        </div>

                        <div className="">
                            {activeTab === "overview" &&

                                <>
                                    <div className='px-6 py-2'>
                                        <div className="grid grid-cols-3 gap-4 mt-2">
                                            <div className='border-r border-gray-300'>
                                                <h1 className='mb-2'>System fields</h1>
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div className='flex items-center'>
                                                        <p className='text-gray-500 font-semibold'>Phone</p>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <AddEdditFields
                                                            inputvalue={inputPhonevalue}
                                                            setInputvalue={setInputPhonevalue}
                                                            submittedvalue={submittedPhonevalue}
                                                            setSubmittedvalue={setSubmittedPhonevalue}
                                                            placeholder='Add Phone' />
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <p className='text-gray-500 font-semibold'>Address</p>
                                                    </div>
                                                    <div className='col-span-2'>
                                                        <div className='flex items-center'>
                                                            {selectedCountry && (
                                                                <span className="text-gray-700 text-sm border border-white p-1 hover:border-gray-300 w-48" onClick={resetSelection}>{selectedCountry}</span>
                                                            )}

                                                            {!selectedCountry && (
                                                                <div className='relative w-64'>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Add Location"
                                                                        className="p-1 outline-none text-gray-500 text-sm border border-white hover:border-gray-300"
                                                                        value={searchTerm}
                                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                                    />

                                                                    {filtered.length > 0 && (
                                                                        <ul className="absolute top-8 left-0 border border-gray-300 mt-2 max-h-40 overflow-y-auto bg-white">
                                                                            {filtered.map((country, idx) => (
                                                                                <li
                                                                                    key={idx}
                                                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                                                    onMouseDown={(e) => {
                                                                                        e.preventDefault()
                                                                                        handleSelect(country)
                                                                                    }}
                                                                                >
                                                                                    {country}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <p className='text-gray-500 font-semibold'>Postal/Zip</p>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <AddEdditFields
                                                            inputvalue={inputPostalvalue}
                                                            setInputvalue={setInputPostalvalue}
                                                            submittedvalue={submittedPostalvalue}
                                                            setSubmittedvalue={setSubmittedPostalvalue}
                                                            placeholder='Add Postal/Zip code' />
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <p className='text-gray-500 font-semibold'>Fax</p>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <AddEdditFields
                                                            inputvalue={inputFaxvalue}
                                                            setInputvalue={setInputFaxvalue}
                                                            submittedvalue={submittedFaxvalue}
                                                            setSubmittedvalue={setSubmittedFaxvalue}
                                                            placeholder='Add Fax' />
                                                    </div>

                                                    <div className='flex items-center'>
                                                        <p className='text-gray-500 font-semibold'>Domains</p>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <AddEdditFields
                                                            inputvalue={inputDomainsvalue}
                                                            setInputvalue={setInputDomainsvalue}
                                                            submittedvalue={submittedDomainsvalue}
                                                            setSubmittedvalue={setSubmittedDomainsvalue}
                                                            placeholder='Add Domains' />
                                                    </div>

                                                    <div className='flex items-center'>
                                                        <p className='text-gray-500 font-semibold'>Website</p>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <AddEdditFields
                                                            inputvalue={inputWebsitevalue}
                                                            setInputvalue={setInputWebsitevalue}
                                                            submittedvalue={submittedWebsitevalue}
                                                            setSubmittedvalue={setSubmittedWebsitevalue}
                                                            placeholder='Add Website' />
                                                    </div>

                                                    <div className='flex items-center'>
                                                        <p className='text-gray-500 font-semibold'>Business ID #</p>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <AddEdditFields
                                                            inputvalue={inputBusinessIDvalue}
                                                            setInputvalue={setInputBusinessIDvalue}
                                                            submittedvalue={submittedBusinessIDvalue}
                                                            setSubmittedvalue={setSubmittedBusinessIDvalue}
                                                            placeholder='Add Business ID #' />
                                                    </div>

                                                    <div className='my-2'>
                                                        <p className='text-gray-500 font-semibold'>Ticket creation</p>
                                                    </div>
                                                    <div className="col-span-2 flex items-center gap-2 my-2">
                                                        <input
                                                            type='checkbox'
                                                            className='w-4 h-4'
                                                            id='ticketcreation'
                                                        />
                                                        <label htmlFor='ticketcreation'>Only main contacts can create tickets</label>
                                                    </div>

                                                    <div className='my-2'>
                                                        <p className='text-gray-500 font-semibold'>Created</p>
                                                    </div>
                                                    <div className="col-span-2 my-2">
                                                        <p>24/04/2025</p>
                                                    </div>

                                                    <div className='my-2'>
                                                        <p className='text-gray-500 font-semibold'>Modified</p>
                                                    </div>
                                                    <div className="col-span-2 my-2">
                                                        <p>24/04/2025</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='border-r border-gray-300'>
                                                <h1 className='mb-2'>Custom fields</h1>
                                                <p className='mb-3'>Nothing here yet...</p>
                                                <Link href='#' className='text-blue-500 text-sm'>Edit custom fields</Link>
                                            </div>
                                            <div>
                                                <h1 className='mb-2'>Notes</h1>
                                                <textarea className='border border-gray-300 rounded text-sm outline-none p-2 w-full' rows={10} placeholder='Enter a brief note'></textarea>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            }
                            {activeTab === "contacts" &&

                                <ContactsTab />
                            }
                            {activeTab === "devices" &&

                                <DevicesTab />

                            }
                            {activeTab === "contracts" &&

                                <ContractsTab />

                            }
                            {activeTab === "assets" &&

                                <AssetsTab />

                            }
                            {activeTab === "tickets" &&

                                <TicketsTab />

                            }
                            {activeTab === "alerts" &&

                                <AlertsTab />

                            }
                            {activeTab === "passwords" &&

                                <PasswordsTab />

                            }
                            {activeTab === "attachments" &&

                                <AttachmentsTab />

                            }
                            {activeTab === "Workfromhome" &&

                                <WorkfromhomeTab />

                            }
                            {activeTab === "invoices" &&

                                <InvoicesTab />

                            }
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default CustomerDetail