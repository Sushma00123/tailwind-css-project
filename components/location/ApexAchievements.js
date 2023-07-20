import Image from 'next/image'
import React from 'react'

const achievementsData = [
    {
        images: '/images/dashicons_awards.svg',
        year: '50+',
        desc: 'Year of Exellence'
    },
    {
        images: '/images/healthicons_wold-care-outline.svg',
        year: '20+',
        desc: 'Million Lives Touched'
    }, {
        images: '/images/doctor.svg',
        year: '70+',
        desc: 'Doctors'
    }, {
        images: '/images/specialities.svg',
        year: '36+',
        desc: 'Specialities'
    },
    {
        images: '/images/hospital.svg',
        year: '5+',
        desc: 'Hospitals'
    }
]

function ApexAchievements() {
    return (
        <div>
            <div className='w-[230px] bg-blue-800 rounded-2xl'>
                {
                    achievementsData?.map((item, i) => (
                        <div className='p-3 flex flex-row gap-3' key={i}>
                            <Image src={item?.images}
                                width={40}
                                height={40}
                            alt='achivements'
                            /> 
                            <div>
                                <h4 className='text-gray-100 font-bold'>{item?.year}</h4>
                                <p className='text-gray-100 text-sm'>{item?.desc}</p>
                            </div>
                        </div>
                    ))
                }
                <div>
                </div>
            </div>

        </div>
    )
}

export default ApexAchievements