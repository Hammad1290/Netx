'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFilter } from '@fortawesome/free-solid-svg-icons'
import FilterSelectBox from '../FilterSelectBox';
import SelectBox from '../../DashboardComponents/SelectBox';

const DevicesFilter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);

    const [customers, setCustomers] = useState('All Customers');
    const [folder, setFolder] = useState('All');
    const [devicesType, setDevicesType] = useState('All');
    const [availability, setAvailability] = useState('All');
    const [alertCategory, setAlertCategory] = useState('All');
    const [alertSeverity, setAlertSeverity] = useState('All');


    const handleReset = () => {
        setCustomers('All Customers');
        setFolder('All');
        setDevicesType('All');
        setAvailability('All');
        setAlertCategory('All');
        setAlertSeverity('All');
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
                        <div className="absolute z-10 right-0 -top-20 bg-white p-4 rounded-md border border-gray-300 w-96">
                            <div className="flex items-center mb-4">
                                <div className='flex items-center gap-2' >
                                    <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                                    <button onClick={handleReset} className="text-gray-600 cursor-pointer">
                                        <FontAwesomeIcon icon={faTimes} className='w-3 mr-1 text-gray-500' />
                                        Reset
                                    </button>
                                </div>
                            </div>

                            <div className='max-h overflow-auto'>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Customers
                                    </label>
                                    <SelectBox
                                        options={['Unassigned']}
                                        selected={customers}
                                        onChange={setCustomers}
                                        className='border border-gray-300'
                                        searchplaceholder={['Search Customer']}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Folders
                                    </label>
                                    <FilterSelectBox
                                        options={['']}
                                        selected={folder}
                                        onChange={setFolder}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Device type
                                    </label>
                                    <FilterSelectBox
                                        options={['PC', 'Server', 'Mac', 'Linux', 'SNMP', 'TCP', 'HTTP', 'Generic']}
                                        selected={devicesType}
                                        onChange={setDevicesType}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Availability
                                    </label>
                                    <FilterSelectBox
                                        options={['Unreachable', 'Offline', 'Online']}
                                        selected={availability}
                                        onChange={setAvailability}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Alert Category
                                    </label>
                                    <FilterSelectBox
                                        options={['Hardware', 'Disk', 'Availability', 'Performance', 'Exchange', 'General', 'Network', 'Apps', 'Script-based']}
                                        selected={alertCategory}
                                        onChange={setAlertCategory}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Alert severity
                                    </label>
                                    <FilterSelectBox
                                        options={['Critical', 'Warning',]}
                                        selected={alertSeverity}
                                        onChange={setAlertSeverity}
                                    />
                                </div>

                                <div className="flex items-center gap-3 mb-3 ml-1">
                                    <input
                                        id='monitored'
                                        type='checkbox'
                                        className="w-4 h-4"
                                    />
                                    <label htmlFor='monitored' className="block text-sm font-medium text-gray-700">
                                        Monitored
                                    </label>
                                </div>

                                <div className="flex items-center gap-3 mb-3 ml-1">
                                    <input
                                        id='favorite'
                                        type='checkbox'
                                        className="w-4 h-4"
                                    />
                                    <label htmlFor='favorite' className="block text-sm font-medium text-gray-700">
                                        Favorite
                                    </label>
                                </div>

                                <div className="flex items-center gap-3 mb-3 ml-1">
                                    <input
                                        id='pendingreboot'
                                        type='checkbox'
                                        className="w-4 h-4"
                                    />
                                    <label htmlFor='pendingreboot' className="block text-sm font-medium text-gray-700">
                                        Pending reboot
                                    </label>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </>
    );
};

export default DevicesFilter;