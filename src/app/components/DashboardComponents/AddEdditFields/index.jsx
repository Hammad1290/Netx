'use client'
import React, { useEffect, useRef } from 'react'

const AddEdditFields = ({ inputvalue, setInputvalue, submittedvalue, setSubmittedvalue, placeholder }) => {

    const handleSubmit = (e) => {

        if (e.key === 'Enter') {
            e.preventDefault()
            setSubmittedvalue(inputvalue)
            setInputvalue("")
        }
    }

    const resetInput = (e) => {
        e.preventDefault()
        setSubmittedvalue(inputvalue)
        setInputvalue(submittedvalue)
    }

    const clickRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) {
                handleSubmit
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div className='flex items-center' ref={clickRef} >
                {
                    submittedvalue && (
                        <span className="text-gray-700 text-sm border border-white p-1 hover:border-gray-300 w-48" onClick={resetInput}  >{submittedvalue}</span>
                    )
                }
                {
                    !submittedvalue && (
                        <div className='flex items-center gap-2'>
                            <input
                                type="text"
                                placeholder={placeholder}
                                className="p-1 outline-none text-gray-500 text-sm border border-white hover:border-gray-300"
                                value={inputvalue}
                                onChange={(e) => setInputvalue(e.target.value)}
                                onKeyDown={handleSubmit}
                            />
                            {/* <button onClick={handleSubmit} className='border border-gray-300 text-gray-500 px-1 cursor-pointer' >
                                Add
                            </button> */}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default AddEdditFields