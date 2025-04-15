'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const DropdownBox = ({ options, selected, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

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
                className="rounded-full text-xs flex justify-center items-center gap-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selected}</span>
                <FontAwesomeIcon icon={faAngleDown} className='w-3 text-gray-500' />
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-max bg-white border border-gray-300 rounded shadow-lg">
                    <ul className="max-h-48 overflow-y-auto">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${selected === option ? 'font-semibold text-black' : 'text-gray-700'
                                    }`}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownBox;