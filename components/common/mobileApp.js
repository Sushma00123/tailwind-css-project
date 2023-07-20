import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const mobileData = [
    {
        text: 'Video consultations'
    },
    {
        text: 'Access lab reports'
    },
    {
        text: 'Apex home care services'
    },
    {
        text: 'weight loss plans'
    }
]

function MobileApp() {
    return (
        <>
            <div className='container bg-blue-800 my-12 rounded-2xl pt-8 md:w-9/12 w-11/12'>
                <div className='flex md:flex-row flex-col md:justify-between'>
                    <div className=''>
                        <h1 className='lg:text-4xl font-bold text-gray-100 md:w-7/12 capitalize leading-normal w-60 text-4xl md:text-2xl'>Our app can make your healthcare needs simple.</h1>
                        <div className='flex md:flex-row text-gray-100 gap-3 flex-col mt-4 '>
                            {
                                mobileData?.map((item, i) => (
                                    <div key={i}>
                                        <div class="flex items-center">
                                            <span class="pr-4"><Link href='#' className='md:text-sm md:w-1/5 items-center'>{item?.text}</Link></span>
                                    {
                                                i === 3 ? '' : <div class="md:border-r border-b-4 border-gray-100 h-4"></div>
                                    }
                                           
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                        <Button className='uppercase bg-gray-100 text-xs w-36 text-blue-800 rounded-3xl hover:bg-blue-950 hover:border-gray-100 hover:text-white mt-2' variant='outline'>Know More</Button>


                        <div className='flex md:flex-row gap-2 mt-5 flex-col'>
                            <Link href='#'>
                                <Image src='/images/Store badge.svg' width={150} height={150} alt='' />
                            </Link>
                            <Link href='#'>
                                <Image src='/images/Store badge (1).svg' width={150} height={150} alt='' />
                            </Link>
                        </div>
                    </div>

                    <div className='mx-auto mt-4 border-x-4 border-t-4 border-black rounded-t-3xl'>
                        <Image src='/images/mobile-app.webp' width={250} height={200} alt='mobile-app' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileApp