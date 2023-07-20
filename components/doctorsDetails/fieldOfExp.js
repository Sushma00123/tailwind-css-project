import React from 'react'

function FieldOfExp({ doctorsDet }) {
    return (
        <div className='mt-4'>
            <h1 className='text-blue-800 text-base capitalize font-bold'>Field On Exp</h1>
            <div className='mt-2'>
                <p className='text-gray-500 text-sm'>{doctorsDet?.fieldOfExp}</p>
            </div>
        </div>
    )
}

export default FieldOfExp