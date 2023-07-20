import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import WhyApex from './WhyApex'
import ServiceOffered from './ServiceOffered'
import OurDoctors from './OurDoctors'
import Achievements from './Achievements'
import MobileApp from '../common/mobileApp'
import Footer from '../common/footer'
import BreadCrumbs from '../common/breadCrumbs'



function Location({ locationData }) {
    return (
        <div>
        <div className='container mt-24'>
            <div>
                <BreadCrumbs />
            </div>
            <div className='my-5'>
                {
                    locationData?.map((items, i) => (
                        <>
                            <div className='grid md:grid-cols-2 md:gap-20 gap-0'>
                                <div className='mt-4 sm:mt-10 order-2 md:order-1'>
                                    <h1 className='text-2xl sm:text-3xl font-bold text-blue-800'>{items?.hospitalName}</h1>
                                    <h5 className='text-lg sm:text-base font-bold text-gray-700'>{items?.location}</h5>
                                    <p className='text-sm sm:text-base text-gray-700 text-justify'>{items?.desc}</p>
                                </div>
                                <div className='order-1 md:order-2'>
                                    <Image
                                        src={items?.image}
                                        width={350}
                                        height={350}
                                        className='mx-auto'
                                        alt='loc-img'
                                    />
                                </div>
                            </div>
                            <div className='mt-10 sm:mt-8 flex flex-col justify-center items-center'>
                                <h4 className='text-blue-800 font-bold text-lg'>{items?.loc}</h4>
                                <p className='text-gray-900 sm:text-base text-sm text-center'>{items?.address}</p>
                                <div className='mt-10 sm:mt-6 flex flex-col sm:flex-row gap-3'>
                                    <Button className='sm:w-48  text-xs uppercase w-56 rounded-3xl border-blue-800 text-blue-800 ' variant='outline'>
                                        <Image src='/images/navigation1.svg' 
                                        width={15}
                                        height={15}
                                        className='mr-1'
                                        alt='nav1'
                                        />
                                        call us</Button>
                                    <Button className='sm:w-48 text-xs uppercase w-56 rounded-3xl border-blue-800 text-blue-800' variant='outline'>
                                        <Image src='/images/navigation.svg'
                                            width={15}
                                            height={15}
                                            className='mr-1'
                                            alt='nav'
                                        />
                                        virtual tour</Button>
                                    <Button className='sm:w-48 bg-blue-800 text-gray-100 uppercase text-xs w-56 rounded-3xl '>book an Appointment</Button>

                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
            <WhyApex />
            
        </div>
            <ServiceOffered />
            <OurDoctors />
            <Achievements />
            {/* <MobileApp /> */}
            <Footer />
        </div>
    )
}

export default Location