import Image from 'next/image'
import React from 'react'

const serviceData = [
  {
    title: 'Cardiovascular Surgeries',
    desc: 'Offering personalized prevention plans and lifestyle counseling to maintain heart health.',
  },
  {
    title: 'Electrophysiology',
    desc: 'Diagnosing and treating heart rhythm disorders through studies, ablation procedures, and device implantation.',
  },
  {
    title: 'Non-Invasive Cardiology',
    desc: 'Conducting stress echocardiography, nuclear imaging, and vascular ultrasound for non-invasive assessment.',
  },
  {
    title: 'Diagnostic Services',
    desc: 'Utilizing advanced tools like ECG, echocardiography, stress testing, and imaging techniques for accurate evaluations.',
  },
  {
    title: 'Heart Failure Clinic',
    desc: 'Providing comprehensive care for heart failure patients, including medication management and advanced therapies.',
  },
  {
    title: 'Cardiovascular Surgeries',
    desc: 'Performing complex procedures like bypass grafting, valve repair/replacement, and congenital defect repair.',
  },
  {
    title: 'Interventional Cardiology',
    desc: 'Performing minimally invasive procedures such as angiography, angioplasty, and stenting.',
  },
  {
    title: 'Cardiac Rehabilitation',
    desc: 'Offering supervised exercise programs, education, and emotional support for post-procedure or event recovery.',
  },
]

function ServiceOffered() {
  return (
    <div className='mt-10 bg-gray-900'>
      <div className='py-16 text-center'>
        <h1 className='text-yellow-500 text-3xl font-bold'>Service Offered</h1>
      </div>
      <div className='container pb-16'>
        <div className='grid sm:grid-cols-3 gap-6'>
          {
            serviceData?.map((items, i) => (
              <div className='flex flex-row gap-3 items-start justify-center' key={i}>
                {/* <div> */}
                <Image
                  src='/images/activity.svg'
                  width={18}
                  height={18}
                  alt='activity'
                />

                {/* </div> */}
                <div className=''>
                  <h4 className='text-gray-100 text-sm font-bold'>{items?.title}</h4>
                  <p className='text-xs text-gray-300'>{items?.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>



    </div>
  )
}

export default ServiceOffered