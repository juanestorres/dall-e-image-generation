import React from 'react'
import { Form } from 'react-router-dom'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-900'>
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button type='button' onClick={handleSurpriseMe} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-md text-black'>
                        Surprise me
                    </button>
                )}
            </div>
            <input type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='bg-gay-500 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none
                block w-full p-3'
            />


        </div >
    )
}

export default FormField