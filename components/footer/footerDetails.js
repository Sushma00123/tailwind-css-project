import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FooterDetails({footerData}) {
  return (
    <div>
          {
              footerData?.map((item, i) => (
                  <div key={i} className='mt-5'>
                      <Link href='/' className='flex flex-row gap-1'>
                          <Image src={item?.icon} width={18} height={18} alt='email' />
                    <p className='leading-8 text-secondaryGrey text-lg md:text-sm'>{item?.text}</p>
                      </Link>

                  </div>
              ))
          }
    </div>
  )
}

export default FooterDetails