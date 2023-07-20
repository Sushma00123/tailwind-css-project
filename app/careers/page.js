import Career from '@/components/career'
import ApplyJob from '@/components/career/applyJob'
import BreadCrumbs from '@/components/common/breadCrumbs'
import React from 'react'

function page() {
  return (
    <div>
      <div className='container my-16'>
        <BreadCrumbs />
        <div className='text-center'>
              <h2 className='text-3xl font-bold text-blue-800'>Job Listings</h2>
        </div>
        <Career />
    </div>
    <ApplyJob />
    </div>
  )
}

export default page