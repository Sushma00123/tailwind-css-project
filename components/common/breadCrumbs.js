"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function BreadCrumbs() {
  const pathname = usePathname();

  let currentLink = '';
  const crumbs = pathname.split('/').filter(crumb => crumb !== '').map(crumb => {
    currentLink = + `/${crumb}`

    return (
      <>
        <div className="after:content-['/'] text-blue-800 " key={crumb}>
        <Link href='/' to={currentLink}>{crumb}</Link>
      </div>
      </>
    )
  })
  return (
    <div className='px-3 py-4 flex'>
      {
        crumbs.length === 0 ? 
            <span>Home</span> 
        :
          <span className='flex'>Home <Link className=" before:content-['/']" href={'#'}>
          </Link>
          {crumbs}
        </span>
        
      }
      {/* <p>Home<Link className='text-blue-800' href={'#'}>{pathname}</Link></p> */}

    </div>

  )
}

export default BreadCrumbs