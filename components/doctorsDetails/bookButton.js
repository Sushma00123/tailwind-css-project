import React from 'react'
import { Button } from '../ui/button'

function BookButton() {
  return (
      <div className='mt-5 '>
          <Button className='bg-blue-900 text-white uppercase sm:w-64 text-xs rounded-3xl hover:bg-blue-900 hover:text-white' variant='outline'>Book An Appointment</Button>
    </div>
  )
}

export default BookButton