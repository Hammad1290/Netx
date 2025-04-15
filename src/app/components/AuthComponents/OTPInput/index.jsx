"use client"
import React, { useState, useRef } from "react";
import style from './OTPInput.module.scss'

const OTPInput = ({ length = 4, onComplete }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        let newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1); // Allow only one character
        setOtp(newOtp);

        // Move to next input if not the last input
        if (value && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }

        // Call onComplete when OTP is fully entered
        if (newOtp.every((digit) => digit !== "")) {
            onComplete && onComplete(newOtp.join(""));
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <>
            <div className={`${style.container}`}>
                {otp.map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        value={otp[index]}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        maxLength="1"
                    />
                ))}
            </div>
        </>
    )
}

export default OTPInput;
