import React from 'react'

function OverView({ doctorsDet }) {
    return (
        <div className=''>
            <h1 className='text-blue-800 text-base capitalize font-bold'>overview</h1>
            <div className='mt-3'>
                <p className='text-gray-500 text-sm'>{doctorsDet?.overview}</p>
            </div>
        </div>
    )
}

export default OverView