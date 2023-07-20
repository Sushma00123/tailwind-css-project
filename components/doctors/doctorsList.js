import React from 'react'
import { Card, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'

function DoctorsList({doctors}) {
  return (
    <div className='container mt-16'>
          <div className='grid sm:grid-cols-2 gap-4 w-auto md:max-w-2xl mx-auto'>
              {
                  doctors?.map((item, i) => (
                      <Link key={i} href={`/doctors-details/${item?.id}`}>
                      <Card className='flex flex-row cursor-pointer' >
                          <div className='p-2'>
                              <Image
                                  src={item.image}
                                  width={150}
                                  height={180}
                                  alt='doctor-image'
                              />
                          </div>
                              <div className='flex flex-col justify-center px-1 w-36 max-w-sm'>
                                  <CardTitle className='text-md text-primaryBlack font-bold'>{item.name}</CardTitle>
                                  <CardDescription className='text-xs text-primaryGrey'>{item.designation}</CardDescription>
                          </div>
                      </Card>
                    
                    </Link>
                  ))
              }
          </div>
        

    </div>
  )
}

export default DoctorsList