'use client';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SelectBoxLinks = ({ options, buttonName, setSelected, onModalTrigger, className, iconColor }) => {
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

    const handleSelect = (option) => {
        setIsOpen(false);
        setSelected(option.label);

        if (option.isModal && onModalTrigger) {
            onModalTrigger(); // this will trigger modal from parent
        } else if (option.value) {
            window.location.href = option.value;
        }
    };

    return (
        <>
            <div className="relative w-full" ref={dropdownRef}>
                <button
                    className={`${className} px-4 py-1 rounded-full text-center flex items-center gap-2 cursor-pointer`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>{buttonName}</span>
                    <FontAwesomeIcon icon={faAngleDown} className={`w-3 ${iconColor}`} />
                </button>

                {isOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg">
                        <ul className="max-h-48 overflow-y-auto">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    className='px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-gray-700'
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default SelectBoxLinks;
