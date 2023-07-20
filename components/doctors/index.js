'use client';
import React from 'react';
import DoctorsList from './doctorsList';
import { Button } from '../ui/button';
import Faq from './faq';
import BreadCrumbs from '../common/breadCrumbs';
import Footer from '../common/footer';



const doctorsList = [
    {
        id: 1,
        image: '/images/dr-sushmita-agarwal.webp',
        name: 'Dr. Sushmita Agarwal',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 2,
        image: '/images/dr-amit-sharan.webp',
        name: 'Dr.Amit Sharan',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 3,
        image: '/images/dr-namrata-pradhan.webp',
        name: 'Dr. Namrata Pradhan',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 4,
        image: '/images/dr-priya-mathur.webp',
        name: 'Dr. Priya Mathur',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 5,
        image: '/images/dr-sachin-jhawar.webp',
        name: 'Dr. Sachin Jhawar',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 6,
        image: '/images/dr-shailesh-jhawar.webp',
        name: 'Dr. Shailesh Jhawar',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 7,
        image: '/images/dr-surendra-punia.webp',
        name: 'Dr. Surendra Punia',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 8,
        image: '/images/Dr. Jai Krishan Suthar.png',
        name: 'Dr. Jai Krishan Suthar',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 9,
        image: '/images/dr-shravan-singh.webp',
        name: 'Dr. Shravan Singh',
        designation: 'Consultant - Audiology & Speech Therapy'
    },
    {
        id: 10,
        image: '/images/dr-ashish-verma.webp',
        name: 'Dr. Ashish Verma',
        designation: 'Consultant - Audiology & Speech Therapy'
    }
]


function Doctors() {


    return (
        <div>
            <div className='container py-10'>
                <BreadCrumbs />
                <div>
                    <p className='text-center mt-10 text-3xl font-bold text-primaryBlue'>Meet Our Doctors</p>
                </div>
                <DoctorsList doctors={doctorsList} />
                <div className='text-center my-10 '>
                    <Button variant='outline' className='uppercase rounded-3xl text-xs w-36 max-w-sm border-primaryBlue text-primaryBlue h-9 hover:bg-buttonbg hover:text-primaryWhite'>Load More</Button>
                </div>
            </div>
            <Faq />
            <Footer />
        </div>

    )
}

export default Doctors