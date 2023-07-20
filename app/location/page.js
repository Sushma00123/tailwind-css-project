import Location from '@/components/location'
import React from 'react'

const locationData = [
    {
        hospitalName:'Apex Hospital',
        location:'Malviya Nagar, Jaipur Rajasthan',
        image:'/images/loc.png',
        desc:'Apex Hospital is dedicated to providing top-quality, individual-focused holistic healthcare services. Our team of experienced doctors and trained staff, coupled with advanced medical technology and state-of-the-art infrastructure, ensures that each patient receives the highest level of care. With unwavering perseverance, dedication, and compassion, we strive to exceed expectations and create a healing environment where patients feel supported. At Apex Hospital, our commitment is to deliver comprehensive healthcare services that prioritize the well-being and satisfaction of our patients.',
        loc:'Apex Hospital, Malviya Nagar',
        address:'SP-4 & 6, Central Road, Malviya Nagar Industrial Area, Malviya Nagar, Jaipur, Rajasthan 302017'
    }
]

function page() {
    return (
        <div>
            <Location locationData={locationData}/>
        </div>
    )
}

export default page