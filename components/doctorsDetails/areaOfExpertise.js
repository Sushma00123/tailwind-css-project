import Link from 'next/link'
import React from 'react'

function AreaOfExpertise() {
    return (
        <div className='mt-4'>
            <h1 className='text-blue-800 text-base capitalize font-bold'>Area Of Expertise</h1>
            <div className='mt-2 '>
                <ul className='list-disc text-gray-500 ml-5 '>
                    <li>
                        <Link href={'#'} className='text-sm'>Surgical Oncology</Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm'>Gynaecological Oncology</Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm'>Robotic Surgery </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm'>Radio Guided Surgery</Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm'>HIPEC</Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm'>PIPAC </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='text-sm'>Sentinel Node</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AreaOfExpertise