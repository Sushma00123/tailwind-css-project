import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FooterIcons({ icons }) {
    return (
        <div className='mt-5 flex gap-2'>
            {
                icons?.map((icon, i) => (
                    <div key={i} className=''>
                        <Link href={'#'} className='w-32'>
                            <Image
                                src={icon.image}
                                width={22} height={22}
                                alt='footer-icons'

                            />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default FooterIcons