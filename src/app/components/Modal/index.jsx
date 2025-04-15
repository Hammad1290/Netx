// components/Modal.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-invert backdrop-opacity-10">
            <div className="bg-white rounded-xl shadow-xl w-[60%] h-max p-6 relative">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl font-bold">
                        <FontAwesomeIcon icon={faTimes} className='w-3' />
                    </button>
                </div>
                <div className="space-y-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
