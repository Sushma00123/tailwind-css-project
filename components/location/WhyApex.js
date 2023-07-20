import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import ApexAchievements from './ApexAchievements'

const apexData = [
  {
    images: '/images/doctors.webp',
    title: 'doctors'
  },
  {
    images: '/images/health-care-ecosytem.webp',
    title: 'Healthcare Eco-System'
  },
  {
    images: '/images/facility.webp',
    title: 'facility'
  },
  {
    images: '/images/special-surgery.webp',
    title: 'Special Surgeries'
  }
]

function WhyApex() {
  return (
    <div className='mt-20'>
      <div>
        <h2 className='text-xl sm:text-3xl text-blue-800 font-bold'>Why Choose Apex Hospitals?</h2>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 mt-3'>
        <div className='w-2/3 mx-6'>
          <div className='grid md:grid-cols-2 gap-4'>
            {
              apexData?.map((item,i) => (
                <Card className='p-2 w-64 ' key={i}>
                    <Image 
                    src={item?.images}
                    width={350}
                    height={250}
                    alt=''
                    />
                    <p className='text-sm p-1 text-center'>{item?.title}</p>
                </Card>
              ))
            }
          </div>

        </div>
        <div className='w-1/3 mx-10'>
            <ApexAchievements />
        </div>

      </div>

    </div>
  )
}

export default WhyApex