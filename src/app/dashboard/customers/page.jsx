'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Image from "next/image";
import DropdownBox from '@/app/components/DashboardComponents/DropdownBox';
import FilterBox from '@/app/components/Filter';

const Customers = () => {

    const [rank, setRank] = useState('None');

    const [isChecked, setisChecked] = useState(false);
    const handleCheckboxChange = () => {
        setisChecked((prev) => !prev);
    };

    const buttonClick = () => {
        alert('This Cutomer is deleted')
    }

    const [inputPhonevalue, setInputPhonevalue] = useState("")
    const [submittedPhonevalue, setSubmittedPhonevalue] = useState("")

    const handlephoneSubmit = (e) => {
        e.preventDefault()
        setSubmittedPhonevalue(inputPhonevalue)
        setInputPhonevalue("")
    }

    const resetphone = (e) => {
        setSubmittedPhonevalue('')
        setInputPhonevalue('')
    }

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
                <div className='flex items-center justify-between'>
                    <h1 className="text-2xl font-semibold mb-4">Customers</h1>
                    <Link href='/dashboard/customers/add' className='bg-red-600 px-4 py-1 rounded-full text-center text-white'>
                        New Customers
                    </Link>
                </div>

                <div className='bg-white rounded-md border border-gray-300'>
                    <div className="border-b border-gray-200">
                        <div className='flex items-center justify-between p-4'>
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className="w-4 h-4" />
                                <button
                                    className={`flex items-center gap-2 ${isChecked ? 'text-gray-600 hover:text-blue-600 cursor-pointer' : 'text-gray-300'} `}
                                    disabled={!isChecked}
                                    onClick={buttonClick}
                                >
                                    <FontAwesomeIcon icon={faTrash} className={`w-3 ${isChecked ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300'}`} />
                                    Delete
                                </button>
                            </div>
                            <div className='flex items-center gap-8'>
                                <div className="flex items-center bg-white px-3 py-1 border border-gray-300 rounded">
                                    <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500' />
                                    <input type="text" placeholder="Search cutomer name" className="ml-2 outline-none" />
                                </div>
                                <FilterBox />
                            </div>
                        </div>
                        <p className='ml-4 mb-4 text-gray-500'>Displaying 1 customers</p>
                        <hr className='text-gray-300' />
                        <div>
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="text-gray-500 border-b border-gray-300 h-[60px]">
                                        <th></th>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Unmonitored devices	</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Contact</th>
                                        <th>Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-300 h-[100px] hover:bg-gray-50">
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                                className="w-4 h-4 ml-4" />
                                        </td>
                                        <td className='flex items-center justify-center' style={{ height: 'inherit' }}>
                                            <div className='border border-gray-200 p-2 rounded w-fit'>
                                                <Image
                                                    src='/suitcase.svg'
                                                    alt="logo"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-gray-700">Unassigned</span>
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <div className='hover:text-blue-600 flex items-center' >
                                                {
                                                    submittedPhonevalue && (
                                                        <span className="text-gray-700" onClick={resetphone}  >{submittedPhonevalue}</span>
                                                    )
                                                }
                                                {
                                                    !submittedPhonevalue && (
                                                        <div className='flex flex-col'>
                                                            <input
                                                                type="text"
                                                                placeholder="Add Phone"
                                                                className="py-1 outline-none text-gray-500"
                                                                value={inputPhonevalue}
                                                                onChange={(e) => setInputPhonevalue(e.target.value)}
                                                            />
                                                            <button onClick={handlephoneSubmit} className='border border-gray-300 text-gray-500 px-1' >
                                                                Add
                                                            </button>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </td>
                                        <td>

                                            {selectedCountry && (
                                                <span className="text-gray-700" onClick={resetSelection}>{selectedCountry}</span>
                                            )}

                                            {!selectedCountry && (
                                                <div className='relative w-64'>
                                                    <input
                                                        type="text"
                                                        placeholder="Add Location"
                                                        className="py-1 w-full outline-none"
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


                                        </td>
                                        <td>
                                            <div className='flex flex-col'>
                                                <span className="text-blue-500">Jhon Smith</span>
                                                <span className="text-gray-700">050-0000001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <DropdownBox
                                                options={['None', 'Silver', 'Gold', 'Blocked']}
                                                selected={rank}
                                                onChange={setRank}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Customers