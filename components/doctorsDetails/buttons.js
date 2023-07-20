import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function Buttons() {
    return (
        <div className='mt-2 flex gap-1'>
            <Button variant='outline' className='rounded-3xl w-32 h-9 border-blue-900 text-blue-900'>
                <Image
                src='/images/share-2.svg'
                width={15}
                height={15}
                    alt='share-btn'
                    className='mr-1'
                />
                share
            </Button>
            <Button variant='outline' className='rounded-3xl w-32 h-9 border-green-500 text-green-500 '>
                <Image
                    src='/images/phone.svg'
                    width={15}
                    height={15}
                    alt='phone'
                    className='mr-1'
                />
                call now
            </Button>

        </div>
    )
}

export default Buttons