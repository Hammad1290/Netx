'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFilter } from '@fortawesome/free-solid-svg-icons'
import FilterSelectBox from '../FilterSelectBox';

const NetworkFilter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);

    const [sortBy, setSortBy] = useState('Scan Status');
    const [sortOrder, setSortOrder] = useState('descending');

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleReset = () => {
        setSortBy('');
        setSortOrder('');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div className='relative' ref={filterRef}>
                <button className='flex items-center gap-1 cursor-pointer text-blue-600' onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faFilter} className='text-blue-600' />
                    <h2>Filter</h2>
                </button>
                {
                    isOpen && (
                        <div className="absolute z-10 right-0 -top-5 bg-white p-4 rounded-md border border-gray-300 w-96">
                            <div className="flex items-center justify-between mb-4">
                                <div className='flex items-center gap-4' >
                                    <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                                    <button onClick={handleReset} className="text-gray-600 cursor-pointer">
                                        <FontAwesomeIcon icon={faTimes} className='w-3 mr-1 text-gray-500' />
                                        Reset
                                    </button>
                                </div>
                            </div>

                            <div className='max-h-96 overflow-auto'>
                                <div className="mb-3">
                                    <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                                        Sort By
                                    </label>
                                    <FilterSelectBox
                                        options={['Customer Name', 'Workstations/Servers', 'SNMP', 'Scan Status']}
                                        selected={sortBy}
                                        onChange={setSortBy}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <input
                                                id="descending"
                                                type="radio"
                                                value="descending"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                checked={sortOrder === 'descending'}
                                                onChange={handleSortOrderChange}
                                            />
                                            <label htmlFor="descending" className="ml-2 text-sm text-gray-600">
                                                Descending
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="ascending"
                                                type="radio"
                                                value="ascending"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                checked={sortOrder === 'ascending'}
                                                onChange={handleSortOrderChange}
                                            />
                                            <label htmlFor="ascending" className="ml-2 text-sm text-gray-600">
                                                Ascending
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </>
    );
};

export default NetworkFilter;