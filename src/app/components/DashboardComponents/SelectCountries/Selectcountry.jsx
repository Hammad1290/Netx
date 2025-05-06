'use client'
import React, { useState, useEffect, useRef } from 'react'

const Selectcountries = ({ placeholder }) => {
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filtered, setFiltered] = useState([])
    const [selectedCountry, setSelectedCountry] = useState("")
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const wrapperRef = useRef(null)

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all')
                const data = await res.json()
                const countryNames = data.map(c => c.name.common).sort()
                setCountries(countryNames)
                setFiltered(countryNames) // Initialize with all countries
            } catch (error) {
                console.error("Failed to fetch countries", error)
            }
        }
        fetchCountries()
    }, [])

    useEffect(() => {
        if (searchTerm === "") {
            setFiltered(countries)
        } else {
            const results = countries.filter(country =>
                country.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFiltered(results)
        }
    }, [searchTerm, countries])

    // Detect click outside dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleSelect = (country) => {
        setSearchTerm(country)
        setSelectedCountry(country)
        setDropdownOpen(false)
    }

    const resetSelection = () => {
        setSearchTerm("")
        setSelectedCountry("")
        setDropdownOpen(true)
    }

    return (
        <div className='flex items-center' ref={wrapperRef}>
            {selectedCountry && (
                <span
                    className="text-gray-700 text-sm p-1 w-48 cursor-pointer"
                    onClick={resetSelection}
                >
                    {selectedCountry}
                </span>
            )}

            {!selectedCountry && (
                <div className='relative w-64'>
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full outline-none text-gray-500 text-sm"
                        value={searchTerm}
                        onFocus={() => setDropdownOpen(true)}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                            setDropdownOpen(true)
                        }}
                    />

                    {dropdownOpen && filtered.length > 0 && (
                        <ul className="absolute top-8 left-0 border border-gray-300 mt-2 max-h-40 overflow-y-auto bg-white z-10 w-full">
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
    )
}

export default Selectcountries
