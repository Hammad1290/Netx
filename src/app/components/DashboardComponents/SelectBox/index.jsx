'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'

const SelectBox = ({ options, selected, onChange, searchplaceholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef(null);

    const filteredOptions = options.filter((opt) =>
        opt.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                className="w-full border border-gray-300 rounded px-4 py-2 text-left bg-white shadow-sm flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selected}</span>
                <FontAwesomeIcon icon={faAngleDown} className='w-3 text-gray-500' />
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg">
                    <div className='flex items-center border-b border-gray-300 w-full px-3 py-2'>
                        <FontAwesomeIcon icon={faSearch} className='w-3 text-gray-500 mr-3' />
                        <input
                            type="text"
                            placeholder={searchplaceholder}
                            className="w-full text-sm outline-none  placeholder-gray-400"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <ul className="max-h-48 overflow-y-auto">
                        {filteredOptions.map((option) => (
                            <li
                                key={option}
                                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${selected === option ? 'font-semibold text-black' : 'text-gray-700'
                                    }`}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                    setSearch('');
                                }}
                            >
                                {option}
                            </li>
                        ))}
                        {filteredOptions.length === 0 && (
                            <li className="px-4 py-2 text-sm text-gray-500">No results</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SelectBox;