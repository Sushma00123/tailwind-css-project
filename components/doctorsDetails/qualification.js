import React from 'react'

function Qualification({ doctorsDet }) {
    return (
        <div className='mt-5'>
            <h1 className='text-blue-800 text-base capitalize font-bold'>Qualification</h1>
            <div className='mt-3'>
                <p className='text-gray-500 text-sm'>{doctorsDet?.qualification}</p>
            </div>
        </div>
    )
}

export default Qualification