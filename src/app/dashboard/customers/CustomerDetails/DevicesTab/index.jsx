'use client'
import React, { useState } from 'react'
import DevicesComponent from '@/app/dashboard/devices/DevicesComponent'

const DevicesTab = () => {

    const [ShowSelectBoxLinks, setshowSelectBoxLinks] = useState(false);

    return (
        <>
            <DevicesComponent
                ShowSelectBoxLinks={ShowSelectBoxLinks}
            />
        </>
    )
}

export default DevicesTab