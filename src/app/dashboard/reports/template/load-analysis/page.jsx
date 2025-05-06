'use client';
import { useState } from 'react';
import ReportsTemplate from '..';
import FilterSelectBox from '@/app/components/Filter/FilterSelectBox';
import SelectBox from '@/app/components/DashboardComponents/SelectBox';

const LoadAnalysisReports = () => {

    const [customers, setCustomers] = useState('All Customers');
    const [ticketPriority, setTicketPriority] = useState("All");
    const [ticketImpact, setTicketImpact] = useState("All");
    const [ticketSource, setTicketSource] = useState("All");

    return (
        <>
            <ReportsTemplate title='Load Analysis Report' desc='See a ticket load analysis report' >
                <div className="mb-4">
                    <label className="block mb-0 text-sm mb-1 font-semibold">Customer Name(s)</label>
                    <SelectBox
                        options={['Unassigned']}
                        selected={customers}
                        onChange={setCustomers}
                        className='border border-gray-300'
                        searchplaceholder={['Search Customer']}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-0 text-sm mb-1 font-semibold">Ticket Priority</label>
                    <FilterSelectBox
                        options={['Low', 'Medium', 'High', 'Critical']}
                        selected={ticketPriority}
                        onChange={setTicketPriority}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-0 text-sm mb-1 font-semibold">Ticket Impact</label>
                    <FilterSelectBox
                        options={['No Impact', 'Minor', 'Major', 'Site down', 'Server Issue']}
                        selected={ticketImpact}
                        onChange={setTicketImpact}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-0 text-sm mb-1 font-semibold">Ticket Impact</label>
                    <FilterSelectBox
                        options={['Alert', 'Email', 'Phone', 'Portal', 'Chat']}
                        selected={ticketSource}
                        onChange={setTicketSource}
                    />
                </div>
            </ReportsTemplate>
        </>
    )
}

export default LoadAnalysisReports