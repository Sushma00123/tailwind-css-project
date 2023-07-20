import BreadCrumbs from '@/components/common/breadCrumbs'
import DoctorsDetails from '@/components/doctorsDetails'
import React from 'react'

function page() {
    const doctorsDet = [
        {
            image: '/images/Dr. Sushmita Agarwal.png',
            name: 'Dr. Sushmita Agarwal',
            designation: 'Consultant - Audiology & Speech Therapy',
            graduation: 'MASLP',
            location: 'Malviya Nagar, Mansarovar',
            overview: 'Dr. Sushmita Agarwal is a highly skilled and dedicated professional working as a Consultant in Audiology & Speech Therapy. With her extensive knowledge and expertise in the field, she has made significant contributions to the diagnosis, evaluation, and treatment of communication disorders.',
            qualification: 'Dr. Agarwal completed her medical education at a renowned institution, where she obtained her Doctor of Audiology (Au.D.) degree. She then pursued advanced training in speech therapy, specializing in the assessment and management of various speech and language disorders. With several years of experience, she has developed a comprehensive approach to addressing individual needs and providing personalized care to her patients.',
            fieldOfExp: "Dr. Agarwal is known for her compassionate nature and patient-centered approach. She believes in establishing a strong rapport with her patients, ensuring that they feel comfortable and understood throughout the treatment process. Her expertise covers a wide range of conditions, including hearing loss, auditory processing disorders, speech articulation difficulties, stuttering, and language delays."
        }
    ]
  return (
      <div className='container my-16'>
        {/* <BreadCrumbs /> */}
        {
        doctorsDet?.map((item,i)=>(
            <div key={i}>
                <DoctorsDetails doctorsDet={item}/>
            </div>
            ))
        }
        
    </div>
  )
}

export default page