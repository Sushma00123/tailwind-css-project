import React from 'react'
import Image from 'next/image'
import DoctorGraduation from './doctorGraduation'
import BookButton from './bookButton'
import Buttons from './buttons'
import DetailsSection from './detailsSection'
import BreadCrumbs from '../common/breadCrumbs'
import Footer from '../common/footer'


function DoctorsDetails({doctorsDet}) {
  console.log(doctorsDet)
  return (
      <div>
        <BreadCrumbs />
      <div className='flex flex-col sm:flex-row gap-3'>
        <div className='mx-auto sm:mx-0'>
          <Image src={doctorsDet.image} width={250} height={300} alt='doctor-image'/>
        </div>
        <div>
          <div>
            <h1 className='text-blue-800 font-bold sm:text-3xl text-4xl'>{doctorsDet.name}</h1>
            <p className='text-xs sm:text-sm text-gray-500 mt-1'>{doctorsDet.designation}</p>
          </div>
          <DoctorGraduation doctorsDet={doctorsDet}/>
          <BookButton />
          <Buttons/>
        </div>
        </div>
        <DetailsSection doctorsDet={doctorsDet}/>
        <Footer />
      </div>
  )
}

export default DoctorsDetails