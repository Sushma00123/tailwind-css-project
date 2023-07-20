
import Image from 'next/image'
import React from 'react'

function DoctorsGraduation({ doctorsDet }) {
    return (
        <div className='mt-6'>
            <div className='flex flex-row gap-2 items-center'>
                <Image
                    src='/images/graduation-cap.png'
                    width={22}
                    height={22}
                    alt=''
                />
                <p className='text-xs md:text-sm text-gray-900'>{doctorsDet?.graduation}</p>
            </div>
            <div className='flex flex-row gap-2 mt-2 items-center'>
                <Image
                    src='/images/location.png'
                    width={22}
                    height={22}
                    alt='location'
                />
                <p className='text-xs md:text-sm text-gray-900'>{doctorsDet?.location}</p>
            </div>
        </div>
    )
}

export default DoctorsGraduation