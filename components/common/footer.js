import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterDetails from '../footer/footerDetails'
import FooterIcons from '../footer/footerIcons'


const footerData = [
    {
        icon: '/images/material-symbols_mail-rounded.svg',
        text: 'care@apexhospitals.com',
        img: '/images/facebook.svg'
    },
    {
        icon: '/images/information-box.svg',
        text: '0411-41114141 0411-41114141',
        img: '/images/facebook.svg'
    },
    {
        icon: '/images/emergency.svg',
        text: '0411-41114141',
        img: '/images/facebook.svg'
    },
    {
        icon: '/images/ambulance.svg',
        text: '0411-41114141',
        img: '/images/facebook.svg'
    }
]

const locations = [
    {
        title: 'Malviya Nagar, Jaipur (Rajasthan)',
        link: '/'
    },
    {
        title: 'Mansarovar, Jaipur (Rajasthan)',
        link: '/'
    },
    {
        title: 'Sawai Madhopur (Rajasthan)',
        link: '/'
    },
    {
        title: 'Jhunjhunu (Rajasthan)',
        link: '/'
    },
    {
        title: 'Bikaner (Rajasthan)',
        link: '/'
    },
]

const apexCofE = [
    {
        title: 'Nephrology',
        link: '/'
    },
    {
        title: 'Oncology',
        link: '/'
    }, {
        title: 'Urology',
        link: '/'
    }, {
        title: 'Neuroscience',
        link: '/'
    }, {
        title: 'Internal Medicine and GI Surgery',
        link: '/'
    },
    {
        title: 'Cardiology',
        link: '/'
    },
    {
        title: 'Critical Cade - ICU',
        link: '/'
    },
]

const quickLinks = [
    {
        title: 'About Us',
        link: '/'
    },
    {
        title: 'Contact Us',
        link: '/'
    },
    {
        title: 'Academics',
        link: '/'
    },
    {
        title: 'Investors',
        link: '/'
    },
    {
        title: 'Careers',
        link: '/'
    },
    {
        title: 'Doctors',
        link: '/'
    },
    {
        title: 'Medical Tourism',
        link: '/'
    },
    {
        title: 'Surgery estimate',
        link: '/'
    },
    {
        title: 'Blogs and Articles',
        link: '/'
    },
    {
        title: 'News and Events',
        link: '/'
    },
    {
        title: 'Upcoming Events',
        link: '/'
    },
    {
        title: 'FAQs',
        link: '/'
    },
]

const icons = [
    {
        image: '/images/facebook.svg',
        link: '/'
    },
    {
        image: '/images/twitter.svg',
        link: '/'
    },
    {
        image: '/images/linkedin.svg',
        link: '/'
    },
    {
        image: '/images/youtube.svg',
        link: '/'
    },

]

function Footer() {
    return (
        <div className='container w-full'>
            <div className='custom-container my-8 pb-6 bg-primaryBlack rounded-3xl'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='pb-8 pt-5 px-5 md:w-1/4 '>
                        <Link href='/'>
                            <Image
                                src='/images/Logo-Name.webp' width={200} height={60} alt='logo'
                            />
                        </Link>
                        <FooterDetails footerData={footerData} />
                        <div className='mt-5'>
                            <h3 className='text-secondaryGrey md:text-sm text-2xl md:font-bold mb-2 '>Download Our App</h3>
                            <div className='mt-2 flex gap-2 md:flex-row flex-col'>
                                <Link href='#'>
                                    <Image src='/images/app-store.webp' alt='app-store' width={120} height={40} />
                                </Link>
                                <Link href='#'>
                                    <Image src='/images/play-store.webp' alt='play-store' width={120} height={40} />
                                </Link>
                            </div>
                        </div>
                        <FooterIcons icons={icons} />

                    </div>
                    <div className='mt-2 md:mt-6 px-5 md:w-1/4 mx-auto'>
                        <h3 className='text-secondaryGrey md:text-sm text-2xl md:font-bold mb-2'>Locations</h3>
                        {
                            locations?.map((location, i) => (
                                <div key={i} className='leading-8'>
                                    <Link href={'#'} className='text-primaryWhite text-lg md:text-sm '>
                                        {location?.title}
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-6  px-5 md:w-1/4 '>
                        <h3 className='text-secondaryGrey md:text-sm text-2xl md:font-bold mb-2'>Apex Center Of Excellence</h3>
                        {
                            apexCofE?.map((item, i) => (
                                <div key={i} className='leading-8 '>
                                    <Link href={'#'} className='text-primaryWhite text-lg md:text-sm '>
                                        {item?.title}
                                    </Link>

                                </div>
                            ))
                        }
                    </div>

                    <div className='mt-6 px-5 md:w-1/4 '>
                        <h3 className='text-secondaryGrey md:text-sm text-2xl md:font-bold mb-2'>Quick Links</h3>
                        {
                            quickLinks?.map((link, i) => (
                                <div key={i} className='leading-8'>
                                    <Link href={'#'} className=' text-primaryWhite text-lg md:text-sm '>
                                        {link?.title}
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                    
                </div>
                {/* <div className='flex  text-gray-100 gap-3 flex-row justify-center py-3'>
                    <div class="flex items-center">
                        <Link href='#'>
                            <span class=" pr-2 md:pr-4 text-sm">Terms & conditions</span>
                        </Link>
                        <div class="border-r border-gray-100 h-4"></div>
                    </div>
                    <div class="flex items-center">
                        <Link href='#'>
                            <span class="pr-2 md:pr-4 text-sm">Privacy Policy</span>
                        </Link>
                        <div class="border-r border-gray-100 h-4"></div>
                    </div>
                    <div class="flex items-center">
                        <Link href='#'>
                            <span class=" md:pr-4 text-sm">Sitemap</span>
                        </Link>
                    </div>

                </div> */}
           </div>
            </div>

      
    )
}

export default Footer